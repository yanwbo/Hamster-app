global.webpackJsonp([38],{

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('view', [_c('page-head', {
    attrs: {
      "title": _vm.title,
      "mpcomid": '0'
    }
  }), _vm._v(" "), _c('view', {
    staticClass: "page-body"
  }, [_c('view', {
    staticClass: "page-section"
  }, [_c('view', {
    staticClass: "page-section-title"
  }, [_vm._v("地区选择器")]), _vm._v(" "), _c('view', {
    staticClass: "uni-list"
  }, [_c('view', {
    staticClass: "uni-list-cell"
  }, [_c('view', {
    staticClass: "list-left"
  }, [_vm._v("\n\t\t\t\t\t\t当前选择\n\t\t\t\t\t")]), _vm._v(" "), _c('view', {
    staticClass: "uni-list-cell-db"
  }, [_c('picker', {
    attrs: {
      "value": _vm.index,
      "range": _vm.array,
      "eventid": '0'
    },
    on: {
      "change": _vm.bindPickerChange
    }
  }, [_c('view', {
    staticClass: "uni-input"
  }, [_vm._v(_vm._s(_vm.array[_vm.index]))])])], 1)])]), _vm._v(" "), _c('view', {
    staticClass: "page-section-title"
  }, [_vm._v("时间选择器")]), _vm._v(" "), _c('view', {
    staticClass: "uni-list"
  }, [_c('view', {
    staticClass: "uni-list-cell"
  }, [_c('view', {
    staticClass: "list-left"
  }, [_vm._v("\n\t\t\t\t\t\t当前选择\n\t\t\t\t\t")]), _vm._v(" "), _c('view', {
    staticClass: "uni-list-cell-db"
  }, [_c('picker', {
    attrs: {
      "mode": "time",
      "value": _vm.time,
      "start": "09:01",
      "end": "21:01",
      "eventid": '1'
    },
    on: {
      "change": _vm.bindTimeChange
    }
  }, [_c('view', {
    staticClass: "uni-input"
  }, [_vm._v(_vm._s(_vm.time))])])], 1)])]), _vm._v(" "), _c('view', {
    staticClass: "page-section-title"
  }, [_vm._v("日期选择器")]), _vm._v(" "), _c('view', {
    staticClass: "uni-list"
  }, [_c('view', {
    staticClass: "uni-list-cell"
  }, [_c('view', {
    staticClass: "list-left"
  }, [_vm._v("\n\t\t\t\t\t\t当前选择\n\t\t\t\t\t")]), _vm._v(" "), _c('view', {
    staticClass: "uni-list-cell-db"
  }, [_c('picker', {
    attrs: {
      "mode": "date",
      "value": _vm.date,
      "start": "2015-09-01",
      "end": "2017-09-01",
      "eventid": '2'
    },
    on: {
      "change": _vm.bindDateChange
    }
  }, [_c('view', {
    staticClass: "uni-input"
  }, [_vm._v(_vm._s(_vm.date))])])], 1)])])])])], 1)
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

var _vue = __webpack_require__(1);var _vue2 = _interopRequireDefault(_vue);
var _picker = __webpack_require__(55);var _picker2 = _interopRequireDefault(_picker);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var uni = __webpack_require__(0).default;
var app = new _vue2.default(_picker2.default);
app.$mount();exports.default =

{
	config: { "navigationBarTitleText": "picker" } };

/***/ }),

/***/ 321:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });



















































var _pageHead = __webpack_require__(3);var _pageHead2 = _interopRequireDefault(_pageHead);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var uni = __webpack_require__(0).default;exports.default =

{
	data: function data() {
		return {
			title: 'picker',
			array: ['中国', '美国', '巴西', '日本'],
			index: 0,
			date: '2016-09-01',
			time: '12:01' };

	},
	methods: {
		bindPickerChange: function bindPickerChange(e) {
			console.log('picker发送选择改变，携带值为', e.target.value);
			this.index = e.target.value;
		},
		bindDateChange: function bindDateChange(e) {
			this.date = e.target.value;
		},
		bindTimeChange: function bindTimeChange(e) {
			this.time = e.target.value;
		} },

	components: {
		pageHead: _pageHead2.default } };

/***/ }),

/***/ 398:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_runtime_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_uni_loader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_picker_vue__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_runtime_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_uni_loader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_picker_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_runtime_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_uni_loader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_picker_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_44db1219_hasScoped_false_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_picker_vue__ = __webpack_require__(135);
function injectStyle (ssrContext) {
  __webpack_require__(398)
}
var normalizeComponent = __webpack_require__(2)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_runtime_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_uni_loader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_picker_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_44db1219_hasScoped_false_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_picker_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

},[232]);