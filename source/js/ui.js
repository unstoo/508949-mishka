'use strict'
console.log(Array.prototype.includes)
/* IE11 poly */
if (!Array.from) {
    Array.from = (function () {
      var toStr = Object.prototype.toString;
      var isCallable = function (fn) {
        return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
      };
      var toInteger = function (value) {
        var number = Number(value);
        if (isNaN(number)) { return 0; }
        if (number === 0 || !isFinite(number)) { return number; }
        return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
      };
      var maxSafeInteger = Math.pow(2, 53) - 1;
      var toLength = function (value) {
        var len = toInteger(value);
        return Math.min(Math.max(len, 0), maxSafeInteger);
      };
  
      // The length property of the from method is 1.
      return function from(arrayLike/*, mapFn, thisArg */) {
        // 1. Let C be the this value.
        var C = this;
  
        // 2. Let items be ToObject(arrayLike).
        var items = Object(arrayLike);
  
        // 3. ReturnIfAbrupt(items).
        if (arrayLike == null) {
          throw new TypeError("Array.from requires an array-like object - not null or undefined");
        }
  
        // 4. If mapfn is undefined, then let mapping be false.
        var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
        var T;
        if (typeof mapFn !== 'undefined') {
          // 5. else
          // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
          if (!isCallable(mapFn)) {
            throw new TypeError('Array.from: when provided, the second argument must be a function');
          }
  
          // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.
          if (arguments.length > 2) {
            T = arguments[2];
          }
        }
  
        // 10. Let lenValue be Get(items, "length").
        // 11. Let len be ToLength(lenValue).
        var len = toLength(items.length);
  
        // 13. If IsConstructor(C) is true, then
        // 13. a. Let A be the result of calling the [[Construct]] internal method of C with an argument list containing the single item len.
        // 14. a. Else, Let A be ArrayCreate(len).
        var A = isCallable(C) ? Object(new C(len)) : new Array(len);
  
        // 16. Let k be 0.
        var k = 0;
        // 17. Repeat, while k < len… (also steps a - h)
        var kValue;
        while (k < len) {
          kValue = items[k];
          if (mapFn) {
            A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
          } else {
            A[k] = kValue;
          }
          k += 1;
        }
        // 18. Let putStatus be Put(A, "length", len, true).
        A.length = len;
        // 20. Return A.
        return A;
      };
    }());
  }

  /* IE1 Poly */

const MENU_CLASS_NAME = 'main-nav__list--hidden',
    TOGGLER_CLASS_NAME = 'main-nav__toggle--closed',
    MENU_ITEM_CLASS_NAME = 'main-nav__link--no-tabindex',
    MODAL_CLASS_NAME = 'modal--hidden'

const menuToggler = document.getElementById('menu-toggler'),
    menu = document.getElementById('main-nav'),
    menuItems = Array.from(document.getElementsByClassName('main-nav__link')),
    modal = document.getElementById('modal'),
    buyButtons = Array.from(document.querySelectorAll('#buy-button')),
    modalBackScreen = document.getElementById('back-screen')


if (modal) {
    modal.classList.add(MODAL_CLASS_NAME)
    modalBackScreen.addEventListener('click', toggleModal)
}

if (buyButtons.length !== 0) {
    buyButtons.forEach(function (button) {
        button.addEventListener('click', toggleModal)
    })
}

if (window.innerWidth < 768) {
    // Меню спрятано. Переключение по пунктам меню табом не нужно.
    menuItems.forEach(function (item) { item.setAttribute('tabindex', '-1') })
    initToggler()
} else {
    // Показать скрытое меню.
    menu.classList.remove(MENU_CLASS_NAME)
}   

function initToggler() {
    menuToggler.addEventListener('click', function () {

        const classes = Array.from(menu.classList)
        console.log('-----')
        console.log(classes)

        classes.includes(MENU_CLASS_NAME) ?
        (function() {            
            menu.classList.remove(MENU_CLASS_NAME)
            menuToggler.classList.remove(TOGGLER_CLASS_NAME)
            menuItems.forEach(function (item) { item.setAttribute('tabindex', '0') })
        })()
        : 
        (function() {
            menu.classList.add(MENU_CLASS_NAME)
            menuToggler.classList.add(TOGGLER_CLASS_NAME)
            menuItems.forEach(function (item) { item.setAttribute('tabindex', '-1') })
        })()
    })
}

function toggleModal(e) {
    e.preventDefault()

    const modalClasses = Array.from(modal.classList)
    console.log('-----')
    console.log(modalClasses)
    modalClasses.includes(MODAL_CLASS_NAME) ?
        modal.classList.remove(MODAL_CLASS_NAME) :
        modal.classList.add(MODAL_CLASS_NAME)
}
