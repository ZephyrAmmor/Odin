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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./bg.jpg */ \"./src/bg.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `*{\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\nbody{\n    color: #f5f5f5;\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    min-height: 100vh;\n    height: 100%;\n    backdrop-filter: blur(20px);\n}\nbody > div{\n    width: 100%;\n    padding: 5% 0;\n}\n.content{\n    border-radius: 1rem;\n    background-color: rgba(0,0,0,0.4);\n    width: clamp(400px,80%, 90vw);\n    padding: 0.5rem 2rem;\n    margin: 0 auto;\n}\n#content{\n    min-height: 70vh;\n}\nheader{\n    align-items: center;\n    padding: 1rem;\n    justify-content: space-around;\n    display: flex;\n    flex-wrap: wrap;\n}\nul{\n    list-style: none;\n}\nheader ul{\n    gap: 1rem;\n    display: flex;\n}\nbutton{\n    min-width: 50px;\n    font: inherit;\n    color: purple;\n    padding: 0.5rem;\n    border: none;\n    border-radius: 0.5rem;\n    background-color: rgb(100, 200, 50);\n}\nnav, .priceOrder{\n    display: flex;\n    gap: 1rem;\n    justify-content: space-between\n}\nnav button{\n    color: inherit;\n    background-color: rgba(0, 0, 0, 0);\n    border: none;\n}\n\n.home{\n    position: relative;\n    display: flex;\n    gap: 15%;\n}\n.imgHome{\n    width: 50%;\n}\n.imgHome img{\n    border-radius: 50%;\n    width: 100%;\n}\n.contentHome{\n    width: 60%;\n}\n.contentHome > *{\n    margin : 1rem 0;\n}\n.infoHome{\n    font-size: 1.1rem;\n    font-weight: 600;\n    text-align: center;\n    margin-top: 10%;\n    display: flex;\n    gap: 1rem;\n}\n.reviews img{\n    margin-left: -3rem;\n    width: 4rem;\n    border-radius: 50%;\n}\n.reviews{\n    margin-left: 3rem;\n    align-items: center;\n    gap: 1rem;\n    display: flex;\n}\nh1{\n    font-size: 3rem;\n}\n.current{\n    background-color: rgb(100, 200, 50);\n    color: purple;\n}\n\n.about{\n    font-size: 1.1rem;\n    padding: 1rem;\n    width: 70%;\n    margin: 0 auto;\n    line-height: 1.6rem;\n}\n.aboutPara{\n    margin-bottom: 2rem;\n}\n.about::first-letter{\n    font-size: 3rem;\n    font-weight: 800;\n}\n\n.contact{\n    padding: 1rem;\n    font-size: 1.1rem;\n    line-height: 1.6rem;\n    width: 70%;\n    margin: 0 auto;\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n}\n.contact h3{\n    margin-bottom: 0.8rem;\n}\n.phone::first-letter, .address::first-letter, .timing::first-letter{\n    font-size: 2rem;\n    font-weight: 800;\n}\n\n.bold{\n    margin-right: 1rem;\n    font-size: 1.2rem;\n    font-weight: 600;\n}\n\n.menu{\n    display: flex;\n    flex-direction: column;\n    gap: 3rem;\n    padding: 1rem;\n}\n.menu > div{\n    gap: 2rem;\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));\n}\n.card{\n    font-size: 1.1rem;\n    position: relative;\n    background-color: rgba(0,0,0,0.2);\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    padding: 1rem;\n    border: solid 1px rgb(100, 200, 50);\n    border-radius: 0.5rem;\n}\n.card h3{\n    font-size: 1.7rem;\n}\n.card p{\n    margin-bottom: 4rem;\n}\n.card button{\n    color: rgb(100, 200, 50);\n    background-color: inherit;\n    width: 50%;\n    display: block;\n}\n.priceOrder{\n    align-items: center;\n    border : 1px solid rgb(100, 200, 50);\n    padding: 0.2rem 0.8rem;\n    border-radius: 0.4rem;\n    width: 50%;\n    position: absolute;\n    bottom: 1rem;\n    left: 1rem;\n}\n\nbutton:hover{\n    color: purple;\n    background-color: rgb(92, 205, 35);\n}\nheader > h2{\n    font-size: 2rem;\n}\nbody a{\n    font-size: 0.9rem;\n    text-decoration: none;\n    color: rgb(100, 200, 50)\n}\nbody > a{\n    position: absolute;\n    bottom: 5px;\n    left: 5px;\n}\n.home a{\n    position: absolute;\n    bottom: -5px;\n    right:10%;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant/./src/styles.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("{\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/getUrl.js?\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ }),

/***/ "./src/WilliamXTommy.png":
/*!*******************************!*\
  !*** ./src/WilliamXTommy.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"01346a3d71f9b369a1c8.png\";\n\n//# sourceURL=webpack://restaurant/./src/WilliamXTommy.png?\n}");

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   about: () => (/* binding */ about)\n/* harmony export */ });\nconst about = document.createElement('div')\nabout.classList.add('about')\n\nconst header = document.createElement('h2')\n\nheader.textContent = \"About Us\"\n\nconst aboutUs = document.createElement('div')\naboutUs.classList.add('aboutUs')\n\nfunction Para(text){\n    const para = document.createElement('p')\n    para.classList.add('aboutPara')\n    para.textContent = text\n    return para\n}\n\nconst p1 = Para(\"Welcome to our restaurant, where the heart of Pakistan's 🇵🇰 culinary traditions meets a passion for authentic, home-cooked flavors. Our journey began with a simple idea: to bring the true taste of our heritage to your table. Every dish on our menu is a tribute to the vibrant, rich, and soulful cuisine that has been passed down through generations.\")\n\nconst p3 = Para(\"We believe that great food is about more than just taste—it's about community, family, and tradition 😇. Our desserts, from the exquisite Sohan Halwa to the classic Gulab Jamun, are a sweet finish to a meal filled with love and warmth.\")\n\nconst p4 = Para(\"Join us and savor the flavors of a legacy. It's more than just a meal; it's a celebration of Pakistani cuisine. 🫰\")\n\nconst paragraphs = [p1, p3, p4]\n\nfor(let para of paragraphs){\n    aboutUs.appendChild(para)\n}\n\nabout.appendChild(aboutUs)\n\n\n\n//# sourceURL=webpack://restaurant/./src/about.js?\n}");

/***/ }),

/***/ "./src/bg.jpg":
/*!********************!*\
  !*** ./src/bg.jpg ***!
  \********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"ae88a0704b6edbb258b4.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/bg.jpg?\n}");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   contact: () => (/* binding */ contact)\n/* harmony export */ });\nconst contact = document.createElement('div')\ncontact.classList.add('contact')\n\nconst header = document.createElement('h2')\nheader.textContent = 'Contact & Locations'\n\nconst address = document.createElement('div')\n\nconst addressHeading = document.createElement('h3')\naddressHeading.textContent = 'Adress'\n\nconst addressPara = document.createElement('div')\n\nconst adPara1 = document.createElement('p')\nadPara1.textContent = '123 Main Boulevard,'\n\nconst adPara2 = document.createElement('p')\nadPara2.textContent = 'Green Avenue,'\n\nconst adPara3 = document.createElement('p')\nadPara3.textContent = 'Multan, Pnjab, Pakistan'\n\naddressPara.appendChild(adPara1)\naddressPara.appendChild(adPara2)\naddressPara.appendChild(adPara3)\naddress.classList.add('address')\naddress.appendChild(addressHeading)\naddress.appendChild(addressPara)\nconst phone = document.createElement('div')\n\nconst phoneHeader = document.createElement('h3')\nphoneHeader.textContent = 'Phone'\n\nconst phoneNumber = document.createElement('p')\nphoneNumber.textContent = '(061) 555-FOOD (3663)'\nphone.appendChild(phoneHeader)\nphone.appendChild(phoneNumber)\nphone.classList.add('phone')\n\nconst timing = document.createElement('div')\nconst timingHeader = document.createElement('h3')\ntimingHeader.textContent = 'Hours of Operation:'\ntiming.classList.add('timing')\n\nconst timeMonToThur = document.createElement('li')\nconst timeMonToThurHead = document.createElement('span')\ntimeMonToThurHead.classList.add('bold')\ntimeMonToThurHead.textContent = 'Monday to Thursday :'\n\nconst timeFriToSun = document.createElement('li')\n\nconst timeFriToSunHead = document.createElement('span')\ntimeFriToSunHead.classList.add('bold')\ntimeFriToSunHead.textContent = 'Friady to Sunday :'\n\nconst timeMonToThurPara = document.createElement('span')\ntimeMonToThurPara.textContent = '9:00 AM to 1:00AM'\n\nconst timeFriToSunPara = document.createElement('span')\ntimeFriToSunPara.textContent = '9:00 AM to 11:30 AM'\n\ntimeMonToThur.appendChild(timeMonToThurHead)\ntimeMonToThur.appendChild(timeMonToThurPara)\ntimeFriToSun.appendChild(timeFriToSunHead)\ntimeFriToSun.appendChild(timeFriToSunPara)\n\ntiming.appendChild(timingHeader)\ntiming.appendChild(timeMonToThur)\ntiming.appendChild(timeFriToSun)\n\ncontact.appendChild(address)\ncontact.appendChild(phone)\ncontact.appendChild(timing)\n\n\n\n//# sourceURL=webpack://restaurant/./src/contact.js?\n}");

/***/ }),

/***/ "./src/hero.webp":
/*!***********************!*\
  !*** ./src/hero.webp ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"dfc15f4d715431a86528.webp\";\n\n//# sourceURL=webpack://restaurant/./src/hero.webp?\n}");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   home: () => (/* binding */ home)\n/* harmony export */ });\n/* harmony import */ var _hero_webp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hero.webp */ \"./src/hero.webp\");\n/* harmony import */ var _WilliamXTommy_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WilliamXTommy.png */ \"./src/WilliamXTommy.png\");\n\n\nconst home = document.createElement('div')\nhome.classList.add('home')\n\nconst hero = document.createElement('h1')\nhero.textContent = 'It\\'s not just Food, it\\'s an Experience'\n\nconst tagLine = document.createElement('p')\ntagLine.classList.add('tagline')\ntagLine.textContent = 'We are helping you to get rich and delecious food in a few minutes by using our nice web App'\n\nconst actionBtn = document.createElement('button')\nactionBtn.classList.add('btn')\nactionBtn.setAttribute('id', 'menu')\nactionBtn.textContent = 'View Menu'\n\nconst reviewsTag = document.createElement('p')\nreviewsTag.classList.add('reviewTag')\nreviewsTag.textContent = 'Our Happy Customers'\nconst coustomers = document.createElement('div')\ncoustomers.classList.add('reviews')\nconst coustomerImg = document.createElement('img')\ncoustomerImg.setAttribute('src', _WilliamXTommy_png__WEBPACK_IMPORTED_MODULE_1__)\ncoustomerImg.setAttribute('width', '50')\nconst coustomerImg2 = document.createElement('img')\ncoustomerImg2.setAttribute('src', _WilliamXTommy_png__WEBPACK_IMPORTED_MODULE_1__)\ncoustomerImg2.setAttribute('width', '50')\nconst coustomerImg3 = document.createElement('img')\ncoustomerImg3.setAttribute('src', _WilliamXTommy_png__WEBPACK_IMPORTED_MODULE_1__)\ncoustomerImg3.setAttribute('width', '50')\n\ncoustomers.appendChild(coustomerImg)\ncoustomers.appendChild(coustomerImg2)\ncoustomers.appendChild(coustomerImg3)\ncoustomers.appendChild(reviewsTag)\n\nconst info = document.createElement('div')\ninfo.classList.add('infoHome')\nconst infoDownload = document.createElement('div')\nconst infoActiveUsers = document.createElement('div')\n\nconst activeUsers = document.createElement('div')\nactiveUsers.textContent = '23451'\nconst activeHeading = document.createElement('div')\nactiveHeading.textContent = 'Active Users'\n\nconst downloadHeading = document.createElement('div')\ndownloadHeading.textContent = 'Downloads'\nconst downloadCount = document.createElement('div')\ndownloadCount.textContent = '+ 1M'\n\ninfoActiveUsers.appendChild(activeHeading)\ninfoActiveUsers.appendChild(activeUsers)\n\ninfoDownload.appendChild(downloadHeading)\ninfoDownload.appendChild(downloadCount)\n\ninfo.appendChild(infoActiveUsers)\ninfo.appendChild(infoDownload)\n\nconst contentDiv = document.createElement('div')\ncontentDiv.classList.add('contentHome')\n\ncontentDiv.appendChild(hero)\ncontentDiv.appendChild(tagLine)\ncontentDiv.appendChild(actionBtn)\ncontentDiv.appendChild(coustomers)\ncontentDiv.appendChild(info)\n\nconst imgDiv = document.createElement('div')\nimgDiv.classList.add('imgHome')\n\nconst imgElm = document.createElement('img')\nimgElm.setAttribute('width', '300')\nimgElm.setAttribute('src', _hero_webp__WEBPACK_IMPORTED_MODULE_0__)\nconst refImg = document.createElement('a')\nrefImg.setAttribute('href', 'https://www.allrecipes.com/thmb/NbS3BNdr8ljRJW4jBT3Vp-U4gmQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/4437164-biryani-with-yogurt-marinated-chicken-Buckwheat-Queen-1x1-1-35e7310f2c5b4fd09251d6deac7256a3.jpg')\nrefImg.textContent = 'Credit: Buckwheat Queen | Allrecipes'\nimgDiv.appendChild(imgElm)\nimgDiv.appendChild(refImg)\n\nhome.appendChild(contentDiv)\nhome.appendChild(imgDiv)\n\n\n\n//# sourceURL=webpack://restaurant/./src/home.js?\n}");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n\n\n\n\n\n\nconst content = document.querySelector('#content')\n\ncontent.appendChild(_home_js__WEBPACK_IMPORTED_MODULE_0__.home)\nconst homeBtn = document.querySelector('#home')\nhomeBtn.classList.add('current')\nconst nav = document.querySelector('nav')\nconst navbtns = document.querySelectorAll('nav button')\nnav.addEventListener('click', (e) =>{\n    while (content.firstChild){\n\n        content.removeChild(content.firstChild)\n    }\n    for(let btn of navbtns){\n        if(btn.classList.contains('current'))\n            btn.classList.remove('current')\n    }\n    e.target.classList.add('current')\n    const btnId = e.target.id\n    if(btnId === 'home'){\n        content.appendChild(_home_js__WEBPACK_IMPORTED_MODULE_0__.home)\n        return\n    }\n    else if(btnId === 'menu'){\n        content.appendChild(_menu_js__WEBPACK_IMPORTED_MODULE_1__.menu)\n        return\n    }\n    else if(btnId === 'about'){\n        content.appendChild(_about_js__WEBPACK_IMPORTED_MODULE_2__.about)\n        return\n    }\n    else if(btnId === 'contact'){\n        content.appendChild(_contact_js__WEBPACK_IMPORTED_MODULE_3__.contact)\n        return\n    }\n    else\n        throw Error\n})\n\n//# sourceURL=webpack://restaurant/./src/index.js?\n}");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   menu: () => (/* binding */ menu)\n/* harmony export */ });\nconst menu = document.createElement('div')\nmenu.classList.add('menu')\n\nfunction DishCard (heading, price, description){\n    const dish = document.createElement('div')\n    dish.classList.add('card')\n\n    const header = document.createElement('h3')\n    header.textContent = heading\n\n    const para = document.createElement('p')\n    para.textContent = description\n\n    const priceTag = document.createElement('span')\n    priceTag.classList.add('priceTag')\n    priceTag.textContent = `$ ${price}`\n\n    const orderBtn = document.createElement('button')\n    orderBtn.classList.add('btn')\n    orderBtn.classList.add('order')\n    orderBtn.textContent = 'Order'\n    \n    const btnPriceHolder = document.createElement('div')\n    btnPriceHolder.classList.add('priceOrder')\n    btnPriceHolder.appendChild(orderBtn)\n    btnPriceHolder.appendChild(priceTag)\n    dish.appendChild(header)\n    dish.appendChild(para)\n    dish.appendChild(btnPriceHolder)\n\n    return dish\n}\n\nfunction Category(){\n    const category = document.createElement('div')\n    category.classList.add('dishCategory')\n    return category\n}\nconst spicesHead = document.createElement('h2')\nspicesHead.textContent = 'Spices'\nconst sweetsHead = document.createElement('h2')\nsweetsHead.textContent = 'Sweets'\nconst beveragesHead = document.createElement('h2')\nbeveragesHead.textContent = 'Beverages'\nconst chickenKarahi = DishCard('Chicken Karahi', 20, \"Tender chicken pieces simmered in a rich, rustic tomato base with fiery green chilies and ginger. Each bite bursts with authentic, bold Pakistani spices. Served sizzling hot, it's a deeply aromatic and addictive experience that’s perfect for scooping up with fresh, warm naan.\")\n\n\nconst muttonKarahi = DishCard('Mutton Karahi',40, \"Slow-cooked to perfection, our Mutton Karahi features succulent, fall-off-the-bone meat in a thick, savory gravy. The deep, rich flavors of the mutton are elevated by a blend of hand-ground spices, creating a luxuriously tender and unforgettable dish.\")\n\n\nconst chickenBiryani = DishCard('Chicken Biryani',10, \"A celebration of flavor in every grain. Fragrant basmati rice is layered with tender, marinated chicken, then slow-cooked with whole spices and fresh herbs until every single mouthful is infused with a heady, tantalizing aroma. It's a regal and deeply satisfying experience.\")\n\n\nconst seekhKebab = DishCard('Seekh Keba Platter',25, \"Smoky, juicy, and perfectly grilled. Our Seekh Kebabs are crafted from finely minced beef, seasoned with a secret blend of herbs and spices, then cooked over an open flame to achieve a beautifully crisp exterior and a tender, melt-in-your-mouth interior. Served with a cool mint raita to balance the heat.\")\n\nconst beefMeatballs = DishCard('Beef Meatballs', 30, \"A dish that feels like a warm hug. Perfectly seasoned beef meatballs are simmered in a thick, rich tomato sauce until they are unbelievably tender. Each meatball is a savory delight, best enjoyed with a side of warm roti to soak up every last drop of the rich, savory gravy.\"\n)\n\nconst sohanHalwa = DishCard('Sohan Halwa',40,  \"A true Multani masterpiece. This traditional sweet is a golden, dense confection with a satisfyingly chewy texture and a deep, nutty caramel flavor. Topped with a generous scattering of crunchy pistachios and almonds, it’s an exquisite treat for any occasion.\")\n\nconst sheerKhorma = DishCard('Sheer Khorma',10, \"A creamy, decadent festive delight. Fragile vermicelli is slow-simmered in rich, sweetened milk and infused with dates, pistachios, and almonds. Every spoonful is a luxurious, comforting journey of delicate flavors and textures.\")\n\nconst ghulabJamun = DishCard('Ghulab Jamun',5, \"These golden-brown orbs of pure joy are soft, spongy, and impossibly delicious. Fried to perfection, they are then soaked in a fragrant, sweet syrup scented with rose and cardamom, making them an irresistible, melt-in-your-mouth experience.\")\n\nconst tea = DishCard('Tea (Chai)', 5,\"A rich and invigorating classic. Our authentic Pakistani tea is slow-brewed to perfection with milk, sugar, and a hint of cardamom. This warm, comforting beverage is the perfect finale to a spicy meal, offering a soothing and satisfying close to your dining experience.\")\n\nconst lemonDrink = DishCard('Iced Lemon & Mint Drink', 5,\"A crisp and revitalizing beverage. This cooling drink combines fresh-squeezed lemon juice with muddled mint leaves and a touch of sweetness. Served over ice, it’s a beautifully refreshing and zesty escape, perfect for cleansing your palate.\")\n\nconst softDrinks = DishCard('Soft Drinks', 5,\"Quench your thirst with our selection of classic, ice-cold Soft Drinks. Choose from a variety of your favorite fizzy beverages to complement your meal and provide a refreshing, bubbly lift.\")\n\nconst spices = [chickenKarahi, muttonKarahi, chickenBiryani, seekhKebab, beefMeatballs]\nconst sweets = [sohanHalwa, sheerKhorma, ghulabJamun]\nconst beverages = [ tea, lemonDrink, softDrinks]\n\nconst spicesCategory = Category('Spices')\nconst sweetsCategory = Category('Sweets')\nconst beveragesCategory = Category('Beverages')\n\nfor(let dish of spices){\n    spicesCategory.appendChild(dish)\n}\n\nfor(let dish of sweets){\n    sweetsCategory.appendChild(dish)\n}\n\nfor(let dish of beverages){\n    beveragesCategory.appendChild(dish)\n}\n\nconst categroies = [spicesHead,spicesCategory, sweetsHead, sweetsCategory, beveragesHead, beveragesCategory]\n\nfor(let category of categroies){\n    menu.appendChild(category)\n}\n\n\n//# sourceURL=webpack://restaurant/./src/menu.js?\n}");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant/./src/styles.css?\n}");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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