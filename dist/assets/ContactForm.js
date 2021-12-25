(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"));
	else if(typeof define === 'function' && define.amd)
		define(["React"], factory);
	else if(typeof exports === 'object')
		exports["ContactForm"] = factory(require("React"));
	else
		root["ContactForm"] = factory(root["React"]);
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
/******/ 		"ContactForm": 0
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
/******/ 	deferredModules.push(["./src/components/ContactForm/index.jsx","global-components"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js?modules!./src/components/ContactForm/style.css":
/*!********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js?modules!./src/components/ContactForm/style.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".sO2j0Voajzbz8tFRMf506{\\n  max-width: 72.6rem;\\n  margin: 0 auto;\\n}\\n.sO2j0Voajzbz8tFRMf506 h1{\\n  font-size: 5.2rem;\\n}\\n._1N7V2YbmWz-d7kWXjVXnzi{\\n  display: grid;\\n  grid-template-columns: repeat(2, 1fr);\\n  grid-column-gap: 2rem;\\n}\\n._9GT5qDSM4uUsthMlSrcm3{\\n  position: relative;\\n  width: 100%;\\n  display: flex;\\n  margin-bottom: 2rem;\\n}\\n._9GT5qDSM4uUsthMlSrcm3 input,\\n._9GT5qDSM4uUsthMlSrcm3 textarea{\\n  flex-grow: 1;\\n  text-align: left;\\n  padding: 1.5rem;\\n  border: 1px solid transparent;\\n  box-shadow: 0 0 0 0.1rem rgba(var(--color-foreground), 0.55);\\n  height: 4.5rem;\\n  transition: box-shadow 0.1s ease;\\n  font-size: 1.6rem;\\n}\\n._9GT5qDSM4uUsthMlSrcm3 input:placeholder-shown::placeholder,\\n._9GT5qDSM4uUsthMlSrcm3 textarea:placeholder-shown::placeholder{\\n  color: transparent;\\n}\\n._9GT5qDSM4uUsthMlSrcm3 input:hover,\\n._9GT5qDSM4uUsthMlSrcm3 textarea:hover{\\n  box-shadow: 0 0 0 0.2rem rgba(var(--color-foreground), 0.75);\\n}\\n._9GT5qDSM4uUsthMlSrcm3 input:focus,\\n._9GT5qDSM4uUsthMlSrcm3 textarea:focus,\\n._9GT5qDSM4uUsthMlSrcm3 input:not(:placeholder-shown),\\n._9GT5qDSM4uUsthMlSrcm3 textarea:not(:placeholder-shown),\\n._9GT5qDSM4uUsthMlSrcm3 input:-webkit-autofill,\\n._9GT5qDSM4uUsthMlSrcm3 textarea:-webkit-autofill{\\n  padding: 2.2rem 1.5rem 0.8rem;\\n  box-shadow: 0 0 0 0.2rem rgba(var(--color-foreground), 0.75);\\n  outline: transparent;\\n}\\n._9GT5qDSM4uUsthMlSrcm3 label{\\n  font-size: 1.6rem;\\n  left: 1.5rem;\\n  top: 1rem;\\n  margin-bottom: 0;\\n  pointer-events: none;\\n  position: absolute;\\n  transition: top 0.1s ease, font-size 0.1s ease;\\n  color: rgba(var(--color-foreground), 0.75);\\n  letter-spacing: 0.1rem;\\n  line-height: 1.5;\\n}\\n._9GT5qDSM4uUsthMlSrcm3 input:focus ~ label,\\n._9GT5qDSM4uUsthMlSrcm3 textarea:focus ~ label,\\n._9GT5qDSM4uUsthMlSrcm3 input:not(:placeholder-shown) ~ label,\\n._9GT5qDSM4uUsthMlSrcm3 textarea:not(:placeholder-shown) ~ label,\\n._9GT5qDSM4uUsthMlSrcm3 input:-webkit-autofill ~ label,\\n._9GT5qDSM4uUsthMlSrcm3 textarea:-webkit-autofill ~ label{\\n  font-size: 1rem;\\n  top: 0.3em;\\n  letter-spacing: 0.04rem;\\n}\\n._9GT5qDSM4uUsthMlSrcm3 textarea{\\n  min-height: 10rem;\\n  resize: none;\\n  font-family: var(--font-body-family);\\n  font-style: var(--font-body-style);\\n  font-weight: var(--font-body-weight);\\n}\\n._2oNWWP54GL8KpUeayln1XE{\\n  margin-top: 4rem;\\n}\\n._2oNWWP54GL8KpUeayln1XE button{\\n  color: #fff;\\n  background-color: rgb(var(--color-foreground));\\n  padding: 0.9rem 4rem 1.1rem;\\n  transition: transform 0.2s;\\n  transform: scale(1);\\n  cursor: pointer;\\n  border: none;\\n}\\n._2oNWWP54GL8KpUeayln1XE button:hover{\\n  transform: scale(1.05);\\n}\", \"\"]);\n// Exports\nexports.locals = {\n\t\"contact_form\": \"sO2j0Voajzbz8tFRMf506\",\n\t\"form_row\": \"_1N7V2YbmWz-d7kWXjVXnzi\",\n\t\"field\": \"_9GT5qDSM4uUsthMlSrcm3\",\n\t\"send\": \"_2oNWWP54GL8KpUeayln1XE\"\n};\nmodule.exports = exports;\n\n\n//# sourceURL=webpack://%5Bname%5D/./src/components/ContactForm/style.css?./node_modules/css-loader/dist/cjs.js?modules");

/***/ }),

/***/ "./src/components/ContactForm/index.jsx":
/*!**********************************************!*\
  !*** ./src/components/ContactForm/index.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/components/ContactForm/style.css\");\n\n\n\nvar ContactFormComponent = function ContactFormComponent() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: _style_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].contact_form\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"\\u8054\\u7CFB\\u65B9\\u5F0F\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: _style_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].form_row\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: _style_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].field\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    autoComplete: \"name\",\n    placeholder: \"\\u540D\\u79F0\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, \"\\u540D\\u79F0\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: _style_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].field\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"email\",\n    autoComplete: \"email\",\n    placeholder: \"\\u7535\\u5B50\\u90AE\\u7BB1\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, \"\\u7535\\u5B50\\u90AE\\u7BB1\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: _style_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].field\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"tel\",\n    autoComplete: \"tel\",\n    placeholder: \"\\u7535\\u8BDD\\u53F7\\u7801\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, \"\\u7535\\u8BDD\\u53F7\\u7801\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: _style_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].field\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"textarea\", {\n    rows: \"10\",\n    placeholder: \"\\u8BC4\\u8BBA\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, \"\\u8BC4\\u8BBA\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: _style_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].send\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", null, \"\\u53D1\\u9001\")));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContactFormComponent);\n\n//# sourceURL=webpack://%5Bname%5D/./src/components/ContactForm/index.jsx?");

/***/ }),

/***/ "./src/components/ContactForm/style.css":
/*!**********************************************!*\
  !*** ./src/components/ContactForm/style.css ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_modules_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js?modules!./style.css */ \"./node_modules/css-loader/dist/cjs.js?modules!./src/components/ContactForm/style.css\");\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_modules_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_modules_style_css__WEBPACK_IMPORTED_MODULE_1__);\n\n            \n\nvar options = {\"injectType\":\"styleTag\"};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_modules_style_css__WEBPACK_IMPORTED_MODULE_1___default.a, options);\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_css_loader_dist_cjs_js_modules_style_css__WEBPACK_IMPORTED_MODULE_1___default.a.locals || {});\n\n//# sourceURL=webpack://%5Bname%5D/./src/components/ContactForm/style.css?");

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