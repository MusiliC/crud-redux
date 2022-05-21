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
          type: actionTypes.DELETE_USER,
          payload: id 
        })
        dispatch(getUsers())
    } catch (error) {
        console.log(error);
    }
}

export const createUser = (user) => async (dispatch) => {
  try {
    const response = await api.addUser(user)
    dispatch({
      type: actionTypes.ADD_USER,
      payload: response.data
    })
    dispatch(getUsers())
  } catch (error) {
    console.log(error);
  }
}

export const oneUser = (id) => async (dispatch) => {
  try {
  const response =  await api.getUser(id);
    dispatch({
      type: actionTypes.GET_ONE_USER,
      payload: response.data
    });
  //  console.log(response);
  } catch (error) {
    console.log(error);
  }
};


export const updateUser = (id, user) => async (dispatch) => {
  try {
    const response = await api.updateUser(id, user);
    dispatch({
      type: actionTypes.UPDATE_USER,
      payload: response.data,
    });
    //  console.log(response);
  } catch (error) {
    console.log(error);
  }
};
