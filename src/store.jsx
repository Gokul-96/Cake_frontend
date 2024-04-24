// //entry point of redux
// import { combineReducers, createStore, applyMiddleware } from 'redux';
// import getAllCakesReducer from './reducers/cakeReducers';
// import thunk from 'redux-thunk';
// // Combine reducers
// const rootReducer = combineReducers({
//   cakesData: getAllCakesReducer // Assuming 'cakes' is the state managed by getAllCakesReducer
// });

// // Define initial state if needed (you can pass an empty object for simplicity)
// const initialState = {};

// // Create Redux store with rootReducer and initial state
// // Apply middleware if needed (you can add middleware like thunk here if required)
// export const store = createStore(
//   rootReducer,
//   applyMiddleware(thunk) // Apply redux-thunk middleware
// );



import {configureStore} from "@reduxjs/toolkit"
import cakeReducer  from "./actions/cakeActions"

const store = configureStore({
  reducer : {
    cake : cakeReducer
  }
})

export default store;