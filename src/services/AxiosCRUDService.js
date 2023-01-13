import axios from "axios"

const urlBase = 'https://reqres.in/api'
const urlUsers = urlBase + '/users'

export const login = (email, password) => {
    const body = {
        email,
        password
    }

    return axios.post(urlBase + '/loign', body)
}

export const getAllUsers = () => {
    return axios.get(urlBase)
}

export const getAllUsersPaged = (page) => {
    return axios.get(urlBase + `page=${page}`)
}

export const getUserById = (id) => {
    return axios.get(urlBase + `/${id}`)
}

export const createUser = (name, job) => {
    const body = {
        name,
        job
    }

    return axios.post(urlUsers, body)
}
// ta un poco roto esto último
export const updateUserById = (id, name, job) => {
    const body = {
        name,
        job
    }

    return axios.put(urlUsers + `/${id}`, body)
}

export const deleteUserById = (id) => {
    return axios.delete(urlBase + `/${id}`)
}