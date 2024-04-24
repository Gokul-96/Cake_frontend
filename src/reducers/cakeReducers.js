// const initialState = {
//     cakes: [],
//     loading: false, //api track 
//     error: null
//   };
  
//   const getAllCakesReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case 'GET_CAKES_REQUEST':
//         return {
//           ...state,
//           loading: true,
//           error: null
//         };
//       case 'GET_CAKES_SUCCESS':
//         return {
//           ...state,
//           loading: false,
//           cakes: action.payload,
//           error: null // Reset error to null on success
//         };
//       case 'GET_CAKES_FAILED':
//         return {
//           ...state,
//           loading: false,
//           error: action.payload
//         };
//       default:
//         return state;
//     }
//   };
  
//   export default getAllCakesReducer;