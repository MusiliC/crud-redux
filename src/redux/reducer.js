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
      const deleteUser = state.users.filter((user) => user.id !== action.payload.id ? action.payload : state.users)
      return{
        ...state,
        users: deleteUser,
        loading: false
      }

    case actionTypes.ADD_USER:
      return {
        ...state,
        loading: false,
      };

    case actionTypes.UPDATE_USER:
      console.log(action.payload);
      const editedUser =  state.users.map((user) => user.id === action.payload)
      return {
        ...state,
        user: editedUser,
        loading: false

      }

    case actionTypes.GET_ONE_USER:
      // console.log(action.payload);
      return {
        ...state,
        user: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default usersReducer;
