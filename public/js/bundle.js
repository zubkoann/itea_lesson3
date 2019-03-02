/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./application/imports.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./application/imports.js":
/*!********************************!*\
  !*** ./application/imports.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _classwork_singleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classwork/singleton */ \"./classwork/singleton.js\");\n/* harmony import */ var _classwork_objectfreeze__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classwork/objectfreeze */ \"./classwork/objectfreeze.js\");\n\n\n\nlet universe = {\n  infinity: Infinity,\n  good: ['cats', 'love', 'rock-n-roll'],\n  evil: {\n    bonuses: ['cookies', 'great look']\n  }\n};\n\nlet FarGalaxy = Object(_classwork_objectfreeze__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(universe);\n// TEST\n// console.log('FarGalaxy', FarGalaxy)\n// FarGalaxy.good.push('javascript'); // false\n// FarGalaxy.something = 'Wow!'; // false\n// FarGalaxy.evil.humans = [];   // false\n\nconst government = {\n  law: [],\n  budget: 1000000,\n  citizensSatisfactions: 0,\n}\n\n// TEST\n_classwork_singleton__WEBPACK_IMPORTED_MODULE_0__[\"default\"].add(government, government, 'law1', 'somedescription1');\n_classwork_singleton__WEBPACK_IMPORTED_MODULE_0__[\"default\"].add(government, 'law2', 'somedescription2');\n_classwork_singleton__WEBPACK_IMPORTED_MODULE_0__[\"default\"].add(government, 'law3', 'somedescription3');\nconsole.log('government', government);\nconsole.log('getAllLaw', _classwork_singleton__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getAllLaw(government));\nconsole.log('readLaw', _classwork_singleton__WEBPACK_IMPORTED_MODULE_0__[\"default\"].readLaw(government, 'law3'));\nconsole.log('citizensSatisfactions', _classwork_singleton__WEBPACK_IMPORTED_MODULE_0__[\"default\"].showSatisfactions(government));\nconsole.log('showBudget', _classwork_singleton__WEBPACK_IMPORTED_MODULE_0__[\"default\"].showBudget(government));\nconsole.log('celebrate', _classwork_singleton__WEBPACK_IMPORTED_MODULE_0__[\"default\"].celebrate(government));\n\n\n//# sourceURL=webpack:///./application/imports.js?");

/***/ }),

/***/ "./classwork/objectfreeze.js":
/*!***********************************!*\
  !*** ./classwork/objectfreeze.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst  DeepFreeze = function(obj){\n  let propNames = Object.getOwnPropertyNames(obj);\n  propNames.forEach(function (name) {\n    let prop = obj[name];\n    if (typeof prop == 'object' && prop !== null)\n      DeepFreeze(prop);\n  })\n  return Object.freeze(obj);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (DeepFreeze);\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./classwork/objectfreeze.js?");

/***/ }),

/***/ "./classwork/singleton.js":
/*!********************************!*\
  !*** ./classwork/singleton.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Singleton = {\n  add: (_data, name, desc) => {\n    let item = {\n      id: (Math.random() * 100).toFixed(0),\n      name: name,\n      desc: desc,\n    }\n    _data.law.push(item);\n    _data.citizensSatisfactions -= 10;\n  },\n  getAllLaw: ({law}) => [...law],\n  readLaw: ({law}, name) => {\n    let newarr = law.find(el => {\n      return name == el.name;\n    });\n    return newarr.desc;\n  },\n  showSatisfactions: ({citizensSatisfactions}) => citizensSatisfactions,\n  showBudget: ({budget}) => budget,\n  celebrate: (_data) => {\n    _data.budget -= 50000;\n    _data.citizensSatisfactions += 5;\n    return _data;\n  },\n\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Singleton);\n\n//# sourceURL=webpack:///./classwork/singleton.js?");

/***/ })

/******/ });