import { actionTypes } from "./actionType";

const initialState = {
  users: [],
  user: {},
  loading: true,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };

    case actionTypes.DELETE_USER:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default usersReducer;
