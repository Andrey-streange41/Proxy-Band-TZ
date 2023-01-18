import apiConfig from "../../api/apiConfig";
import axios from "axios";

export const getAlbumsByUserIdAction = async (id) => {
  try {
    const url = `/users/${id}/albums`;
    const { data } = await axios.get(apiConfig.baseUrl + url);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
