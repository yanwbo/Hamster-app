global.webpackJsonp([61],{116:function(e,t,s){"use strict";var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("view",[s("page-head",{attrs:{title:e.title,mpcomid:"0"}}),e._v(" "),s("view",{staticClass:"page-body"},[s("view",{staticClass:"page-section page-section_center"},[s("text",{staticClass:"page-body-text"},[e._v("旋转手机即可获取方位信息")]),e._v(" "),s("view",{staticClass:"direction"},[s("view",{staticClass:"bg-compass-line"}),e._v(" "),s("image",{staticClass:"bg-compass",style:"transform: rotate("+e.direction+"deg)",attrs:{src:"../../../static/compass.png"}}),e._v(" "),s("view",{staticClass:"direction-value"},[s("text",[e._v(e._s(e.direction))]),e._v(" "),s("text",{staticClass:"direction-degree"},[e._v("o")])])])])])],1)};n._withStripped=!0;var a={render:n,staticRenderFns:[]};t.a=a},197:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(s(1)),a=o(s(28));function o(e){return e&&e.__esModule?e:{default:e}}s(0).default;new n.default(a.default).$mount(),t.default={config:{navigationBarTitleText:"监听罗盘数据"}}},28:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(282),a=s.n(n),o=s(116),i=!1;var r=function(e){i||s(367)},c=s(2)(a.a,o.a,r,null,null);c.options.__file="Users/yanwenbo/Desktop/workspace/hamster-app/pages/API/on-compass-change/on-compass-change.vue",c.esModule&&Object.keys(c.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),c.options.functional&&console.error("[vue-loader] on-compass-change.vue: functional components are not supported with templates, they should use render functions."),t.default=c.exports},282:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,a=s(3),o=(n=a)&&n.__esModule?n:{default:n};var i=s(0).default;t.default={data:function(){return{title:"onCompassChange",direction:0}},onReady:function(){var e=this;i.onCompassChange(function(t){e.direction=parseInt(t.direction)})},onUnload:function(){i.startCompass(),this.direction=0},components:{pageHead:o.default}}},367:function(e,t){}},[197]);
//# sourceMappingURL=../../../../../.sourcemap/pages/API/on-compass-change/on-compass-change.js.map