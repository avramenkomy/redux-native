import {createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {rootReducer} from "./redux/rootReducer";
import {asyncIncrement, changeTheme, decrement, increment} from "./redux/actions";
import './styles.css';

// поиск элементов в DOM-дереве по id
const counter = document.getElementById('counter');
const addBtn = document.getElementById('add');
const subBtn = document.getElementById('sub');
const asyncBtn = document.getElementById('async');
const themeBtn = document.getElementById('theme');

// создание рукописного middleware
// function logger(state) {
//     return function(next) {
//         return function(action){
//             console.log('State', state.getState());
//             console.log('Action', action);
//             return next(action)
//         }
//     }
// }

// создаем объект store, который умеет взаимодействовать с данными и сообщать компоненту,
// что произошли те или иные изменения
// при создании передаем reducer без вызова как референс
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

// добавляем прослушку событий
addBtn.addEventListener('click', () => {
    store.dispatch(increment());
});

subBtn.addEventListener('click', () => {
    store.dispatch(decrement());
});

asyncBtn.addEventListener('click', () => {
    store.dispatch(asyncIncrement());
});

themeBtn.addEventListener('click', () => {
    const newTheme = document.body.classList.contains('light')
        ? 'dark'
        : 'light'
    store.dispatch(changeTheme(newTheme));
});
// подписываемся на изменения store
store.subscribe(() => {
    const state = store.getState(); // получаем state
    counter.textContent = state.counter; // передаем значение в DOM ноду counter  и перерисовываем компонент
    document.body.className = state.theme.value;
});

// что бы счетчие отрисовывался из начального состояния приложения нужно задиспатчить несущетсвующий экшн
store.dispatch({ type: 'INIT_APP' });
