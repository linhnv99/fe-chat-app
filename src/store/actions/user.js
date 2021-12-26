import services from "../../services";
import { GET_ALL_USER } from "../../constants";

export const getAll = () => (dispatch) => {
  const execute = async () => {
    try {
      const response = await services.getAll();
      dispatch({
        type: GET_ALL_USER,
        payload: response.data.data,
      });
    } catch (error) {
      console.error(" ERROR - [GET ALL USER]: ", error.response);
    }
  };
  execute();
};
