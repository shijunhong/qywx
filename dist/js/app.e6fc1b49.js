(function(e){function n(n){for(var r,o,i=n[0],c=n[1],s=n[2],f=0,l=[];f<i.length;f++)o=i[f],u[o]&&l.push(u[o][0]),u[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(n);while(l.length)l.shift()();return a.push.apply(a,s||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],r=!0,o=1;o<t.length;o++){var i=t[o];0!==u[i]&&(r=!1)}r&&(a.splice(n--,1),e=c(c.s=t[0]))}return e}var r={},o={app:0},u={app:0},a=[];function i(e){return c.p+"js/"+({}[e]||e)+"."+{"1ebb":"a6a5627b","chunk-27bc":"1d668322","chunk-2cfd":"f00817a6","chunk-7bf3":"85872bfa","chunk-a447":"3d748f68","chunk-f895":"4e71b81b"}[e]+".js"}function c(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.e=function(e){var n=[],t={"chunk-27bc":1,"chunk-2cfd":1,"chunk-7bf3":1,"chunk-a447":1,"chunk-f895":1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=new Promise(function(n,t){for(var r="css/"+({}[e]||e)+"."+{"1ebb":"31d6cfe0","chunk-27bc":"d729e885","chunk-2cfd":"492aa194","chunk-7bf3":"cf5b0e5f","chunk-a447":"36618b38","chunk-f895":"5a2991b5"}[e]+".css",o=c.p+r,u=document.getElementsByTagName("link"),a=0;a<u.length;a++){var i=u[a],s=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(s===r||s===o))return n()}var f=document.getElementsByTagName("style");for(a=0;a<f.length;a++){i=f[a],s=i.getAttribute("data-href");if(s===r||s===o)return n()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=n,l.onerror=function(n){var r=n&&n.target&&n.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.request=r,t(u)},l.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(l)}).then(function(){o[e]=0}));var r=u[e];if(0!==r)if(r)n.push(r[2]);else{var a=new Promise(function(n,t){r=u[e]=[n,t]});n.push(r[2]=a);var s,f=document.getElementsByTagName("head")[0],l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(e),s=function(n){l.onerror=l.onload=null,clearTimeout(d);var t=u[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src,a=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");a.type=r,a.request=o,t[1](a)}u[e]=void 0}};var d=setTimeout(function(){s({type:"timeout",target:l})},12e4);l.onerror=l.onload=s,f.appendChild(l)}return Promise.all(n)},c.m=e,c.c=r,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)c.d(t,r,function(n){return e[n]}.bind(null,r));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],f=s.push.bind(s);s.push=n,s=s.slice();for(var l=0;l<s.length;l++)n(s[l]);var d=f;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},3534:function(e,n,t){},"3db4":function(e,n,t){},"56d7":function(e,n,t){"use strict";t.r(n);t("cadf"),t("551c"),t("097d");var r=t("2b0e"),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},u=[],a={mounted:function(){}},i=a,c=t("2877"),s=Object(c["a"])(i,o,u,!1,null,null,null);s.options.__file="App.vue";var f=s.exports,l=t("8c4f"),d=[{path:"/login",name:"登录页",component:function(){return t.e("1ebb").then(t.bind(null,"1ebb"))}},{path:"/invite",name:"邀请客户",component:function(){return t.e("chunk-7bf3").then(t.bind(null,"3942"))}},{path:"/addclient",name:"邀请客户表单",component:function(){return t.e("chunk-f895").then(t.bind(null,"36ab"))}},{path:"/inviteok",name:"客户资料提交成功",component:function(){return t.e("chunk-a447").then(t.bind(null,"df01"))}},{path:"/customer",name:"获客统计",component:function(){return t.e("chunk-2cfd").then(t.bind(null,"72df"))}},{path:"/noauth",name:"无权限页面",component:function(){return t.e("chunk-27bc").then(t.bind(null,"a339"))}}];r["default"].use(l["a"]);var p=new l["a"]({mode:"history",routes:d});p.beforeEach(function(e,n,t){if(sessionStorage.getItem("login"))t();else{if("/login"==e.path)return void t();t({path:"/login",query:{redirect:e.fullPath}})}});var h=p,b=t("2f62"),m=t("76a0"),g=t.n(m),v=t("db49"),y=t("bc3a"),k=t.n(y),w=k.a.create({baseURL:"".concat(v["a"],"/api"),timeout:6e4,headers:{Authorization:sessionStorage.getItem("login")?"Bearer "+sessionStorage.getItem("login").token:""}});w.interceptors.request.use(function(e){return m["Indicator"].open({text:"加载中...",spinnerType:"fading-circle"}),e},function(e){m["Indicator"].close(),Promise.reject(e)}),w.interceptors.response.use(function(e){var n=e.data;return n.status,m["Indicator"].close(),n},function(e){if(e.response)return m["Indicator"].close(),Promise.reject(e.response);m["Indicator"].close()});var _=w;function j(e){return _({url:"/oauth/token",data:{grant_type:"qy_weixin_suite",client_id:1,client_secret:"syjIoXiFY7wrjZiUQDRPel4DSrtcWz9SZqBfX5Pw",code:e,app_name:"zntk"},method:"post"})}r["default"].use(b["a"]);var P=new b["a"].Store({state:{},mutations:{},actions:{login:function(e,n){m["Indicator"].open({text:"加载中...",spinnerType:"fading-circle"}),j(n).then(function(e){sessionStorage.setItem("login",e),setTimeout(function(){m["Indicator"].close(),h.push("/invite")},0)})}}});t("aa35"),t("3db4"),t("3534");r["default"].prototype.$wx=window.wx,r["default"].config.productionTip=!1,r["default"].use(g.a),new r["default"]({router:h,store:P,render:function(e){return e(f)}}).$mount("#app")},db49:function(e,n,t){"use strict";t.d(n,"a",function(){return r});var r="http://crmapif1.newdhb.com"}});
//# sourceMappingURL=app.e6fc1b49.js.map