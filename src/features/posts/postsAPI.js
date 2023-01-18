import apiConfig from "../../api/apiConfig";
import axios from "axios";

export const getPostsByUserIdAction = async (id) => {
  try {
    const url = "/posts/?userId=" + id
   
    const { data } = await axios.get(apiConfig.baseUrl + url);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};


