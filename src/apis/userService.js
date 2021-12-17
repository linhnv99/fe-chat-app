import axiosInstance from "./request";

const getAll = async (username, password) => axiosInstance.get("/user/all");

export const userService = {
  getAll,
};
