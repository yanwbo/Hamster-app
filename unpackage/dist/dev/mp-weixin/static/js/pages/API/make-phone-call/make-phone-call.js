global.webpackJsonp([66],{192:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(n(1)),s=i(n(23));function i(e){return e&&e.__esModule?e:{default:e}}n(0).default;new a.default(s.default).$mount(),t.default={config:{navigationBarTitleText:"打电话"}}},23:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(277),s=n.n(a),i=n(94),o=!1;var u=function(e){o||n(345)},l=n(2)(s.a,i.a,u,null,null);l.options.__file="Users/yanwenbo/Desktop/workspace/hamster-app/pages/API/make-phone-call/make-phone-call.vue",l.esModule&&Object.keys(l.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),l.options.functional&&console.error("[vue-loader] make-phone-call.vue: functional components are not supported with templates, they should use render functions."),t.default=l.exports},277:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,s=n(3),i=(a=s)&&a.__esModule?a:{default:a};var o=n(0).default;t.default={data:function(){return{title:"makePhoneCall",disabled:!0}},methods:{bindInput:function(e){this.inputValue=e.target.value,this.inputValue.length>0?this.disabled=!1:this.disabled=!0},makePhoneCall:function(){o.makePhoneCall({phoneNumber:this.inputValue,success:function(){console.log("成功拨打电话")}})}},components:{pageHead:i.default}}},345:function(e,t){},94:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("view",[n("page-head",{attrs:{title:e.title,mpcomid:"0"}}),e._v(" "),n("view",{staticClass:"page-body"},[n("view",{staticClass:"page-section"},[n("view",{staticClass:"desc"},[e._v("请在下方输入电话号码")]),e._v(" "),n("input",{staticClass:"input",attrs:{type:"number",name:"input",eventid:"0"},on:{input:e.bindInput}}),e._v(" "),n("view",{staticClass:"btn-area"},[n("button",{attrs:{type:"primary",disabled:e.disabled,eventid:"1"},on:{tap:e.makePhoneCall}},[e._v("拨打")])],1)])])],1)};a._withStripped=!0;var s={render:a,staticRenderFns:[]};t.a=s}},[192]);
//# sourceMappingURL=../../../../../.sourcemap/pages/API/make-phone-call/make-phone-call.js.map