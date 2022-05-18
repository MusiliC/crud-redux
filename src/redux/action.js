import { actionTypes } from "./actionType";
import * as api from "../api/index";

export const getUsers = () => async (dispatch) => {
  try {
    const response = await api.fetchUsers();
    
    dispatch({
      type: actionTypes.GET_USERS,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = (id) => async (dispatch) => {
    try {
        await api.deleteOneUser(id);
        dispatch({
            type:actionTypes.DELETE_USER,
            // payload:id
        })
        dispatch(getUsers())
    } catch (error) {
        console.log(error);
    }
}
