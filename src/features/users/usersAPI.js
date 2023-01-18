import apiConfig from "../../api/apiConfig";
import axios from "axios";

export const getUsersAction = async () => {
  try {
    const { data } = await axios.get(apiConfig.baseUrl + "/users/");
    return data;
  } catch (error) {
    console.log(error.message);
  }
};


