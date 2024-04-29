
import {configureStore} from "@reduxjs/toolkit"
import cakeReducer  from "./reducers/cakeReducers"
import { cartReducer } from "./reducers/cartReducer";

const store = configureStore({
  reducer : {
    cake : cakeReducer,
    cart : cartReducer
  }
})

export default store;