import axios from "axios";
import { endpoints } from "./endpoints";

const getPosts = async() => {
    try {
        const { data } = await axios.get(endpoints.urlPosts)
        return data;
    } catch (error) {
        console.log(error);
        return []; 
    }
}

export default getPosts;

export const getPostUser = async () => {
    try {
        const url = `${endpoints.urlUsers}?_embed=posts`
        const { data } = await axios.get(url)
        return data;
        
    } catch (error) {
        console.log(error)
        return []
    }
}

export const editPost = async () => {
    try {
        
    } catch (error) {
        console.log(error);
        return []
    }
}