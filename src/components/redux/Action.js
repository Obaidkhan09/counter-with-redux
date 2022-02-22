export const increment = 'INCREMENT';
export const decrement = 'DECREMENT';
export const reset = 'RESET'

export const incrementAction = () => ({
    type : increment,
    payload : {
        value : 1,
    }
});

export const decrementAction = () => ({
    type : decrement,
    payload : {
        value : 1
    }
});

export const resetAction = () => ({
    type : reset,
    payload : {
        value : 0,
    }
});