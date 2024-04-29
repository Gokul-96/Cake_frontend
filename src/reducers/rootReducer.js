import { combineReducers } from "redux";
import cakeReducer from "./cakeReducers";
import { cartReducer } from "./cartReducer";
const rootReducer = combineReducers({
  cakes: cakeReducer,
  cart: cartReducer
});

export default rootReducer;