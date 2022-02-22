import { increment, decrement, reset } from "./Action";

const initialState = {
    counter: 0,
};
export default function CounterReducer(state = initialState , action) {
    switch (action.type) {
        case increment:
            return { ...state, counter: state.counter + action.payload.value}; //can be replaced with ++state.counter
        case decrement:
            return { ...state, counter: state.counter - action.payload.value}; //using payload to practice the wroking
        case reset :
            return {...state, counter : action.payload.value}   //of action.payload
        default :
            return state;
    }
}