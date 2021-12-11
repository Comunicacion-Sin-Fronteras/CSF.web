import axios from 'axios'

require('dotenv').config();

const api = axios.create({
    baseURL: process.env.REACT_APP_SERVER_API_ENDPOINT,
    // baseURL: `http://localhost:${port}/api`,
})

export const insertSenia = payload => api.post(`/senia`, payload)
// export const getAllSenias = () => api.get(`/senia`)
export const getAllSenias = () => api.get('/senia/')
export const updateSeniaById = (id, payload) => api.put(`/senia/${id}`, payload)
export const deleteSeniaById = id => api.delete(`/senia/${id}`)
export const getSeniaById = id => api.get(`/senia/${id}`)

const apis = {
    insertSenia,
    getAllSenias,
    updateSeniaById,
    deleteSeniaById,
    getSeniaById,
}

export default apis