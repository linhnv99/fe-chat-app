import { GET_ALL_USER } from "../../constants";

const initState = {
  users: [],
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_ALL_USER:
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
