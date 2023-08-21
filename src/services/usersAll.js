import axios from "axios";
import { endpoints } from "./endpoints";

export const getAllUsers = async () => {
  try {
    const { data } = await axios.get(endpoints.urlUsers);
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const saveUser = async (user) =>{
  try {
      const { data } = await axios.post(endpoints.urlUsers, user)
      return data;
  } catch (error) {
      console.log(error)
      return null
  }
}