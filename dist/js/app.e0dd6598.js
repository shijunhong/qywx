(function(e){function t(t){for(var r,o,c=t[0],i=t[1],s=t[2],f=0,d=[];f<c.length;f++)o=c[f],a[o]&&d.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);h&&h(t);while(d.length)d.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a={app:0},u=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-1ac7":"3b1365a4","chunk-1ac8":"7a4dd5d6","chunk-2169":"9d1211b4","chunk-27bc":"1b3640d7","chunk-3470":"b1d23aa7","chunk-4955":"b903805e","chunk-55d3":"0e7910d8","chunk-86fa":"6595fb19"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-1ac7":1,"chunk-1ac8":1,"chunk-2169":1,"chunk-27bc":1,"chunk-3470":1,"chunk-4955":1,"chunk-55d3":1,"chunk-86fa":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise(function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-1ac7":"71cac6f3","chunk-1ac8":"dfa424eb","chunk-2169":"5230f892","chunk-27bc":"d729e885","chunk-3470":"880974fd","chunk-4955":"60be807c","chunk-55d3":"58bf69c4","chunk-86fa":"7666f9d4"}[e]+".css",o=i.p+r,a=document.getElementsByTagName("link"),u=0;u<a.length;u++){var c=a[u],s=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(s===r||s===o))return t()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){c=f[u],s=c.getAttribute("data-href");if(s===r||s===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||o,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.request=r,n(a)},d.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(d)}).then(function(){o[e]=0}));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise(function(t,n){r=a[e]=[t,n]});t.push(r[2]=u);var s,f=document.getElementsByTagName("head")[0],d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=c(e),s=function(t){d.onerror=d.onload=null,clearTimeout(h);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,u=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");u.type=r,u.request=o,n[1](u)}a[e]=void 0}};var h=setTimeout(function(){s({type:"timeout",target:d})},12e4);d.onerror=d.onload=s,f.appendChild(d)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],f=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var h=f;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},3534:function(e,t,n){},"3db4":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],u={mounted:function(){}},c=u,i=n("2877"),s=Object(i["a"])(c,o,a,!1,null,null,null);s.options.__file="App.vue";var f=s.exports,d=n("a18c"),h=(n("a481"),n("2f62")),l=n("a417"),p=n("7155");r["default"].use(h["a"]);var m=new h["a"].Store({state:{},mutations:{},actions:{login:function(e,t){e.commit;Object(l["a"])(t).then(function(e){if("F"===e.status){var t=e.error.message;return t.startWith("qywx_application_expried")?void d["a"].push("/expire"):t.startWith("qywx_application_not_enable")?void d["a"].push("/expire"):void d["a"].push("/noauth")}Object(p["a"])(e.expires_in),sessionStorage.setItem("access_token",e.access_token),sessionStorage.setItem("refresh_token",e.refresh_token),d["a"].replace("/invite")})}}}),b=(n("aa35"),n("76a0")),g=n.n(b);n("3db4"),n("3534"),n("3b2b");String.prototype.startWith=function(e){var t=new RegExp("^"+e);return t.test(this)},String.prototype.endWith=function(e){var t=new RegExp(e+"$");return t.test(this)};var v=n("4eb5"),k=n.n(v);k.a.config.autoSetContainer=!0,r["default"].use(k.a),r["default"].prototype.$wx=window.wx,r["default"].config.productionTip=!1,r["default"].use(g.a);t["default"]=new r["default"]({router:d["a"],store:m,render:function(e){return e(f)}}).$mount("#app")},7155:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"a",function(){return u});n("c5f6"),n("cadf"),n("551c"),n("097d");var r=n("a417"),o=n("a18c");function a(e){var t=sessionStorage.getItem("refresh_token");if(t&&"undefined"!=t)return Object(r["b"])(t).then(function(t){"F"!==t.status?(u(t.expires_in),sessionStorage.setItem("access_token",t.access_token),sessionStorage.setItem("refresh_token",t.refresh_token),e?(e.headers["Authorization"]="Bearer "+sessionStorage.getItem("access_token"),Promise.resolve(e)):Promise.resolve()):(sessionStorage.clear(),o["a"].push("/nofound"))},function(e){sessionStorage.clear(),setTimeout(function(){o["a"].push("/nofound")},1e3)});sessionStorage.clear(),o["a"].push("/nofound")}function u(e){sessionStorage.setItem("expires",(new Date).getTime()/1e3+Number(e))}},a18c:function(e,t,n){"use strict";n("6762"),n("2fdb"),n("cadf"),n("551c"),n("097d");var r=n("2b0e"),o=n("8c4f"),a=[{path:"/login",name:"登录页",component:function(){return n.e("chunk-1ac8").then(n.bind(null,"1ebb"))}},{path:"/invite",name:"邀请客户",component:function(){return n.e("chunk-4955").then(n.bind(null,"3942"))}},{path:"/addclient",name:"邀请客户表单",component:function(){return n.e("chunk-86fa").then(n.bind(null,"36ab"))}},{path:"/inviteok",name:"客户资料提交成功",component:function(){return n.e("chunk-1ac7").then(n.bind(null,"df01"))}},{path:"/customer",name:"获客统计",component:function(){return n.e("chunk-55d3").then(n.bind(null,"72df"))}},{path:"/noauth",name:"无权限页面",component:function(){return n.e("chunk-27bc").then(n.bind(null,"a339"))}},{path:"/expire",name:"应用过期",component:function(){return n.e("chunk-2169").then(n.bind(null,"b4a7"))}},{path:"/nofound",name:"页面404",component:function(){return n.e("chunk-3470").then(n.bind(null,"e473"))}}],u=["/noauth","/expire","/nofound","/addclient","/inviteok"];r["default"].use(o["a"]);var c=new o["a"]({mode:"history",routes:a});function i(e,t){"true"!=sessionStorage.getItem("refresh")&&sessionStorage.removeItem("tap_index")}c.beforeEach(function(e,t,n){if(i(e,t),u.includes(e.path))n();else if(sessionStorage.getItem("access_token"))n();else{if("/login"==e.path)return void n();n({path:"/login",query:{redirect:e.fullPath}})}}),c.afterEach(function(){});t["a"]=c},a417:function(e,t,n){"use strict";n("cadf"),n("551c"),n("097d"),n("96cf");var r=n("3040"),o=n("db49"),a=n("bc3a"),u=n.n(a),c=u.a.create({baseURL:"".concat(o["a"]),timeout:6e4});c.interceptors.request.use(function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",t);case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),function(e){Promise.resolve(e)}),c.interceptors.response.use(function(e){var t=e.data;return t},function(e){return Promise.resolve(e.response.data)});var i=c;function s(e){return i({url:"/oauth/token",data:{grant_type:"qy_weixin_suite",client_id:1,client_secret:"syjIoXiFY7wrjZiUQDRPel4DSrtcWz9SZqBfX5Pw",code:e,app_name:"zntk"},method:"post"})}function f(e){return i({url:"/oauth/token",data:{grant_type:"refresh_token",client_id:1,client_secret:"syjIoXiFY7wrjZiUQDRPel4DSrtcWz9SZqBfX5Pw",refresh_token:e},method:"post"})}n.d(t,"a",function(){return s}),n.d(t,"b",function(){return f})},db49:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return o});var r="http://crmapi.newdhb.com",o="http://crm.newdhb.com"}});
//# sourceMappingURL=app.e0dd6598.js.map