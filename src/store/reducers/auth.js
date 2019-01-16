import * as actionTypes from "../actions/actionTypes";

const initialState = {
  isAuthenticated: false,
  isAdmin: false,
  user: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_LOCATION:
      return {
        ...state,
        location: {
          longitude: action.payload.longitude,
          latitude: action.payload.latitude
        }
      };
    case actionTypes.SET_CURRENT_USER:
      return {
        ...state,
        //isAuthenticated: !isEmpty(action.payload),
        //isAdmin: action.payload.role ? action.payload.role !== 0 : false,
        //user: action.payload
      };
    case actionTypes.ADD_TO_CART:
      return {
        ...state,
        user: {
          ...state.user,
         // cart: action.payload
        }
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        user: {
          ...state.user,
          //cart: action.payload
        }
      };
    case actionTypes.REDUCE_FROM_CART:
      return {
        ...state,
        user: {
          ...state.user,
          //cart: action.payload
        }
      };
    case actionTypes.DELETE_UNUSED_IMAGES:
      return {
        ...state
      };
    default:
      return state;
  }
};
