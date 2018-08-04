# lemonc for react


### Application directory

```
目录（或者子目录）
├─.lemonc                       lemonc 编译器
|   ├─config                    webpack打包配置
|   |   ├─main.js               main进程编译配置
|   |   └─renderer.js           renderer进程编译配置
|   ├─util                      工具包
|   |   └─logger.js             日志输出
|   ├─build.js                  编译器模块
|   ├─dev-client.js             热加载配置
|   └─dev.js                    开发编译器模块
├─build                         应用打包生产目录
|   └─icons                     打包应用时所需图标目录
├─dist                          web生产目录
|   └─electron                  web文件生产目录
├─src                           开发目录
|   ├─main                      主进程开发文件夹
|   |   └─index.js              主进程入口文件
|   ├─renderder                 renderder进程开发文件夹
|   |   ├─assets                资源文件
|   |   ├─components            组件
|   |   ├─store                 redux
|   |   ├─App.js                App组件
|   |   └─main.js               渲染进程入口
|   └─index.html                html模板文件
├─license.txt                   打包应用时启动安装界面的协议文件
├─package.json                  包管理
└─README.md                     自述文件
```

### use 

```
> npm run dev
```

### build

```shell
> npm i -g electron-builder
> npm run build
```
