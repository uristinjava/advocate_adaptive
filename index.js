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

        menuEl.addEventListener('click', () => {
            menuIconEl.classList.toggle('active');
            menuEl.classList.toggle('active');
            bodyEl.classList.toggle('active');
        })
    }

    const moreEl = document.querySelectorAll('.more') // выбор всех элементов кнопки "подробнее"

    moreEl.forEach(e => {

        e.addEventListener('click', () => {

            const targetDiv = e.closest('.list_specializ');
            const modalDiv = targetDiv.querySelector('.modal');
            modalDiv.classList.toggle('active');

        })
    })



    const tabsBtnEl = document.querySelectorAll('.btn_tab') // выбор всех элементов кнопки табс
    const tabsItem = document.querySelectorAll('.promo_box_persona') // выбор всех элементов с персональной информацией

    tabsBtnEl.forEach(e => {
        e.addEventListener('click', () => {

            let tabId = e.getAttribute('data-tab');
            let currentTab = document.querySelector(tabId);

            if (!e.classList.contains('active_tab')) {
                tabsBtnEl.forEach(e => {
                    e.classList.remove('active_tab')
                })
                tabsItem.forEach(e => {
                    e.classList.remove('active_persona')
                })

                e.classList.add('active_tab');
                currentTab.classList.add('active_persona');
            }

        })
    })

    document.querySelector('.btn_tab').click();

    const modaElements = document.querySelectorAll('.modal')

    modaElements.forEach(e => {
        const modalDiv = e.closest('.modal');

        modalDiv.addEventListener('click', () => {

            modalDiv.classList.toggle('active');

        })

    })

    const nav = document.querySelector('.header')
    nav.addEventListener('click', () => {

        modaElements.forEach(e => {
            e.classList.remove('active')
        })

    })




    window.onscroll = () => {
        const mainOffer = document.querySelector('.main_title_heading');
        mainOffer.classList.toggle('title_top', window.scrollY > 1)

        const buttonMain = document.querySelector('.main_call');
        buttonMain.classList.toggle('visible_btn', window.scrollY > 1);

        const mainHeader = document.querySelector('.main_title');

        mainHeader.classList.toggle('visible_header', window.scrollY > 1);


        const headerOffer = document.querySelector('.offer_header');
        headerOffer.classList.toggle('visible_header', window.scrollY > 1)

        const itemOffers = document.querySelectorAll('.offer_item');

        itemOffers.forEach(e => e.classList.toggle('visible_offer', window.scrollY > 1))

    }








});
