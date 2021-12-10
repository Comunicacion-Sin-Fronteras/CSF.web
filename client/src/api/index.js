import axios from 'axios'

require('dotenv').config();

// console.log(process.env.PORT);
const port = process.env.SERVER_PORT;
// console.log("THE BACK PORT IS:" + port); //not working

const api = axios.create({
    // baseURL: `http://localhost:${port}/api`,
    baseURL: `http://localhost:3000/api`,
})

export const insertSenia = payload => api.post(`/senia`, payload)
// export const getAllSenias = () => api.get(`/senia`)
export const getAllSenias = () => axios.get('http://localhost:3000/api/senia/')
export const updateSeniaById = (id, payload) => api.put(`/senia/${id}`, payload)
export const deleteSeniaById = id => api.delete(`/senia/${id}`)
export const getSeniaById = id => api.get(`/senia/${id}`)
export const getHistory = (payload) => api.post('/history',payload)

const apis = {
    insertSenia,
    getAllSenias,
    updateSeniaById,
    deleteSeniaById,
    getSeniaById,
    getHistory,
}

export default apis