(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-address-create"],{"2d71":function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"c",(function(){return i})),r.d(t,"a",(function(){return a}));var a={uForm:r("504a").default,uFormItem:r("ef02").default,uInput:r("7e4a").default,selectRegion:r("b447").default},n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-uni-view",{staticClass:"container"},[r("v-uni-view",{staticClass:"page-title"},[e._v("收货地址")]),r("v-uni-view",{staticClass:"form-wrapper"},[r("u-form",{ref:"uForm",attrs:{model:e.form,"label-width":"140rpx"}},[r("u-form-item",{attrs:{label:"姓名",prop:"name"}},[r("u-input",{attrs:{placeholder:"请输入收货人姓名"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),r("u-form-item",{attrs:{label:"电话",prop:"phone"}},[r("u-input",{attrs:{placeholder:"请输入收货人手机号"},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}})],1),r("u-form-item",{attrs:{label:"地区",prop:"region"}},[r("select-region",{model:{value:e.form.region,callback:function(t){e.$set(e.form,"region",t)},expression:"form.region"}})],1),r("u-form-item",{attrs:{label:"详细地址",prop:"detail","border-bottom":!1}},[r("u-input",{attrs:{placeholder:"街道门牌、楼层等信息"},model:{value:e.form.detail,callback:function(t){e.$set(e.form,"detail",t)},expression:"form.detail"}})],1)],1)],1),r("v-uni-view",{staticClass:"footer"},[r("v-uni-view",{staticClass:"btn-wrapper"},[r("v-uni-view",{staticClass:"btn-item btn-item-main",class:{disabled:e.disabled},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.handleSubmit()}}},[e._v("保存")])],1)],1)],1)},i=[]},4385:function(e,t,r){"use strict";var a=r("dbce"),n=r("4ea4");r("d3b7"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(r("b447")),o=r("4bbf"),s=a(r("0711")),f={name:"",phone:"",region:[],detail:""},d={name:[{required:!0,message:"请输入姓名",trigger:["blur","change"]}],phone:[{required:!0,message:"请输入手机号",trigger:["blur","change"]},{validator:function(e,t,r){return(0,o.isMobile)(t)},message:"手机号码不正确",trigger:["blur"]}],region:[{required:!0,message:"请选择省市区",trigger:["blur","change"],type:"array"}],detail:[{required:!0,message:"请输入详细地址",trigger:["blur","change"]}]},u={components:{SelectRegion:i.default},data:function(){return{form:f,rules:d,disabled:!1}},onLoad:function(e){},onReady:function(){this.$refs.uForm.setRules(this.rules)},methods:{handleSubmit:function(){var e=this;if(e.disabled)return!1;e.$refs.uForm.validate((function(t){t&&(e.disabled=!0,s.add(e.form).then((function(t){e.$toast(t.message),uni.navigateBack()})).finally((function(){return e.disabled=!1})))}))}}};t.default=u},5730:function(e,t,r){"use strict";var a=r("7ade"),n=r.n(a);n.a},"5f52":function(e,t,r){var a=r("24fb");t=a(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 引入uView全局scss变量文件 */.page-title[data-v-5fe46676]{width:94%;margin:0 auto;padding-top:%?40?%;font-size:%?28?%;color:rgba(69,90,100,.6)}.form-wrapper[data-v-5fe46676]{margin:%?20?% auto %?20?% auto;padding:0 %?40?%;width:94%;-webkit-box-shadow:0 %?1?% %?5?% 0 rgba(0,0,0,.05);box-shadow:0 %?1?% %?5?% 0 rgba(0,0,0,.05);-webkit-border-radius:%?16?%;border-radius:%?16?%;background:#fff}\r\n/* 底部操作栏 */.footer[data-v-5fe46676]{margin-top:%?60?%}.footer .btn-wrapper[data-v-5fe46676]{height:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 %?20?%}.footer .btn-item[data-v-5fe46676]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?28?%;height:%?100?%;line-height:%?100?%;text-align:center;color:#fff;-webkit-border-radius:%?50?%;border-radius:%?50?%}.footer .btn-item-main[data-v-5fe46676]{background:-webkit-gradient(linear,left top,right top,from(#f9211c),to(#ff6335));background:-webkit-linear-gradient(left,#f9211c,#ff6335);background:linear-gradient(90deg,#f9211c,#ff6335)}.footer .btn-item-main.disabled[data-v-5fe46676]{background:#ff9779}',""]),e.exports=t},"7ade":function(e,t,r){var a=r("d388");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=r("4f06").default;n("ea75d100",a,!0,{sourceMap:!1,shadowMode:!1})},"7ebd":function(e,t,r){"use strict";r.r(t);var a=r("4385"),n=r.n(a);for(var i in a)"default"!==i&&function(e){r.d(t,e,(function(){return a[e]}))}(i);t["default"]=n.a},9342:function(e,t,r){"use strict";var a=r("a76a"),n=r.n(a);n.a},a76a:function(e,t,r){var a=r("5f52");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=r("4f06").default;n("f9429cc6",a,!0,{sourceMap:!1,shadowMode:!1})},d388:function(e,t,r){var a=r("24fb");t=a(!1),t.push([e.i,"uni-page-body[data-v-5fe46676]{background:#f7f8fa}body.?%PAGE?%[data-v-5fe46676]{background:#f7f8fa}",""]),e.exports=t},d848:function(e,t,r){"use strict";r.r(t);var a=r("2d71"),n=r("7ebd");for(var i in n)"default"!==i&&function(e){r.d(t,e,(function(){return n[e]}))}(i);r("5730"),r("9342");var o,s=r("f0c5"),f=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"5fe46676",null,!1,a["a"],o);t["default"]=f.exports}}]);