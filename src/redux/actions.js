import {CHANGE_THEME, DECREMENT, DISABLE_BTN, ENABLE_BTN, INCREMENT} from "./types";

export function increment() {
    return {
        type: INCREMENT
    }
}

export function decrement() {
    return {
        type: DECREMENT
    }
}

export function enableBtn() {
    return {
        type: ENABLE_BTN
    }
}

export function disableBtn() {
    return {
        type: DISABLE_BTN
    }
}

export function asyncIncrement() {
    return function(dispatch) {
        dispatch(disableBtn());
        setTimeout(() => {
            dispatch(increment());
            dispatch(enableBtn());
        }, 2000);
    }
}

export function changeTheme(newTheme) {
    return {
        type: CHANGE_THEME,
        payload: newTheme,
    }
}