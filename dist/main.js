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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadContact)\n/* harmony export */ });\nfunction loadContact() {\n    const main = document.querySelector('.main');\n\n    const title = document.createElement('div');\n    title.classList.add('title');\n\n    const h1 = document.createElement('h1');\n    h1.textContent = 'Contact';\n\n    const p1 = document.createElement('p');\n    p1.classList.add('contact-info');\n    p1.textContent = 'Phone: +1 555 555 5555';\n\n    const p2 = document.createElement('p');\n    p2.classList.add('contact-info');\n    p2.textContent = 'Email: pizza@dellanonna.com';\n\n    title.appendChild(h1);\n    title.appendChild(p1);\n    title.appendChild(p2);\n\n    main.appendChild(title);\n}\n\n//# sourceURL=webpack://odin-restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadHome)\n/* harmony export */ });\nfunction loadHome() {\n    const main = document.querySelector('.main');\n\n    const title = document.createElement('div');\n    title.classList.add('title');\n    const h1 = document.createElement('h1');\n    h1.textContent = 'Della Nonna';\n    const h2_1 = document.createElement('h2');\n    h2_1.textContent = 'Neapolitan Pizza';\n    const h2_2 = document.createElement('h2');\n    h2_1.textContent = 'Just like Grandma used to make';\n\n    title.appendChild(h1);\n    title.appendChild(h2_1);\n    title.appendChild(h2_2);\n\n    const mainContent = document.createElement('div');\n    mainContent.classList.add('main-content');\n\n    const pizzaImg = document.createElement('div');\n    pizzaImg.classList.add('neapolitan-pizza-img', 'img');\n    pizzaImg.id = 'neapolitan-pizza-img';\n\n    const p = document.createElement('p');\n    p.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt bibendum ipsum non fermentum. Quisque tristique porta pharetra. Donec hendrerit turpis at mattis sodales. Quisque tincidunt tortor interdum ligula cursus tempor. Etiam metus neque, egestas at aliquet et, mollis id leo. Integer ornare molestie elit, mollis aliquet felis finibus et. Aenean pretium ornare diam, non maximus elit lacinia a.';\n\n    mainContent.appendChild(pizzaImg);\n    mainContent.appendChild(p);\n\n    main.appendChild(title);\n    main.appendChild(mainContent);\n}\n\n//# sourceURL=webpack://odin-restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _load_page_content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./load-page-content */ \"./src/load-page-content.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _img_pizza_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/pizza.jpg */ \"./src/img/pizza.jpg\");\n/* harmony import */ var _img_cheese_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/cheese.jpg */ \"./src/img/cheese.jpg\");\n/* harmony import */ var _img_pepperoni_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/pepperoni.jpg */ \"./src/img/pepperoni.jpg\");\n\n\n\n\n\n\n\n\n\nfunction homeImg() {\n    const pizzaImg = new Image();\n    pizzaImg.src = _img_pizza_jpg__WEBPACK_IMPORTED_MODULE_4__;\n}\n\nfunction menuImg() {\n    const cheeseImg = new Image();\n    cheeseImg.src = _img_cheese_jpg__WEBPACK_IMPORTED_MODULE_5__;\n\n    const pepperoniImg = new Image();\n    pepperoniImg.src = _img_pepperoni_jpg__WEBPACK_IMPORTED_MODULE_6__;\n}\n\nfunction clearMain() {\n    const content = document.querySelector('#content');\n    for(let i = 0; i < content.childNodes.length; i++) {\n        if(content.childNodes[i].className === 'main') {\n            while(content.childNodes[i].firstChild) {\n                content.childNodes[i].removeChild(content.childNodes[i].lastChild);\n            }\n        }\n    }\n}\n\nfunction updateHeader(key) {\n    const nav = document.querySelector('.nav');\n    for(let i = 0; i < nav.childNodes.length; i++) {\n        if(nav.childNodes[i].classList.contains('active')) {\n            nav.childNodes[i].classList.toggle('active');\n        }\n    }\n\n    nav.childNodes[key].classList.add('active');\n}\n\nfunction changePage(e) {\n    updateHeader(e.target.datakey);\n    clearMain();\n    switch(e.target.datakey) {\n        case 0:\n            (0,_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n            break;\n        case 1:\n            (0,_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n            break;\n        case 2:\n            (0,_contact__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n            break;\n        default:\n            return;\n    }\n}\n\n(0,_load_page_content__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\nhomeImg();\n\nmenuImg();\n\n(0,_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n// Header button event listeners\n\nconst navItems = document.querySelectorAll('.nav-item');\nnavItems.forEach(navItem => navItem.addEventListener('click', e => changePage(e)))\n\n//# sourceURL=webpack://odin-restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/load-page-content.js":
/*!**********************************!*\
  !*** ./src/load-page-content.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createHeader() {\n    const header = document.createElement('header');\n    header.classList.add('header');\n\n    const nav = document.createElement('nav');\n    nav.classList.add('nav');\n\n    const item1 = document.createElement('div');\n    item1.classList.add('nav-item', 'active');\n    item1.datakey = 0;\n    item1.textContent = 'Home';\n    const item2 = document.createElement('div');\n    item2.classList.add('nav-item');\n    item2.datakey = 1;\n    item2.textContent = 'Menu';\n    const item3 = document.createElement('div');\n    item3.classList.add('nav-item');\n    item3.datakey = 2;\n    item3.textContent = 'Contact';\n\n    nav.appendChild(item1);\n    nav.appendChild(item2);\n    nav.appendChild(item3);\n\n    header.appendChild(nav);\n\n    return header;\n}\n\nfunction createMain() {\n    const main = document.createElement('main');\n    main.classList.add('main');\n\n    return main;\n}\n\nfunction createFooter() {\n    const footer = document.createElement('footer');\n    footer.classList.add('footer');\n\n    const footerText = document.createElement('p');\n    footerText.classList.add('footer-text');\n    footerText.textContent = `Copyright © ${(new Date()).getFullYear()} tylerhand1`;\n\n    footer.appendChild(footerText);\n\n    return footer;\n}\n\nfunction loadPage() {\n    const content = document.querySelector('#content');\n\n    content.appendChild(createHeader());\n    content.appendChild(createMain());\n    content.appendChild(createFooter());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadPage);\n\n//# sourceURL=webpack://odin-restaurant-page/./src/load-page-content.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadMenu)\n/* harmony export */ });\nfunction loadMenu() {\n    const main = document.querySelector('.main');\n\n    const title = document.createElement('div');\n    title.classList.add('title');\n    const h1 = document.createElement('h1');\n    h1.textContent = 'Menu';\n    title.appendChild(h1);\n\n    const menuContainer = document.createElement('div');\n    menuContainer.classList.add('menu-container');\n\n    const menuItem1 = document.createElement('div');\n    menuItem1.classList.add('menu-item');\n    const h3_1 = document.createElement('h3');\n    h3_1.textContent = 'Cheese Pizza';\n    const cheeseImg = document.createElement('div');\n    cheeseImg.classList.add('cheese-pizza-img', 'img');\n    cheeseImg.id = 'cheese-pizza-img';\n    const p_1 = document.createElement('p');\n    p_1.textContent = 'Etiam metus neque, egestas at aliquet et, mollis id leo.';\n\n    menuItem1.appendChild(h3_1);\n    menuItem1.appendChild(cheeseImg);\n    menuItem1.appendChild(p_1);\n\n    const menuItem2 = document.createElement('div');\n    menuItem2.classList.add('menu-item');\n    const h3_2 = document.createElement('h3');\n    h3_2.textContent = 'Pepperoni Pizza';\n    const pepperoniImg = document.createElement('div');\n    pepperoniImg.classList.add('pepperoni-pizza-img', 'img');\n    pepperoniImg.id = 'pepperoni-pizza-img';\n    const p_2 = document.createElement('p');\n    p_2.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt bibendum ipsum non fermentum.';\n\n    menuItem2.appendChild(h3_2);\n    menuItem2.appendChild(pepperoniImg);\n    menuItem2.appendChild(p_2);\n\n    menuContainer.appendChild(menuItem1);\n    menuContainer.appendChild(menuItem2);\n\n    main.appendChild(title);\n    main.appendChild(menuContainer);\n}\n\n//# sourceURL=webpack://odin-restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/img/cheese.jpg":
/*!****************************!*\
  !*** ./src/img/cheese.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0edc2f78caca146e9e4d.jpg\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/img/cheese.jpg?");

/***/ }),

/***/ "./src/img/pepperoni.jpg":
/*!*******************************!*\
  !*** ./src/img/pepperoni.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0e38929b35c1fe0fdcee.jpg\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/img/pepperoni.jpg?");

/***/ }),

/***/ "./src/img/pizza.jpg":
/*!***************************!*\
  !*** ./src/img/pizza.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4c493ee47e3164cacea4.jpg\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/img/pizza.jpg?");

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
/******/ 			// no module.id needed
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
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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