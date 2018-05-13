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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

    "use strict";
    eval("\n\nvar MENU_CLASS_NAME = 'main-nav__list--hidden',\n    TOGGLER_CLASS_NAME = 'main-nav__toggle--closed',\n    MENU_ITEM_CLASS_NAME = 'main-nav__link--no-tabindex',\n    MODAL_CLASS_NAME = 'modal--hidden';\n\nvar menuToggler = document.getElementById('menu-toggler'),\n    menu = document.getElementById('main-nav'),\n    menuItems = Array.from(document.getElementsByClassName('main-nav__link')),\n    modal = document.getElementById('modal'),\n    buyButtons = Array.from(document.querySelectorAll('.buy-button')),\n    modalBackScreen = document.getElementById('back-screen');\n\nif (modal) {\n    modal.classList.add(MODAL_CLASS_NAME);\n    modalBackScreen.addEventListener('click', toggleModal);\n}\n\nif (buyButtons.length !== 0) {\n    buyButtons.forEach(function (button) {\n        button.addEventListener('click', toggleModal);\n    });\n}\n\nif (window.innerWidth < 768) {\n    // Меню спрятано. Переключение по пунктам меню табом не нужно.\n    menuItems.forEach(function (item) {\n        item.setAttribute('tabindex', '-1');\n    });\n    initToggler();\n} else {\n    // Показать скрытое меню.\n    menu.classList.remove(MENU_CLASS_NAME);\n}\n\nfunction initToggler() {\n    menuToggler.addEventListener('click', function () {\n\n        var classes = Array.from(menu.classList);\n\n        classes.includes(MENU_CLASS_NAME) ? function () {\n            menu.classList.remove(MENU_CLASS_NAME);\n            menuToggler.classList.remove(TOGGLER_CLASS_NAME);\n            menuItems.forEach(function (item) {\n                item.setAttribute('tabindex', '0');\n            });\n        }() : function () {\n            menu.classList.add(MENU_CLASS_NAME);\n            menuToggler.classList.add(TOGGLER_CLASS_NAME);\n            menuItems.forEach(function (item) {\n                item.setAttribute('tabindex', '-1');\n            });\n        }();\n    });\n}\n\nfunction toggleModal(e) {\n    e.preventDefault();\n\n    var modalClasses = Array.from(modal.classList);\n\n    modalClasses.includes(MODAL_CLASS_NAME) ? modal.classList.remove(MODAL_CLASS_NAME) : modal.classList.add(MODAL_CLASS_NAME);\n}\n\n//# sourceURL=webpack:///./index.js?");

    /***/ })

    /******/ });
