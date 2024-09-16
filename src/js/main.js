import './libs.js';

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