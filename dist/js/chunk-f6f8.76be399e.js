(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f6f8"],{"06d7":function(t,e,n){"use strict";var s=n("9a84"),i=n.n(s);i.a},"0fd0":function(t,e,n){"use strict";var s=n("a628"),i=n.n(s);i.a},"1c30":function(t,e,n){},3942:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("tap",{attrs:{tap1:"添加到我的客户",tap2:"关注微工作台",isRefresh:!0}},[n("add",{attrs:{slot:"tap1",info:t.info},slot:"tap1"}),n("attention",{attrs:{slot:"tap2",info:t.info},slot:"tap2"})],1),n("bottom")],1)},i=[],a=(n("cadf"),n("551c"),n("097d"),n("cc36")),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"block"},[t._m(0),n("p",{staticClass:"tip"},[t._v("客户使用手机微信扫描下面的二维码")]),n("img",{staticClass:"qr",attrs:{src:t.info.staff_invite_qrcode}})]),n("div",{staticClass:"block",staticStyle:{"padding-bottom":"2rem"}},[t._m(1),n("p",{staticClass:"tip"},[t._v("发送一下链接给想要邀请的客户")]),n("p",{staticClass:"url-box"},[t._v(t._s(t.info.staff_invite_url))]),n("span",{staticClass:"url-share",on:{click:t.copy}},[t._v("复制并发送给客户")])])])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title"},[t._v("\n          方式一\n          "),n("span",{staticClass:"line"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title"},[t._v("\n          方式二\n          "),n("span",{staticClass:"line"})])}],c=n("76a0"),u={props:["info"],components:{},methods:{copy:function(){this.$copyText(this.info.staff_invite_url).then(function(){Object(c["Toast"])({message:"已复制到剪切板",duration:2e3})},function(){Object(c["Toast"])({message:"复制失败",duration:2e3})})}}},l=u,d=(n("06d7"),n("2877")),p=Object(d["a"])(l,r,o,!1,null,"128b1d0c",null);p.options.__file="add.vue";var f=p.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"block"},[t._m(0),n("p",{staticClass:"tip"},[t._v("邀请客户关注微工作台之后，客户可以在微工作台中接收各种通知消息以及进行互动")]),n("img",{staticClass:"qr",attrs:{src:t.info.corp_wxqrcode,alt:"图片加载失败"}}),n("p",{staticClass:"qr-tip"},[t._v("微工作台二维码")])])},v=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title"},[t._v("\n      微工作台\n      "),n("span",{staticClass:"line"})])}],_={props:["info"]},m=_,g=(n("a373"),Object(d["a"])(m,h,v,!1,null,"78a1b002",null));g.options.__file="attention.vue";var x=g.exports,b=n("bf34"),C=n("b05c"),k={mounted:function(){var t=this;Object(C["a"])("".concat(window.g.redirectHost,"/addclient")).then(function(e){"T"===e.status&&(t.info=e.data)})},components:{Tap:a["a"],add:f,attention:x,Bottom:b["a"]},data:function(){return{info:{}}}},w=k,S=(n("0fd0"),Object(d["a"])(w,s,i,!1,null,"a7273c14",null));S.options.__file="index.vue";e["default"]=S.exports},5281:function(t,e,n){"use strict";var s=n("f338"),i=n.n(s);i.a},"751a":function(t,e,n){"use strict";n("96cf");var s=n("3040"),i=(n("cadf"),n("551c"),n("097d"),n("bc3a")),a=n.n(i),r=n("a18c"),o=n("76a0"),c=(n("56d7"),n("7155")),u=a.a.create({baseURL:"".concat(window.g.host),timeout:6e4});u.interceptors.request.use(function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!(sessionStorage.getItem("expires")&&sessionStorage.getItem("expires")-(new Date).getTime()/1e3<300)){t.next=8;break}return t.next=3,Object(c["b"])(e);case 3:return e=t.sent,o["Indicator"].open({text:"加载中...",spinnerType:"fading-circle"}),t.abrupt("return",e);case 8:return sessionStorage.getItem("access_token")&&(e.headers["Authorization"]="Bearer "+sessionStorage.getItem("access_token")),o["Indicator"].open({text:"加载中...",spinnerType:"fading-circle"}),t.abrupt("return",e);case 11:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),function(t){o["Indicator"].close(),Promise.reject(t)}),u.interceptors.response.use(function(t){var e=t.data;return o["Indicator"].close(),e},function(t){if(t.response){if(401==t.response.status){o["Indicator"].close();var e=t.response.data.error.message;if(e.startWith("qywx_application_expried"))return void r["a"].push("/expire");if(e.startWith("qywx_application_not_enable"))return void r["a"].push("/expire");if(e.startWith("invalid_credentials"))return sessionStorage.clear(),void r["a"].push("/login");if(e.startWith("access_denied"))return void Object(c["b"])();r["a"].push("/noauth")}o["Indicator"].close()}else o["Indicator"].close();return Promise.resolve(t.response.data)}),e["a"]=u},"9a84":function(t,e,n){},a373:function(t,e,n){"use strict";var s=n("1c30"),i=n.n(s);i.a},a628:function(t,e,n){},a951:function(t,e,n){},b05c:function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a}),n.d(e,"c",function(){return r});var s=n("751a");function i(t){return Object(s["a"])({url:"/api/zntk/v1/staff/qrcode",params:{size:"150",url:t},method:"get"})}function a(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return Object(s["a"])({url:"/api/zntk/v1/clients/verify-code",params:{mobile:t,staff_id:e,check:n},method:"get"})}function r(t){return Object(s["a"])({url:"/api/zntk/v1/clients/".concat(t.commonStaffId),data:t,method:"post"})}},bf34:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bottom"},t._l(t.taps,function(e){return n("div",{key:e.name,staticClass:"bottom-item",on:{click:function(n){t.handleClick(e.url)}}},[t._v(t._s(e.name))])}))},i=[],a={data:function(){return{taps:[{name:"邀请客户",url:"/invite"},{name:"获客统计",url:"/customer"}]}},methods:{handleClick:function(t){this.$router.push(t)}},mounted:function(){}},r=a,o=(n("5281"),n("2877")),c=Object(o["a"])(r,s,i,!1,null,"74f34760",null);c.options.__file="Bottom.vue";e["a"]=c.exports},cc36:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tap",on:{touchstart:t.start,touchend:t.end}},[n("div",{staticClass:"tap-head"},[n("div",{staticClass:"tap-item",class:{active:1===t.index},on:{click:function(e){t.handleClick(1)}}},[n("span",[t._v(t._s(t.tap1))]),n("span",{directives:[{name:"show",rawName:"v-show",value:1===t.index,expression:"index === 1"}],staticClass:"line"})]),n("div",{staticClass:"tap-item",class:{active:2===t.index},on:{click:function(e){t.handleClick(2)}}},[n("span",[t._v(t._s(t.tap2))]),n("span",{directives:[{name:"show",rawName:"v-show",value:2===t.index,expression:"index === 2"}],staticClass:"line"})])]),t._t("default"),1===t.index?t._t("tap1"):t._e(),2===t.index?t._t("tap2"):t._e()],2)},i=[],a=(n("c5f6"),{name:"tap",props:{tap_index:{type:Number},tap1:{type:String,required:!0},tap2:{type:String,required:!0},isRefresh:{type:Boolean,default:function(){return!1}}},data:function(){return{index:1,pageX:0,pageY:0,pageXend:0,pageYend:0}},beforeMount:function(){if(sessionStorage.removeItem("refresh"),this.tap_index)this.index=this.tap_index;else{var t=sessionStorage.getItem("tap_index");t&&(this.index=Number(t))}},mounted:function(){},methods:{setStorage:function(){sessionStorage.setItem("tap_index",this.index)},handleClick:function(t){this.index=t,this.setStorage()},start:function(t){this.pageX=t.touches[0].pageX,this.pageY=t.touches[0].pageY},slide:function(){Math.abs(this.pageX-this.pageXend)>120&&(this.pageX>this.pageXend?this.index>1&&(this.index=this.index-1,this.setStorage()):this.index<2&&(this.index=this.index+1,this.setStorage()))},refresh:function(){this.isRefresh&&this.pageY-this.pageYend>150&&(sessionStorage.setItem("refresh","true"),this.$router.go(0))},end:function(t){this.pageXend=t.changedTouches[0].pageX,this.pageYend=t.changedTouches[0].pageY,this.slide(),this.refresh()}}}),r=a,o=(n("d514"),n("2877")),c=Object(o["a"])(r,s,i,!1,null,"48fbbc03",null);c.options.__file="Tap.vue";e["a"]=c.exports},d514:function(t,e,n){"use strict";var s=n("a951"),i=n.n(s);i.a},f338:function(t,e,n){}}]);
//# sourceMappingURL=chunk-f6f8.76be399e.js.map