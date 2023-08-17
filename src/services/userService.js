import axios from "axios"
import { endpoints } from "./endpoints";

export const getOneUser = async (email, password) => {
    try {
        const {data} = await axios.get(`${endpoints.urlUsers}?email=${email}&password=${password}`)
        return data.length ? data[0] : null;
    } catch (error) {
        console.log(error);
        return null
    }
   
}



export const getUser = async (userId) => {
    try {
        const { data } = await axios.get(`${endpoints.urlUsers}?id=${userId}`);
        return data
    } catch (error) {
        console.log(error);
        return null
    }
}

export const getUserPost = async (userId) => {
    try {
        const {data} = await axios.get(`${endpoints.urlUsers}/${userId}?_embed=posts`)
        return data;
    } catch (error) {
        console.log(error);
        return null
    }
   
}