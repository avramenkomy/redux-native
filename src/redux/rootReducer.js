import {CHANGE_THEME, DECREMENT, DISABLE_BTN, ENABLE_BTN, INCREMENT} from "./types";
import {combineReducers} from "redux";

function counterReducer(state= 0, action) {
    if (action.type === INCREMENT) {
        return state + 1
    } else if (action.type === DECREMENT) {
        return state - 1
    }
    return state
}

const initThemeState = {
    value: 'light',
    disabled: false,
}
function themeReducer(state = initThemeState, action) {
    switch(action.type) {
        case CHANGE_THEME:
            return { ...state, value: action.payload }
        case ENABLE_BTN:
            return { ...state, disabled: false }
        case DISABLE_BTN:
            return { ...state, disabled: true}
        default: return state
    }
    return state
}

export const rootReducer = combineReducers({
    counter: counterReducer,
    theme: themeReducer,
})