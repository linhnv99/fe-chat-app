import axiosInstance from "./request";

const getAll = async (username, password) => axiosInstance.get("/user/all");

const getUserById = async (id) => axiosInstance.get(`/user/${id}`);

export const userService = {
  getAll,
  getUserById,
};
