import { createStore } from "redux";
import { tokenReducer } from "./tokens/tokensReduce";

const store = createStore(tokenReducer);

export default store;