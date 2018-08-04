!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(window,function(){return function(e){function t(t){for(var r,o,i=t[0],c=t[1],a=t[2],u=0,d=[];u<i.length;u++)o=i[u],H[o]&&d.push(H[o][0]),H[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(q&&q(t);d.length;)d.shift()();return M.push.apply(M,a||[]),n()}function n(){for(var e,t=0;t<M.length;t++){for(var n=M[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==H[i]&&(r=!1)}r&&(M.splice(t--,1),e=k(k.s=n[0]))}return e}var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!w[e]||!g[e])return;for(var n in g[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(v[n]=t[n]);0==--m&&0===_&&x()}(e,t),r&&r(e,t)};var o,i=!0,c="5f3cd305acfc409edde7",a=1e4,u={},d=[],s=[];var l=[],f="idle";function p(e){f=e;for(var t=0;t<l.length;t++)l[t].call(null,e)}var h,v,y,m=0,_=0,b={},g={},w={};function O(e){return+e+""===e?+e:e}function j(e){if("idle"!==f)throw new Error("check() is only allowed in idle status");return i=e,p("check"),function(e){return e=e||1e4,new Promise(function(t,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,o=k.p+""+c+".hot-update.json";r.open("GET",o,!0),r.timeout=e,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+o+" timed out."));else if(404===r.status)t();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+o+" failed."));else{try{var e=JSON.parse(r.responseText)}catch(e){return void n(e)}t(e)}}})}(a).then(function(e){if(!e)return p("idle"),null;g={},b={},w=e.c,y=e.h,p("prepare");var t=new Promise(function(e,t){h={resolve:e,reject:t}});for(var n in v={},H)E(n);return"prepare"===f&&0===_&&0===m&&x(),t})}function E(e){w[e]?(g[e]=!0,m++,function(e){var t=document.getElementsByTagName("head")[0],n=document.createElement("script");n.charset="utf-8",n.src=k.p+""+e+"."+c+".hot-update.js",t.appendChild(n)}(e)):b[e]=!0}function x(){p("ready");var e=h;if(h=null,e)if(i)Promise.resolve().then(function(){return D(i)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var n in v)Object.prototype.hasOwnProperty.call(v,n)&&t.push(O(n));e.resolve(t)}}function D(t){if("ready"!==f)throw new Error("apply() is only allowed in ready status");var n,r,o,i,a;function s(e){for(var t=[e],n={},r=t.slice().map(function(e){return{chain:[e],id:e}});r.length>0;){var o=r.pop(),c=o.id,a=o.chain;if((i=P[c])&&!i.hot._selfAccepted){if(i.hot._selfDeclined)return{type:"self-declined",chain:a,moduleId:c};if(i.hot._main)return{type:"unaccepted",chain:a,moduleId:c};for(var u=0;u<i.parents.length;u++){var d=i.parents[u],s=P[d];if(s){if(s.hot._declinedDependencies[c])return{type:"declined",chain:a.concat([d]),moduleId:c,parentId:d};-1===t.indexOf(d)&&(s.hot._acceptedDependencies[c]?(n[d]||(n[d]=[]),l(n[d],[c])):(delete n[d],t.push(d),r.push({chain:a.concat([d]),id:d})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}t=t||{};var h={},m=[],_={},b=function(){console.warn("[HMR] unexpected require("+j.moduleId+") to disposed module")};for(var g in v)if(Object.prototype.hasOwnProperty.call(v,g)){var j;a=O(g);var E=!1,x=!1,D=!1,M="";switch((j=v[g]?s(a):{type:"disposed",moduleId:g}).chain&&(M="\nUpdate propagation: "+j.chain.join(" -> ")),j.type){case"self-declined":t.onDeclined&&t.onDeclined(j),t.ignoreDeclined||(E=new Error("Aborted because of self decline: "+j.moduleId+M));break;case"declined":t.onDeclined&&t.onDeclined(j),t.ignoreDeclined||(E=new Error("Aborted because of declined dependency: "+j.moduleId+" in "+j.parentId+M));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(j),t.ignoreUnaccepted||(E=new Error("Aborted because "+a+" is not accepted"+M));break;case"accepted":t.onAccepted&&t.onAccepted(j),x=!0;break;case"disposed":t.onDisposed&&t.onDisposed(j),D=!0;break;default:throw new Error("Unexception type "+j.type)}if(E)return p("abort"),Promise.reject(E);if(x)for(a in _[a]=v[a],l(m,j.outdatedModules),j.outdatedDependencies)Object.prototype.hasOwnProperty.call(j.outdatedDependencies,a)&&(h[a]||(h[a]=[]),l(h[a],j.outdatedDependencies[a]));D&&(l(m,[j.moduleId]),_[a]=b)}var I,A=[];for(r=0;r<m.length;r++)a=m[r],P[a]&&P[a].hot._selfAccepted&&A.push({module:a,errorHandler:P[a].hot._selfAccepted});p("dispose"),Object.keys(w).forEach(function(e){!1===w[e]&&function(e){delete H[e]}(e)});for(var S,q,U=m.slice();U.length>0;)if(a=U.pop(),i=P[a]){var V={},C=i.hot._disposeHandlers;for(o=0;o<C.length;o++)(n=C[o])(V);for(u[a]=V,i.hot.active=!1,delete P[a],delete h[a],o=0;o<i.children.length;o++){var T=P[i.children[o]];T&&((I=T.parents.indexOf(a))>=0&&T.parents.splice(I,1))}}for(a in h)if(Object.prototype.hasOwnProperty.call(h,a)&&(i=P[a]))for(q=h[a],o=0;o<q.length;o++)S=q[o],(I=i.children.indexOf(S))>=0&&i.children.splice(I,1);for(a in p("apply"),c=y,_)Object.prototype.hasOwnProperty.call(_,a)&&(e[a]=_[a]);var L=null;for(a in h)if(Object.prototype.hasOwnProperty.call(h,a)&&(i=P[a])){q=h[a];var N=[];for(r=0;r<q.length;r++)if(S=q[r],n=i.hot._acceptedDependencies[S]){if(-1!==N.indexOf(n))continue;N.push(n)}for(r=0;r<N.length;r++){n=N[r];try{n(q)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:a,dependencyId:q[r],error:e}),t.ignoreErrored||L||(L=e)}}}for(r=0;r<A.length;r++){var R=A[r];a=R.module,d=[a];try{k(a)}catch(e){if("function"==typeof R.errorHandler)try{R.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:a,error:n,originalError:e}),t.ignoreErrored||L||(L=n),L||(L=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:a,error:e}),t.ignoreErrored||L||(L=e)}}return L?(p("fail"),Promise.reject(L)):(p("idle"),new Promise(function(e){e(m)}))}var P={},H={0:0},M=[];function k(t){if(P[t])return P[t].exports;var n=P[t]={i:t,l:!1,exports:{},hot:function(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:o!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:j,apply:D,status:function(e){if(!e)return f;l.push(e)},addStatusHandler:function(e){l.push(e)},removeStatusHandler:function(e){var t=l.indexOf(e);t>=0&&l.splice(t,1)},data:u[e]};return o=void 0,t}(t),parents:(s=d,d=[],s),children:[]};return e[t].call(n.exports,n,n.exports,function(e){var t=P[e];if(!t)return k;var n=function(n){return t.hot.active?(P[n]?-1===P[n].parents.indexOf(e)&&P[n].parents.push(e):(d=[e],o=n),-1===t.children.indexOf(n)&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),d=[]),k(n)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return k[e]},set:function(t){k[e]=t}}};for(var i in k)Object.prototype.hasOwnProperty.call(k,i)&&"e"!==i&&"t"!==i&&Object.defineProperty(n,i,r(i));return n.e=function(e){return"ready"===f&&p("prepare"),_++,k.e(e).then(t,function(e){throw t(),e});function t(){_--,"prepare"===f&&(b[e]||E(e),0===_&&0===m&&x())}},n.t=function(e,t){return 1&t&&(e=n(e)),k.t(e,-2&t)},n}(t)),n.l=!0,n.exports}k.m=e,k.c=P,k.d=function(e,t,n){k.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},k.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},k.t=function(e,t){if(1&t&&(e=k(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(k.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)k.d(n,r,function(t){return e[t]}.bind(null,r));return n},k.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return k.d(t,"a",t),t},k.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},k.p="",k.h=function(){return c};var I=window.webpackJsonp=window.webpackJsonp||[],A=I.push.bind(I);I.push=t,I=I.slice();for(var S=0;S<I.length;S++)t(I[S]);var q=A;return M.push([9,1]),n()}([function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r);for(var i in r)"default"!==i&&function(e){n.d(t,e,function(){return r[e]})}(i);t.default=o.a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={render:function(){var e=arguments[0];return e("div",{attrs:{id:"app"}},[e("router-view")])}}},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(4),o=n.n(r);for(var i in r)"default"!==i&&function(e){n.d(t,e,function(){return r[e]})}(i);t.default=o.a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(19);t.default={data:function(){return{title:"Welcome Lemonc for Electron vue",nodeVersion:process.versions.node,chromeVersion:process.versions.chrome,electronVersion:process.versions.electron}},methods:{go:function(e){r.shell.openExternal(e)}}}},function(e,t,n){},,,function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"welcome"},[e._m(0),e._v(" "),n("div",{staticClass:"content"},[n("h1",[e._v(e._s(e.title))]),e._v(" "),n("p",[n("img",{attrs:{height:"30",src:"https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1841004364,244945169&fm=58&bpow=121&bpoh=75"}}),e._v(" "),n("strong",[e._v(e._s(e.nodeVersion))])]),e._v(" "),n("p",[e._v("Chrome  "),n("strong",[e._v(e._s(e.chromeVersion))])]),e._v(" "),n("p",[n("img",{attrs:{height:"30",src:"https://electronjs.org/"}}),e._v(" "),n("strong",[e._v(e._s(e.electronVersion))])]),e._v(" "),n("p",[n("a",{attrs:{href:"#"},on:{click:function(t){e.go("https://electronjs.org/docs/")}}},[e._v("Electron docs")])]),e._v(" "),n("p",[n("a",{attrs:{href:"#"},on:{click:function(t){e.go("https://github.com/ranyunlong/electron-desktop")}}},[e._v("Lemonc docs")])])])])},o=[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"logo"},[t("img",{attrs:{src:n(18)}})])}];n.d(t,"a",function(){return r}),n.d(t,"b",function(){return o})},function(e,t,n){"use strict";var r=a(n(7)),o=a(n(10)),i=a(n(13)),c=a(n(15));function a(e){return e&&e.__esModule?e:{default:e}}new r.default({el:"#app",template:"<App />",store:i.default,router:c.default,components:{App:o.default}})},function(e,t,n){"use strict";n.r(t);var r=n(0);for(var o in r)"default"!==o&&function(e){n.d(t,e,function(){return r[e]})}(o);n(11);var i=n(6),c=Object(i.a)(r.default,void 0,void 0,!1,null,null,null);t.default=c.exports},function(e,t,n){"use strict";var r=n(2);n.n(r).a},,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(7)),o=i(n(14));function i(e){return e&&e.__esModule?e:{default:e}}r.default.use(o.default),t.default=new o.default.Store({state:{num:0},getters:{},mutations:{},actions:{}})},,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=c(n(7)),o=c(n(16)),i=c(n(17));function c(e){return e&&e.__esModule?e:{default:e}}r.default.use(o.default),t.default=new o.default({routes:[{path:"/",name:"HelloWorld",component:i.default}]})},,function(e,t,n){"use strict";n.r(t);var r=n(8),o=n(3);for(var i in o)"default"!==i&&function(e){n.d(t,e,function(){return o[e]})}(i);n(20);var c=n(6),a=Object(c.a)(o.default,r.a,r.b,!1,null,null,null);t.default=a.exports},function(e,t,n){e.exports=n.p+"images/logo.png"},function(e,t){e.exports=require("electron")},function(e,t,n){"use strict";var r=n(5);n.n(r).a}])});