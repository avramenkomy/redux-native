import {createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import {rootReducer} from "./redux/rootReducer";
import {decrement, increment} from "./redux/actions";
import './styles.css';

// поиск элементов в DOM-дереве по id
const counter = document.getElementById('counter');
const addBtn = document.getElementById('add');
const subBtn = document.getElementById('sub');
const asyncBtn = document.getElementById('async');
const themeBtn = document.getElementById('theme');

// создаем объект store, который умеет взаимодействовать с данными и сообщать компоненту,
// что произошли те или иные изменения
// при создании передаем reducer без вызова как референс и начальное состояние счетчика
const store = createStore(rootReducer, 0, applyMiddleware(thunk));

// добавляем прослушку событий
addBtn.addEventListener('click', () => {
    store.dispatch(increment());
});

subBtn.addEventListener('click', () => {
    store.dispatch(decrement());
});

asyncBtn.addEventListener('click', () => {

});

themeBtn.addEventListener('click', () => {

});
// подписываемся на изменения store
store.subscribe(() => {
    const state = store.getState(); // получаем state
    counter.textContent = state; // передаем значение в DOM ноду counter  и перерисовываем компонент
});

// что бы счетчие отрисовывался из начального состояния приложения нужно задиспатчить несущетсвующий экшн
store.dispatch({ type: 'INIT_APP' });
