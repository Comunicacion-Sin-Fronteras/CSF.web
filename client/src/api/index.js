import axios from 'axios'

// require('dotenv').config();

var port = 8080;
const api = axios.create({
    // baseURL: process.env.REACT_APP_SERVER_API_ENDPOINT,
    baseURL: `http://localhost:${port}/api`,
})

export const insertSenia = payload => api.post(`/senia`, payload)
// export const getAllSenias = () => api.get(`/senia`)
export const getAllSenias = () => api.get('/senia/')
export const updateSeniaById = (id, payload) => api.put(`/senia/${id}`, payload)
export const deleteSeniaById = id => api.delete(`/senia/${id}`)
export const getSeniaById = id => api.get(`/senia/${id}`)
export const getHistory = (payload) => api.post('/history',payload)
export const getHistoryContent = (User,Activity) => api.post('/historycontent',{Nombre_Usuario:User, Activity:Activity})
export const saveActivity = (payload)=>api.post("/activities",payload)

const apis = {
    insertSenia,
    getAllSenias,
    updateSeniaById,
    deleteSeniaById,
    getSeniaById,
    getHistory,
    getHistoryContent,
}

export default apis