import { BaseHelpers } from './helpers/base-helpers';

BaseHelpers.checkWebpSupport();

// JS код писать здесь
// js из node_moduless'
import 'core-js/actual';
import $ from "jquery";
import 'slick-carousel/slick/slick.js';
import 'select2/dist/js/select2.js';
import AirDatepicker from 'air-datepicker';
import browserUpdate from 'browser-update';

$('.review-slider').not('.slick-initialized').slick({
  arrows: false,
  dots: true,
  slidesToShow: 3,
  slidesToScroll: 3,
});

$(document).ready(function () {
  $('.header__select').select2({
    minimumResultsForSearch: -1,
    templateSelection: function (state) {
      var $state = $(
        '<span class="select2-wrap-text">' + '<span class="select2-text">' + state.text + '</span><img class="select2-img" src="images/' + state.id + '.svg" /></span>'
      );
      return $state;
    },
  });
});

new AirDatepicker('.aviatickets-panel__calendar');

browserUpdate({
  required: {
    e: -2,
    i: 12,
    f: -3,
    o: -3,
    s: 10.1,
    c: "64.0.3282.16817",
    samsung: 7.0,
    vivaldi: 1.2
  },
  insecure: true,
  reminder: 0
});

//получаем все кнопки
const tabsBtn = document.querySelectorAll('.tabs__nav-btn');
//получаем все элеменетам
const tabsItems = document.querySelectorAll('.tabs__item');

//проходимся по всем кнопкам
tabsBtn.forEach(onTabClick);

//функция обработчик клика по кнопке
function onTabClick(item) {
    //вешаем обработчик события на кнопку
    item.addEventListener('click', function () {
        //ссылка на текущую кнопку
        let currentBtn = item;
        //получаем содержимое атрибута текущей кнопки
        let tabId = currentBtn.getAttribute('data-tab');
        //получаем ссылку на элемент относящейся к текущей кнопке
        let currentTab = document.querySelector(tabId);

        //проверка на то чтобы не добавлять классы если кнопка уже была активна ранее
        if (!currentBtn.classList.contains('active')) {
            //проходимся по всем кнопкам и удаляем им класс active
            tabsBtn.forEach(function (item) {
                item.classList.remove('active');
            });

            //проходимся по всем элементам и удаляем им класс active
            tabsItems.forEach(function(item) {
                item.classList.remove('active');
            })

            //добавляем класс active текущей кнопке
            currentBtn.classList.add('active');
            //добавляем класс active текущему элементу
            currentTab.classList.add('active');
        }
    });
}