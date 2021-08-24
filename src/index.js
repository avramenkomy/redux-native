import {createStore} from "./createStore";
import './styles.css';

// поиск элементов в DOM-дереве по id
const counter = document.getElementById('counter');
const addBtn = document.getElementById('add');
const subBtn = document.getElementById('sub');
const asyncBtn = document.getElementById('async');
const themeBtn = document.getElementById('theme');

// создаем объект store, который умеет взаимодействовать с данными и сообщать компоненту,
// что произошли те или иные изменения
const store = createStore();

// добавляем прослушку событий
addBtn.addEventListener('click', () => {

});

subBtn.addEventListener('click', () => {

});

asyncBtn.addEventListener('click', () => {

});

themeBtn.addEventListener('click', () => {

});
