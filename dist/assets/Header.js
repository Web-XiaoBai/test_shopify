(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"));
	else if(typeof define === 'function' && define.amd)
		define(["React"], factory);
	else if(typeof exports === 'object')
		exports["Header"] = factory(require("React"));
	else
		root["Header"] = factory(root["React"]);
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
/******/ 		"Header": 0
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
/******/ 	deferredModules.push(["./src/components/Header/index.jsx","global-components"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js?modules!./src/components/Header/style.css":
/*!***************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js?modules!./src/components/Header/style.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"a{\\n  text-decoration: none;\\n  color: rgba(var(--color-foreground),0.75);\\n}\\nul{\\n  list-style: none;\\n  padding: 0 25px;\\n}\\n._2BUhgcnduPxAzz9lMqDS1D{\\n  display: flex;\\n  align-items: center;\\n  padding: 2rem 5rem;\\n}\\n._2edn7IpVqpJ_kalafibEXN{\\n  color: rgba(var(--color-foreground),0.75);\\n  font-size: 2.4rem;\\n  cursor: pointer;\\n}\\n._2edn7IpVqpJ_kalafibEXN:hover{\\n  color: #222;\\n}\\n._3gre6sl0D6bABQug6FUu1Z{\\n  flex-grow: 1;\\n}\\n._2e-Vn32Ht4iJDK31uabDgc{\\n  display: flex;\\n  list-style: none;\\n  font-size: 1.4rem;\\n}\\n._2e-Vn32Ht4iJDK31uabDgc li{\\n  font-size: 1.4rem;\\n  cursor: pointer;\\n}\\n._2e-Vn32Ht4iJDK31uabDgc li a{\\n  padding: 1.2rem;\\n}\\n._2e-Vn32Ht4iJDK31uabDgc li span{\\n  color: rgba(18,18,18,0.75);\\n  border-bottom: 1px solid transparent;\\n}\\n._2e-Vn32Ht4iJDK31uabDgc li:hover span{\\n  border-bottom-color: #222;\\n  color: #222;\\n}\\n._2e-Vn32Ht4iJDK31uabDgc ._1FxXSaab_tgVDGWCbNCd9C span{\\n  border-bottom-color: #222;\\n}\\n._2e-Vn32Ht4iJDK31uabDgc ._1FxXSaab_tgVDGWCbNCd9C:hover span{\\n  border-bottom-width: 2px;\\n}\\n._28Otn-jf5YhPM8ariM5D9S{\\n  display: flex;\\n  align-items: center;\\n  justify-self: end;\\n  padding: 0;\\n}\\n._28Otn-jf5YhPM8ariM5D9S li {\\n  height: 4.4rem;\\n  width: 4.4rem;\\n  line-height: 4.4rem;\\n  text-align: center;\\n  cursor: pointer;\\n  transition: transform 0.2s;\\n  transform: scale(1);\\n}\\n._28Otn-jf5YhPM8ariM5D9S li:hover{\\n  transform: scale(1.2);\\n}\\n._28Otn-jf5YhPM8ariM5D9S li i{\\n  font-size: 3rem;\\n}\", \"\"]);\n// Exports\nexports.locals = {\n\t\"header\": \"_2BUhgcnduPxAzz9lMqDS1D\",\n\t\"title\": \"_2edn7IpVqpJ_kalafibEXN\",\n\t\"nav\": \"_3gre6sl0D6bABQug6FUu1Z\",\n\t\"nav_ul\": \"_2e-Vn32Ht4iJDK31uabDgc\",\n\t\"current\": \"_1FxXSaab_tgVDGWCbNCd9C\",\n\t\"button_ul\": \"_28Otn-jf5YhPM8ariM5D9S\"\n};\nmodule.exports = exports;\n\n\n//# sourceURL=webpack://%5Bname%5D/./src/components/Header/style.css?./node_modules/css-loader/dist/cjs.js?modules");

/***/ }),

/***/ "./src/components/Header/index.jsx":
/*!*****************************************!*\
  !*** ./src/components/Header/index.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/components/Header/style.css\");\n\n\n\nvar HeaderComponent = function HeaderComponent() {\n  var props = {\n    title: 'JianhuiChen',\n    navs: [{\n      label: '主页',\n      url: '/'\n    }, {\n      label: '产品目录',\n      url: '/collections/all'\n    }, {\n      label: '联系方式',\n      url: '/pages/contact'\n    }],\n    buttons: [{\n      icon: 'icon-search',\n      click: function click() {\n        return console.log('query');\n      }\n    }, {\n      icon: 'icon-store',\n      click: function click() {\n        return console.log('store');\n      }\n    }]\n  };\n  var pathname = location.pathname;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"header\", {\n    className: _style_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].header\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n    className: _style_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].title\n  }, props.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"nav\", {\n    className: _style_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].nav\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n    className: _style_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].nav_ul\n  }, props.navs.map(function (item, i) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n      className: item.url === pathname ? _style_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].current : '',\n      key: i\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n      href: item.url\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, item.label)));\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n    className: _style_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].button_ul\n  }, props.buttons.map(function (item, i) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n      key: i\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n      className: \"iconfont \" + item.icon,\n      onClick: item.click\n    }));\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HeaderComponent);\n\n//# sourceURL=webpack://%5Bname%5D/./src/components/Header/index.jsx?");

/***/ }),

/***/ "./src/components/Header/style.css":
/*!*****************************************!*\
  !*** ./src/components/Header/style.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_modules_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js?modules!./style.css */ \"./node_modules/css-loader/dist/cjs.js?modules!./src/components/Header/style.css\");\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_modules_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_modules_style_css__WEBPACK_IMPORTED_MODULE_1__);\n\n            \n\nvar options = {\"injectType\":\"styleTag\"};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_modules_style_css__WEBPACK_IMPORTED_MODULE_1___default.a, options);\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_css_loader_dist_cjs_js_modules_style_css__WEBPACK_IMPORTED_MODULE_1___default.a.locals || {});\n\n//# sourceURL=webpack://%5Bname%5D/./src/components/Header/style.css?");

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