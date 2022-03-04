import axios from 'axios';
// Common api
const RoleRequest = axios.create({
    baseURL: '/api/Role',
});

export const getAllRolegApi = () => {
    return RoleRequest.get('/GetAllRole');
};
export const updateRoleApi = (param) => {
    return RoleRequest.post('/Update', param);
};
export const deleteRoleApi = (param) => {
    return RoleRequest.delete('/Delete', { data: param }, {
        headers: {
            // Overwrite Axios's automatically set Content-Type
            'Content-Type': 'application/json'
        }
    });
};
export const createRoleApi = (param) => {
    return RoleRequest.post('/Create', param);
};
export const getRoleById = (id, seq) => {
    return RoleRequest.get('/GetRoleById', { params: { role_id: id } });
};