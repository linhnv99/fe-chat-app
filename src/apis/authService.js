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

const logout = (history) => {
  localStorage.clear();
  history.push("/login");
};

export const authService = {
  signUp,
  login,
  logout,
};
