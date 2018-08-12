const ora = require('ora');
const path = require('path')

const webpack = require('webpack')
const electron = require('electron')
const { spawn } = require('child_process')
const WebpackDevServer = require('webpack-dev-server')
const webpackHotMiddleware = require('webpack-hot-middleware')
const logger = require('./util/logger')

logger.logo()
process.env.NODE_ENV = 'development' //production
const mainBundleConfig=require('./config/main')
const rendererBundleConfig = require('./config/renderer')
const spinner = ora('Lemonc is start running... \n').start();

let mainProcess,
    manualRestart;
    

function createMainBundle() {
    return new Promise(resolve=>{
        const compiler  = webpack(mainBundleConfig)
        compiler.hooks.done.tap('LemoncPlugin',()=>{
            resolve()
        })
        // 监听修改
        compiler.watch({},(err, stats)=>{
            if(err) throw err;
            spinner.succeed('Main bundle is starting!')
            console.log(stats.toString({
                chunks: false,
                minimal:true,
                colors:true
            }))

            if (mainProcess && mainProcess.kill){
                manualRestart = true
                mainProcess.on('close',function(){
                    manualRestart = false
                    spinner.succeed('Process restarted!')
                })
                // 杀死electron进程  
                process.kill(mainProcess.pid)
                mainProcess = null

                startElectron()
                return;
            }
        })
    })
}

function createRendererBundle(){
    return new Promise(resolve=>{
        rendererBundleConfig.entry.renderer = [path.join(__dirname,'dev-client.js')].concat(rendererBundleConfig.entry.renderer)
        const compiler = webpack(rendererBundleConfig)  
        compiler.hooks.done.tap('LemoncPlugin',()=>{
            resolve()
        })
        const server = new WebpackDevServer(
            compiler,
            {
                contentBase: path.join(__dirname, '../'),
                compress: true,
                port: 9080,
                stats:{
                    colors:true,
                    chunks:false,
                    assets:true,
                    modules:false
                },
                before (app, ctx) {
                    app.use(webpackHotMiddleware(compiler,{
                        log: false, 
                        heartbeat: 2500 
                    }))
                }
            }
        )
        server.listen(9080,(err)=>{
            if(err) throw err;
            spinner.succeed(`start server http://localhost:9080`)
        })
    })
}

function startElectron(){
    mainProcess = spawn(electron,[path.resolve('dist','electron','main.js')])
    mainProcess.stdout.on('data',data=>{
        let text = ''
        data = data.toString().split(/\r?\n/)
        data.map(line => {
            text += `${line}\n`
        })
        if (/[0-9A-z]+/.test(text)){
            logger.info(text)
        }
    })


    mainProcess.stderr.on('data', data => {
        let text=''
        data = data.toString().split(/\r?\n/)
        data.map(line => {
            text += `${line}\n`
        })
        if (/[0-9A-z]+/.test(text)){
            logger.error(text)
        }
    })

    mainProcess.on('close', () => {
        spinner.fail('Process exit!')
        if(!manualRestart) process.exit()
    })

    spinner.succeed('Electron is started!')
}


Promise
    .all([createMainBundle(),createRendererBundle()])
    .then(res=>{
        startElectron()
    })
    .catch(err=>{
        console.log(err)
    })
