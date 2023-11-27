/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: 100%;\r\n    height: 100vh;\r\n}\r\n.box{\r\n    border: 1px solid;\r\n    padding: 1em;\r\n    border-radius: 1em;\r\n}\r\n.boxEmployee{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    flex-direction: row;\r\n}\r\n.remove{\r\n    background: red;\r\n    color: white;\r\n}\r\n.boxEmployee {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n.boxEmployee > input{\r\n    width: 20%;\r\n    text-align: center;\r\n    border-radius: 1em;\r\n    border: none;\r\n    transition: 1s ;\r\n\r\n}\r\n.boxEmployee > input:hover{\r\n    transition: 1s;\r\n    border: 1px solid;\r\n    border-radius: 1em;\r\n}\r\n.boxEmployee > button{\r\n    transition: 1s;\r\n    padding: .3em;\r\n}\r\n.boxEmployee > button:hover{\r\n    transition: 1s;\r\n    transform: scale(1.1);\r\n}\r\n.boxEmployee > * {\r\n    padding: 0;\r\n    margin:0;\r\n\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://module/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://module/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://module/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://module/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://module/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://module/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://module/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://module/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://module/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://module/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/Departament.js":
/*!****************************!*\
  !*** ./src/Departament.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Department: () => (/* binding */ Department)\n/* harmony export */ });\n// Class representing a department\r\nclass Department {\r\n    // Static property to store a list of all departments\r\n    static listDepartments = [];\r\n\r\n    // Constructor to initialize a department with a name and an empty list of groups\r\n    constructor(name) {\r\n        this.name = name;\r\n        this.groups = [];\r\n\r\n        // Add the newly created department to the list of all departments\r\n        Department.listDepartments.push(this);\r\n    }\r\n\r\n    // Method to add a group to the department\r\n    addGroup(group) {\r\n        this.groups.push(group);\r\n    }\r\n\r\n    // Method to remove a group from the department\r\n    removeGroup(group) {\r\n        // Find the index of the group in the list of groups\r\n        const index = this.groups.indexOf(group);\r\n\r\n        // If the group is found, remove it from the list\r\n        if (index !== -1) {\r\n            this.groups.splice(index, 1);\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack://module/./src/Departament.js?");

/***/ }),

/***/ "./src/Employer.js":
/*!*************************!*\
  !*** ./src/Employer.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Employee: () => (/* binding */ Employee)\n/* harmony export */ });\n// Class representing an employee\r\nclass Employee {\r\n    // Constructor to initialize an employee with a name, profession, and salary\r\n    constructor(name, profession, salary) {\r\n        this.name = name;\r\n        this.profession = profession;\r\n        this.salary = salary;\r\n    }\r\n\r\n    // Method to change the salary of the employee\r\n    changeSalary(newSalary) {\r\n        this.salary = newSalary;\r\n    }\r\n}\n\n//# sourceURL=webpack://module/./src/Employer.js?");

/***/ }),

/***/ "./src/Filial.js":
/*!***********************!*\
  !*** ./src/Filial.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Filial: () => (/* binding */ Filial)\n/* harmony export */ });\n// Class representing a branch or filial\r\nclass Filial {\r\n    // Static property to store a list of all filials\r\n    static listFilial = [];\r\n\r\n    // Constructor to initialize a filial with a name and an empty list of departments\r\n    constructor(name) {\r\n        this.name = name;\r\n        this.departments = [];\r\n\r\n        // Add the newly created filial to the list of all filials\r\n        Filial.listFilial.push(this);\r\n    }\r\n\r\n    // Method to add a department to the filial\r\n    addDepartment(depart) {\r\n        this.departments.push(depart);\r\n    }\r\n\r\n    // Method to remove a department from the filial\r\n    removeDepartment(depart) {\r\n        // Find the index of the department in the list of departments\r\n        const index = this.departments.indexOf(depart);\r\n\r\n        // If the department is found, remove it from the list\r\n        if (index !== -1) {\r\n            this.departments.splice(index, 1);\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack://module/./src/Filial.js?");

/***/ }),

/***/ "./src/Group.js":
/*!**********************!*\
  !*** ./src/Group.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Group: () => (/* binding */ Group)\n/* harmony export */ });\n// Class representing a group\r\nclass Group {\r\n    // Static property to store a list of all groups\r\n    static listGroups = [];\r\n\r\n    // Constructor to initialize a group with a name and an empty list of employees\r\n    constructor(name) {\r\n        this.name = name;\r\n        this.employees = [];\r\n\r\n        // Add the newly created group to the list of all groups\r\n        Group.listGroups.push(this);\r\n    }\r\n\r\n    // Method to add an employee to the group\r\n    addEmployee(employee) {\r\n        this.employees.push(employee);\r\n    }\r\n\r\n    // Method to remove an employee from the group\r\n    removeEmployee(employee) {\r\n        // Find the index of the employee in the list of employees\r\n        const index = this.employees.indexOf(employee);\r\n\r\n        // If the employee is found, remove it from the list\r\n        if (index !== -1) {\r\n            this.employees.splice(index, 1);\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack://module/./src/Group.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Filial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Filial */ \"./src/Filial.js\");\n/* harmony import */ var _Departament__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Departament */ \"./src/Departament.js\");\n/* harmony import */ var _Group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Group */ \"./src/Group.js\");\n/* harmony import */ var _Employer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Employer */ \"./src/Employer.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n// Importing required classes and styles\r\n\r\n\r\n\r\n\r\n\r\n\r\n// Objects to store instances of different classes\r\nconst filials = {};\r\nconst departaments = {}\r\nconst groups = {}\r\nconst employees = {}\r\nconst objectArrEmployer = {}\r\n\r\n// DOM elements\r\nconst selectFilial = document.getElementById(\"selectFilial\");\r\nconst depListId = document.getElementById(\"depListId\");\r\nconst depGroup = document.getElementById(\"depGroup\")\r\nconst depEmployee = document.getElementById(\"depEmploy\")\r\nconst containerEmployee = document.getElementById(\"containerEmployee\")\r\nconst content = document.getElementById(\"content\");\r\n// Adding event listeners\r\n\r\ncontent.addEventListener('click',addOrRemoveElement)\r\ndepListId.addEventListener(\"change\", updateDepGroupOptions);\r\nselectFilial.addEventListener(\"change\",(chooseFilial));\r\ndepGroup.addEventListener(\"change\", updateEmployeers);\r\n\r\n// Event listener for the \"change\" event on depEmployee dropdown\r\ndepEmployee.addEventListener(\"change\",()=>{\r\n    showEmployer(depEmployee.value)\r\n})\r\n\r\n// Function to add a new filial\r\nfunction addFilial(){\r\n    // Get the name of the filial from the input field\r\n    const nameFilial = document.getElementById(\"addFilial\")\r\n    filials[nameFilial.value] = new _Filial__WEBPACK_IMPORTED_MODULE_0__.Filial(nameFilial.value)\r\n    addOption(nameFilial.value,selectFilial);\r\n    // Clear the input field\r\n    nameFilial.value = \"\";\r\n}\r\n\r\n// Function to add a new department\r\nfunction addDepartament(){\r\n    const nameDepartment = document.getElementById(\"nameDepartament\");\r\n    departaments[nameDepartment.value] = new _Departament__WEBPACK_IMPORTED_MODULE_1__.Department(nameDepartment.value);\r\n    const currentFelial = filials[selectFilial.options[selectFilial.selectedIndex].text];\r\n    currentFelial.addDepartment(departaments[nameDepartment.value])\r\n    addOption(nameDepartment.value,depListId)\r\n    // Clear the input field\r\n    nameDepartment.value = \"\";\r\n}\r\n\r\n// Function to handle adding or removing elements based on the clicked element\r\nfunction addOrRemoveElement(event){\r\n    const element = event.target;\r\n    const className = element.className;\r\n    const functionName = element.dataset.action;\r\n    console.log(className)\r\n    if(className === \"remove\"){\r\n        if(functionName === removeDepartament.name){\r\n            removeDepartament()\r\n        }else if(functionName===removeGroup.name){\r\n            removeGroup();\r\n        }\r\n\r\n    }else if(className === \"add\"){\r\n        if(functionName === addGroupList.name){\r\n            addGroupList();\r\n        }else if(functionName === addEmployerList.name){\r\n            addEmployerList()\r\n        }else if(functionName === addDepartament.name){\r\n            addDepartament();\r\n        }else if(functionName === addFilial.name){\r\n            addFilial();\r\n        }\r\n    }\r\n}\r\n\r\n// Function to add a new group\r\nfunction addGroupList() {\r\n    // Get the name of the group from the input field\r\n    const nameGroup = document.getElementById(\"addGroup\");\r\n\r\n    // Create a new Group instance and add it to the groups object\r\n    groups[nameGroup.value] = new _Group__WEBPACK_IMPORTED_MODULE_2__.Group(nameGroup.value);\r\n\r\n    // Get the currently selected department\r\n    const currentDepartment = departaments[depListId.options[depListId.selectedIndex].text];\r\n\r\n    // Add the new group to the current department\r\n    currentDepartment.addGroup(groups[nameGroup.value]);\r\n\r\n    // Add a new option to the depGroup dropdown\r\n    addOption(nameGroup.value, depGroup);\r\n\r\n    // Clear the input field\r\n    nameGroup.value = \"\";\r\n}\r\n\r\n// Function to add a new employer\r\nfunction addEmployerList() {\r\n    // Get the input value containing information about the employer and split it into an array\r\n    const infoEmployer = document.getElementById(\"addEmployer\").value.split(\"/\");\r\n\r\n    // Create a new Employee instance and add it to the employees object\r\n    employees[infoEmployer[0]] = new _Employer__WEBPACK_IMPORTED_MODULE_3__.Employee(infoEmployer[0], infoEmployer[1], infoEmployer[2]);\r\n\r\n    // Create an entry in the objectArrEmployer to store employer information\r\n    objectArrEmployer[infoEmployer[0]] = [infoEmployer[0], infoEmployer[1], infoEmployer[2]];\r\n\r\n    // Get the currently selected group\r\n    const currentGroup = groups[depGroup.options[depGroup.selectedIndex].text];\r\n\r\n    // Add the new employee to the current group\r\n    currentGroup.addEmployee(employees[infoEmployer[0]]);\r\n\r\n    // Add a new option to the depEmployee dropdown\r\n    addOption(infoEmployer[0], depEmployee);\r\n\r\n    // Show details of the newly added employer\r\n    showEmployer(infoEmployer[0]);\r\n\r\n    // Clear the input field\r\n    const clearHost = document.getElementById(\"addEmployer\");\r\n    clearHost.value = \"\";\r\n}\r\n\r\n// Function to add a new option to a dropdown menu\r\nfunction addOption(name, parent) {\r\n    // Create a new option element\r\n    const option = document.createElement(\"option\");\r\n\r\n    // Set the display text of the option\r\n    option.innerText = name;\r\n\r\n    // Set the value attribute of the option\r\n    option.setAttribute(\"value\", name);\r\n\r\n    // Append the option to the specified parent (dropdown menu)\r\n    parent.append(option);\r\n}\r\n\r\n\r\n// Function to update depListId dropdown based on the selected filial\r\nfunction chooseFilial() {\r\n    // Clear the current options in the depListId dropdown\r\n    depListId.innerHTML = \"\";\r\n\r\n    // Iterate through all filials in the list\r\n    for (let i = 0; i < _Filial__WEBPACK_IMPORTED_MODULE_0__.Filial.listFilial.length; i++) {\r\n        // Check if the current filial's name matches the selected filial\r\n        if (_Filial__WEBPACK_IMPORTED_MODULE_0__.Filial.listFilial[i].name === selectFilial.value) {\r\n            // Iterate through the departments of the current filial\r\n            for (let j = 0; j < _Filial__WEBPACK_IMPORTED_MODULE_0__.Filial.listFilial[i].departments.length; j++) {\r\n                // Create a new option element for each department and add it to depListId\r\n                const option = document.createElement('option');\r\n                option.innerHTML = _Filial__WEBPACK_IMPORTED_MODULE_0__.Filial.listFilial[i].departments[j].name;\r\n                depListId.append(option);\r\n            }\r\n        }\r\n    }\r\n\r\n    // Update other UI elements and options\r\n    updateDepGroupOptions();\r\n    showEmployer(depEmployee.value);\r\n    updateEmployeers();\r\n}\r\n\r\n// Function to update depGroup dropdown based on the selected department\r\nfunction updateDepGroupOptions() {\r\n    // Clear the current options in the depGroup dropdown\r\n    depGroup.innerHTML = \"\";\r\n\r\n    // Iterate through all departments in the list\r\n    for (let i = 0; i < _Departament__WEBPACK_IMPORTED_MODULE_1__.Department.listDepartments.length; i++) {\r\n        // Check if the current department's name matches the selected department\r\n        if (_Departament__WEBPACK_IMPORTED_MODULE_1__.Department.listDepartments[i].name === depListId.value) {\r\n            // Iterate through the groups of the current department\r\n            for (let j = 0; j < _Departament__WEBPACK_IMPORTED_MODULE_1__.Department.listDepartments[i].groups.length; j++) {\r\n                // Create a new option element for each group and add it to depGroup\r\n                const option = document.createElement('option');\r\n                option.innerHTML = _Departament__WEBPACK_IMPORTED_MODULE_1__.Department.listDepartments[i].groups[j].name;\r\n                depGroup.append(option);\r\n            }\r\n        }\r\n    }\r\n\r\n    // Update other UI elements and options\r\n    showEmployer(depEmployee.value);\r\n    updateEmployeers();\r\n}\r\n\r\n\r\n// Function to update depEmployee dropdown based on the selected group\r\nfunction updateEmployeers() {\r\n    // Clear the current options in the depEmployee dropdown\r\n    depEmployee.innerHTML = \"\";\r\n\r\n    // Iterate through all groups in the list\r\n    for (let i = 0; i < _Group__WEBPACK_IMPORTED_MODULE_2__.Group.listGroups.length; i++) {\r\n        // Check if the current group's name matches the selected group\r\n        if (_Group__WEBPACK_IMPORTED_MODULE_2__.Group.listGroups[i].name === depGroup.value) {\r\n            // Iterate through the employees of the current group\r\n            for (let j = 0; j < _Group__WEBPACK_IMPORTED_MODULE_2__.Group.listGroups[i].employees.length; j++) {\r\n                // Create a new option element for each employee and add it to depEmployee\r\n                const option = document.createElement('option');\r\n                option.innerHTML = _Group__WEBPACK_IMPORTED_MODULE_2__.Group.listGroups[i].employees[j].name;\r\n                depEmployee.append(option);\r\n            }\r\n        }\r\n    }\r\n\r\n    // Show details of the currently selected employee\r\n    showEmployer(depEmployee.value);\r\n}\r\n\r\n\r\n// Function to display details about an employer in the container\r\nfunction showEmployer(infoEmployer) {\r\n    // Check if infoEmployer is an empty string\r\n    if (infoEmployer === \"\") {\r\n        // If it is empty, clear the container\r\n        containerEmployee.innerHTML = \"\";\r\n    } else {\r\n        // Clear the container\r\n        containerEmployee.innerHTML = \"\";\r\n\r\n        // Create a new div element for the employer details\r\n        const boxEmployee = document.createElement(\"div\");\r\n        boxEmployee.setAttribute(\"class\", \"boxEmployee\");\r\n\r\n        // Iterate through the employer details\r\n        for (let i = 0; i < objectArrEmployer[infoEmployer].length; i++) {\r\n            // Check if the current detail is not the salary\r\n            if (i !== 2) {\r\n                // Create a paragraph element for non-salary details and append it to the boxEmployee\r\n                const p = document.createElement(\"p\");\r\n                p.innerHTML = objectArrEmployer[infoEmployer][i];\r\n                boxEmployee.append(p);\r\n            } else {\r\n                // Create an input element for the salary and append it to the boxEmployee\r\n                const salary = document.createElement(\"input\");\r\n                salary.value = objectArrEmployer[infoEmployer][i];\r\n                salary.setAttribute(\"id\", \"salary\");\r\n                boxEmployee.append(salary);\r\n            }\r\n        }\r\n\r\n        // Create buttons for firing the employee and changing the salary\r\n        const fireEmployeeButton = document.createElement(\"button\");\r\n        const changeSalaryButton = document.createElement(\"button\");\r\n\r\n        // Add event listeners to the buttons\r\n        fireEmployeeButton.addEventListener(\"click\", fireEmployee);\r\n        fireEmployeeButton.setAttribute(\"class\", \"remove\");\r\n\r\n        changeSalaryButton.addEventListener(\"click\", changeSalary);\r\n\r\n        // Set button labels\r\n        fireEmployeeButton.innerHTML = \"X\";\r\n        changeSalaryButton.innerHTML = \"Change Salary\";\r\n\r\n        // Append buttons to the boxEmployee\r\n        boxEmployee.append(fireEmployeeButton);\r\n        boxEmployee.append(changeSalaryButton);\r\n\r\n        // Append boxEmployee to the containerEmployee\r\n        containerEmployee.append(boxEmployee);\r\n    }\r\n}\r\n\r\nfunction changeSalary(){\r\n    const newSalary = document.getElementById(\"salary\");\r\n    employees[depEmployee.value].salary = newSalary.value;\r\n    objectArrEmployer[depEmployee.value][2] = newSalary.value;\r\n}\r\nfunction removeDepartament() {\r\n    while (depGroup.value !== \"\"){\r\n        removeGroup()\r\n    }\r\n    filials[selectFilial.value].removeDepartment(depListId.value)\r\n    delete departaments[depListId.value]\r\n    const selectOption = depListId.options[depListId.selectedIndex]\r\n    removeSelectOption(selectOption)\r\n}\r\n\r\nfunction removeGroup(){\r\n    while (depEmployee.value !== \"\"){\r\n        fireEmployee()\r\n    }\r\n    departaments[depListId.value].removeGroup(depGroup.value)\r\n    delete groups[depGroup.value]\r\n    const selectOption = depGroup.options[depGroup.selectedIndex]\r\n    removeSelectOption(selectOption)\r\n}\r\n\r\nfunction fireEmployee(){\r\n    containerEmployee.innerHTML = \"\";\r\n    groups[depGroup.value].removeEmployee(depEmployee.value)\r\n    delete employees[depEmployee.value]\r\n    delete objectArrEmployer[depEmployee.value]\r\n    const selectOption = depEmployee.options[depEmployee.selectedIndex]\r\n    removeSelectOption(selectOption)\r\n}\r\nfunction removeSelectOption(selectOption){\r\n    if(selectOption){\r\n        selectOption.remove()\r\n    }\r\n}\n\n//# sourceURL=webpack://module/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;