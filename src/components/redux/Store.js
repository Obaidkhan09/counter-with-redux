import { createStore } from "redux";
import CounterReducer from "./CounterReducer";

const Store = createStore(CounterReducer);
export default Store;