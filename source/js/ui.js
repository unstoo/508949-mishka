'use strict'

const MENU_CLASS_NAME = 'main-nav__list--hidden',
    TOGGLER_CLASS_NAME = 'main-nav__toggle--closed',
    MENU_ITEM_CLASS_NAME = 'main-nav__link--no-tabindex',
    MODAL_CLASS_NAME = 'modal--hidden'

const menuToggler = document.getElementById('menu-toggler'),
    menu = document.getElementById('main-nav'),
    menuItems = Array.from(document.getElementsByClassName('main-nav__link')),
    modal = document.getElementById('modal'),
    buyButtons = document.querySelectorAll('#buy-button'),
    modalBackScreen = document.getElementById('back-screen')


if (modal) {
    modal.classList.add(MODAL_CLASS_NAME)
    modalBackScreen.addEventListener('click', toggleModal)
}

if (buyButtons.length !== 0) {
    buyButtons.forEach(button => {
        button.addEventListener('click', toggleModal)
    })
}

if (window.innerWidth < 768) {
    // Меню спрятано. Переключение по пунктам меню табом не нужно.
    menuItems.forEach(item => item.setAttribute('tabindex', '-1'))
    initToggler()
} else {
    // Показать скрытое меню.
    menu.classList.remove(MENU_CLASS_NAME)
}   

function initToggler() {
    menuToggler.addEventListener('click', () => {
        
        menu.classList.value.includes(MENU_CLASS_NAME) ?
        (() => {            
            menu.classList.remove(MENU_CLASS_NAME)
            menuToggler.classList.remove(TOGGLER_CLASS_NAME)
            menuItems.forEach(item => item.setAttribute('tabindex', '0'))
        })()
        : 
        (() => {
            menu.classList.add(MENU_CLASS_NAME)
            menuToggler.classList.add(TOGGLER_CLASS_NAME)
            menuItems.forEach(item => item.setAttribute('tabindex', '-1'))
        })()
    })
}

function toggleModal(e) {
    e.preventDefault()

    modal.classList.value.includes(MODAL_CLASS_NAME) ?
        modal.classList.remove(MODAL_CLASS_NAME) :
        modal.classList.add(MODAL_CLASS_NAME)
}
