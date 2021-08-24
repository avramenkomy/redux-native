export function createStore(rootReducer, initialState) { // передаем некоторый reducer - функцию которыю вызываем в dispatch
    let state = rootReducer(initialState, { type: '__INIT__'}); // делаем state более универсальным
    const subscribers = [];
    // поскольку store это объект, то функция должна возвращать некоторый объект
    return {
        // у redux store есть несколько базовых методов, структура очень похожа на паттерн observer(наблюдатель)

        // по redux в dispatch кладем некоторый action
        // action это обычный объект у которого есть обязательное поле type, например { type: 'INCREMENT' }
        dispatch(action) {
            state = rootReducer(state, action); // передаем предыдущее состояние и сам action
            subscribers.forEach(sub => sub()) // уведомляем всех слушателей об изменении состояния
        },
        subscribe(callback) { // callback - функция выполнится тогда, когда что-то произойдет
            subscribers.push(callback)
        },
        getState() { // позволяет получить state
            return state
        },
    }
};