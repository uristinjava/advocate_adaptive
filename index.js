'use strict';

document.addEventListener("DOMContentLoaded", () => {

    const menuIconEl = document.querySelector('.menu_icon'); //элемент иконки меню бургер
    const bodyEl = document.querySelector('body')

    //проверка 
    if (menuIconEl) {

        const menuEl = document.querySelector('.nav_list') //элемент основного меню

        /**
         * функция отслеживания клика по "бургеру"
         */

        menuIconEl.addEventListener('click', function (e) {

            //добавляем по клику на бургер класс active
            menuIconEl.classList.toggle('active');
            menuEl.classList.toggle('active');
            bodyEl.classList.toggle('active');
        });
    }

});
