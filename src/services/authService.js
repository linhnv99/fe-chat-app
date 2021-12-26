import axiosInstance from "./request";

const signUp = async (username, password) =>
  axiosInstance.post("/auth/sign-up", {
    username,
    password,
  });

const login = async (username, password) =>
  axiosInstance.post("/auth/login", {
    username,
    password,
  });

const getMe = async () => axiosInstance.get("/user/me");

export const authService = {
  signUp,
  login,
  getMe,
};
