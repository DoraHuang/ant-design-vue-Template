import axios from 'axios'
import { modalError } from '/@/components/Modal.js';
const commonRequest = axios.create({
    baseURL: '/api/Account',
});

axios.defaults.withCredentials = true;
export const IsLogin = () => {
    return commonRequest.get('/IsLogin');
};

export const GetUserInfo = (store) => {
    return commonRequest.get('/GetUserInfo')
        .then(response => {
            store.state.claims = response.data.Claims
        });
};
export const Login = (data, store) => {
    return commonRequest.post('/Login', data)
};

export const Logout = (store) => {
    return commonRequest.post('/Logout')
        .then(() => {
            store.state.isAuthenticated = false
        })
};

export const ChangePasswordApi = (data, store) => {
    return commonRequest.post('/ChangePassword', data)
        .then(() => {})
};

export const getAllUserApi = (data) => {
    return commonRequest.get('/GetAllUser');
};
export const postAddUserApi = (data) => {
    return commonRequest.post('/AddUser', data);
};
export const updateUserApi = (param) => {
    return commonRequest.post('/Update', param);
};
export const deleteUserApi = (param) => {
    return commonRequest.delete('/Delete', { data: param }, {
        headers: {
            // Overwrite Axios's automatically set Content-Type
            'Content-Type': 'application/json'
        }
    });
};