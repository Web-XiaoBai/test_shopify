(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"));
	else if(typeof define === 'function' && define.amd)
		define(["React"], factory);
	else if(typeof exports === 'object')
		exports["FeaturedProducts"] = factory(require("React"));
	else
		root["FeaturedProducts"] = factory(root["React"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"FeaturedProducts": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/components/FeaturedProducts/index.jsx","global-components"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js?modules!./src/components/FeaturedProducts/style.css":
/*!*************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js?modules!./src/components/FeaturedProducts/style.css ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"._3QsXKa_z8uId6q_rHm5Efu{\\n  padding: 0 5rem;\\n}\\n.yzKlmzJc9_bRq5-9sNAHD{\\n  display: flex;\\n  padding: 0;\\n}\\n.yzKlmzJc9_bRq5-9sNAHD li{\\n  width: 100%;\\n  flex-grow: 1;\\n  margin-left: 10px;\\n}\\n.yzKlmzJc9_bRq5-9sNAHD li:first-child{\\n  margin-left: 0;\\n}\", \"\"]);\n// Exports\nexports.locals = {\n\t\"products_wrapper\": \"_3QsXKa_z8uId6q_rHm5Efu\",\n\t\"products_ul\": \"yzKlmzJc9_bRq5-9sNAHD\"\n};\nmodule.exports = exports;\n\n\n//# sourceURL=webpack://%5Bname%5D/./src/components/FeaturedProducts/style.css?./node_modules/css-loader/dist/cjs.js?modules");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?modules!./src/global/ProductCard/style.css":
/*!****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js?modules!./src/global/ProductCard/style.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"._3zDflPLBJzX7iWQ96frqtJ{\\n  position: relative;\\n  color: rgb(18,18,18);\\n  font-size: 1.3rem;\\n  height: 100%;\\n  cursor: pointer;\\n}\\n.x0mJOAXpqkUTH-hMak6m7{\\n  padding-bottom: 100%;\\n  position: relative;\\n  border: 1px solid rgba(18,18,18,0.04);\\n  background: rgba(18,18,18,0.04);\\n  transition: background-color 0.5s ease;\\n  overflow: hidden;\\n}\\n.wKfam7x_Yd9goLTicdqTw{\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 100%;\\n  background: #fff;\\n}\\n.wKfam7x_Yd9goLTicdqTw img{\\n  object-fit: cover;\\n  object-position: center center;\\n  width: 100%;\\n  height: 100%;\\n  transition: transform 0.5s;\\n  transform: scale(1);\\n}\\n.mvgDal3IeloXoNal2ImqP{\\n  position: absolute;\\n  bottom: 1rem;\\n  left: 1rem;\\n  background: rgb(18,18,18);\\n  color: #fff;\\n  border-radius: 4rem;\\n  padding: 0.6rem 1.3rem;\\n  font-size: 1.2rem;\\n  letter-spacing: 0.1rem;\\n  line-height: 1;\\n  text-align: center;\\n}\\n.mvgDal3IeloXoNal2ImqP._2XmHo4PiqgPl_iMKwAbzU-{\\n  background: rgb(51,79,180);\\n}\\n.h2BZGQSYNuOFv7ptppmeP h3{\\n  font-size: 1.3rem;\\n  color: currentColor;\\n}\\n.h2BZGQSYNuOFv7ptppmeP h3 a{\\n  border-bottom: 1px solid transparent;\\n}\\n.h2BZGQSYNuOFv7ptppmeP h3 a::after{\\n  content: \\\"\\\";\\n  position: absolute;\\n  top: 0;\\n  right: 0;\\n  bottom: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 100%;\\n  z-index: 1;\\n}\\n.h2BZGQSYNuOFv7ptppmeP span{\\n  letter-spacing: 0.1rem;\\n}\\n._2urMqQb57SgeMjLjOPhg3l{\\n  color: rgba(18,18,18,0.75);\\n  text-decoration: line-through;\\n  margin-right: 1rem;\\n}\\n._2Iw6e4PJhHfXM6iQufjcyY{\\n  font-size: 1.6rem;\\n}\\n\\n._3zDflPLBJzX7iWQ96frqtJ:hover .x0mJOAXpqkUTH-hMak6m7{\\n  background-color: rgba(18,18,18, 0.06);\\n}\\n._3zDflPLBJzX7iWQ96frqtJ:hover .h2BZGQSYNuOFv7ptppmeP a{\\n  border-bottom-color: rgb(18,18,18);\\n}\\n._3zDflPLBJzX7iWQ96frqtJ:hover .wKfam7x_Yd9goLTicdqTw img{\\n  transform: scale(1.03);\\n}\", \"\"]);\n// Exports\nexports.locals = {\n\t\"card_wrapper\": \"_3zDflPLBJzX7iWQ96frqtJ\",\n\t\"card_img\": \"x0mJOAXpqkUTH-hMak6m7\",\n\t\"card_img_box\": \"wKfam7x_Yd9goLTicdqTw\",\n\t\"card_state\": \"mvgDal3IeloXoNal2ImqP\",\n\t\"sell\": \"_2XmHo4PiqgPl_iMKwAbzU-\",\n\t\"card_info\": \"h2BZGQSYNuOFv7ptppmeP\",\n\t\"compare_price\": \"_2urMqQb57SgeMjLjOPhg3l\",\n\t\"price\": \"_2Iw6e4PJhHfXM6iQufjcyY\"\n};\nmodule.exports = exports;\n\n\n//# sourceURL=webpack://%5Bname%5D/./src/global/ProductCard/style.css?./node_modules/css-loader/dist/cjs.js?modules");

/***/ }),

/***/ "./src/components/FeaturedProducts/index.jsx":
/*!***************************************************!*\
  !*** ./src/components/FeaturedProducts/index.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _global_ProductCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/global/ProductCard */ \"./src/global/ProductCard/index.jsx\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ \"./src/components/FeaturedProducts/style.css\");\n\n\n\n\nvar RichTextComponent = function RichTextComponent(props) {\n  var product = props.product;\n  console.log(product);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: _style_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].products_wrapper\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"Featured products\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n    className: _style_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].products_ul\n  }, product.map(function (card) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n      key: card.id\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_global_ProductCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      card: card\n    }));\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (RichTextComponent);\n\n//# sourceURL=webpack://%5Bname%5D/./src/components/FeaturedProducts/index.jsx?");

/***/ }),

/***/ "./src/components/FeaturedProducts/style.css":
/*!***************************************************!*\
  !*** ./src/components/FeaturedProducts/style.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_modules_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js?modules!./style.css */ \"./node_modules/css-loader/dist/cjs.js?modules!./src/components/FeaturedProducts/style.css\");\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_modules_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_modules_style_css__WEBPACK_IMPORTED_MODULE_1__);\n\n            \n\nvar options = {\"injectType\":\"styleTag\"};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_modules_style_css__WEBPACK_IMPORTED_MODULE_1___default.a, options);\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_css_loader_dist_cjs_js_modules_style_css__WEBPACK_IMPORTED_MODULE_1___default.a.locals || {});\n\n//# sourceURL=webpack://%5Bname%5D/./src/components/FeaturedProducts/style.css?");

/***/ }),

/***/ "./src/global/ProductCard/index.jsx":
/*!******************************************!*\
  !*** ./src/global/ProductCard/index.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/global/ProductCard/style.css\");\n\n\n\nvar ProductCard = function ProductCard(props) {\n  if (props === void 0) {\n    props = {};\n  }\n\n  var _props = props,\n      card = _props.card;\n\n  var toFixedPrice = function toFixedPrice(price) {\n    return (price / 100).toFixed(2);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: _style_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].card_wrapper\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: _style_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].card_img\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: _style_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].card_img_box\n  }, card.featured_image && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: card.featured_image,\n    alt: card.title\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: _style_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].card_state + \" \" + (card.available && _style_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sell)\n  }, card.available ? '销售中' : '售罄')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: _style_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].card_info\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"/products/\" + card.handle\n  }, card.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, card.compare_at_price && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: _style_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].compare_price\n  }, '$' + toFixedPrice(card.compare_at_price), \" USD\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: _style_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].price\n  }, '$' + toFixedPrice(card.price), \" USD\"))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductCard);\n\n//# sourceURL=webpack://%5Bname%5D/./src/global/ProductCard/index.jsx?");

/***/ }),

/***/ "./src/global/ProductCard/style.css":
/*!******************************************!*\
  !*** ./src/global/ProductCard/style.css ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_modules_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js?modules!./style.css */ \"./node_modules/css-loader/dist/cjs.js?modules!./src/global/ProductCard/style.css\");\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_modules_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_modules_style_css__WEBPACK_IMPORTED_MODULE_1__);\n\n            \n\nvar options = {\"injectType\":\"styleTag\"};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_modules_style_css__WEBPACK_IMPORTED_MODULE_1___default.a, options);\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_css_loader_dist_cjs_js_modules_style_css__WEBPACK_IMPORTED_MODULE_1___default.a.locals || {});\n\n//# sourceURL=webpack://%5Bname%5D/./src/global/ProductCard/style.css?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react__;\n\n//# sourceURL=webpack://%5Bname%5D/external_%22React%22?");

/***/ })

/******/ })["default"];
});