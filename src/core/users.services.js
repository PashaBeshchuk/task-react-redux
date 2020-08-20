import instance from '../core/instance';

export const apiUsers = {
    getAllUsers: () => {
        return instance.get('/users');
    },
    postNewUser: (userData) => {
        return instance.post('/users', userData);
    },
    putNewUserData: (userData) => {
        return instance.put(`/user/${userData.id}`, userData);
    },
    deleteUser: (userId) => {
        return instance.delete(`/user/${userId}`);
    }
}