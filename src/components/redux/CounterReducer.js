const initialState = {
    counter: 0,
};
export default function CounterReducer(state = initialState , action) {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, counter: ++state.counter };
        case 'DECREMENT':
            return { ...state, counter: --state.counter };
        case 'RESET' :
            return {...state, counter : 0}
        default :
            return state;
    }
}