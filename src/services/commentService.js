import axios from "axios";
import { endpoints } from "./endpoints";

export const getComment = async() => {
    try {
        const { data } = await axios.get(endpoints.urlComments);
        return data;
    } catch (error) {
        console.log(error);
        return error;
    }
}

export const saveComment = async(comment) =>{
    try {

        const { data } = await axios.post(endpoints.urlComments, comment);
        return data;
        
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const editComment = async (commentId, updatedComment) => {
    try {
      const response = await axios.patch(
        `${endpoints.urlComments}/${commentId}`,
        updatedComment
      );
      return response;
    } catch (error) {
      console.log(error);
      return null;
    }
  };