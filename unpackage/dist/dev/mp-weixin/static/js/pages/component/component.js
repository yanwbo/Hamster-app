global.webpackJsonp([44],{146:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("view",{staticClass:"index"},[e._m(0),e._v(" "),e._l(e.lists,function(t,i){return n("view",{key:i,staticClass:"uni-card"},[n("view",{staticClass:"uni-list"},[n("view",{staticClass:"uni-list-cell uni-collapse"},[n("view",{staticClass:"uni-list-cell-navigate uni-navigate-bottom",class:t.open?"uni-active":"",attrs:{"hover-class":"uni-list-cell-hover",eventid:"0-"+i},on:{click:function(t){e.trigerCollapse(i)}}},[e._v("\n\t\t\t\t\t"+e._s(t.name)+"\n\t\t\t\t")]),e._v(" "),n("view",{staticClass:"uni-list uni-collapse",class:t.open?"uni-active":""},e._l(t.pages,function(t,s){return n("view",{key:s,staticClass:"uni-list-cell",attrs:{"hover-class":"uni-list-cell-hover",eventid:"1-"+i+"-"+s},on:{click:function(n){e.goDetailPage(t)}}},[n("view",{staticClass:"uni-list-cell-navigate uni-navigate-right"},[e._v(" "+e._s(t)+" ")])])}))])])])})],2)};i._withStripped=!0;var s={render:i,staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("view",{staticClass:"index-hd"},[t("image",{staticClass:"index-logo",attrs:{src:"../../static/componentIndex.png"}}),this._v(" "),t("view",{staticClass:"page-section-title"},[this._v("\n\t\t\t以下将展示uni-app官方组件能力，组件样式仅供参考，开发者可根据自身需求自定义组件样式，具体属性参数详见uni-app开发文档。\n\t\t")])])}]};t.a=s},214:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a(n(1)),s=a(n(45));function a(e){return e&&e.__esModule?e:{default:e}}n(0).default;new i.default(s.default).$mount(),t.default={config:{navigationBarTitleText:"组件"}}},299:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(0).default;t.default={data:function(){return{lists:[{id:"view",name:"视图容器",open:!1,pages:["view","scroll-view","swiper"]},{id:"content",name:"基础内容",open:!1,pages:["text","rich-text","icon","progress"]},{id:"form",name:"表单组件",open:!1,pages:["button","checkbox","form","input","label","picker","radio","slider","switch","textarea"]},{id:"nav",name:"导航",open:!1,pages:["navigator"]},{id:"media",name:"媒体组件",open:!1,pages:["image","audio","video"]},{id:"map",name:"地图",open:!1,pages:["map"]},{id:"web-view",name:"网页",open:!1,pages:["web-view"]}]}},onShareAppMessage:function(){return{title:"欢迎体验uni-app",path:"/pages/component/component"}},methods:{trigerCollapse:function(e){for(var t=0,n=this.lists.length;t<n;++t)this.lists[t].open=e===t&&!this.lists[t].open},goDetailPage:function(e){i.navigateTo({url:"/pages/component/"+e+"/"+e})}}}},397:function(e,t){},45:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(299),s=n.n(i),a=n(146),o=!1;var l=function(e){o||n(397)},r=n(2)(s.a,a.a,l,null,null);r.options.__file="Users/yanwenbo/Desktop/workspace/hamster-app/pages/component/component.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] component.vue: functional components are not supported with templates, they should use render functions."),t.default=r.exports}},[214]);
//# sourceMappingURL=../../../../.sourcemap/pages/component/component.js.map