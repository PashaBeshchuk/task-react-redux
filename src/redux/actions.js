import { UPDATE_USERS } from "./actionsTypes";

import { apiUsers } from '../api/api-users';

export const getAllUsersThunk = () => {
    return async (dispatch) => {
        const {data, status} = await apiUsers.getAllUsers();
        if(status === 200) {
            dispatch(updateUsersAC(data));
        }
    }; 
};

export const addNewUserThunk = (userData) => {
    return async (dispatch) => {
        const { status } = await apiUsers.postNewUser(userData);
        if(status === 200) {
            dispatch(getAllUsersThunk());
        }
    };
};

export const updateUserDataThunk = (userData) => {
    return async (dispatch) => {
        const { status } = await apiUsers.putNewUserData(userData)
        if(status === 200) {
            dispatch(getAllUsersThunk())
        }
    };
};

export const deleteUserThunk = (userId) => {
    return async (dispatch) => {
        const response = await apiUsers.deleteUser(userId)
        if(response.status === 200) {
            dispatch(getAllUsersThunk())
        }
    };
};

export const updateUsersAC = (users) => ({type: UPDATE_USERS, users});