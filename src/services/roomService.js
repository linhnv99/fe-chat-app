import axiosInstance from "./request";

const getRooms = async () => axiosInstance.get("/room/me");

const getChatInRoom = async (id) => axiosInstance.get(`/room/${id}/chat-data`);

const createRoom = async (name, userIds) =>
  axiosInstance.post("/room/create", {
    name,
    userIds,
  });

export const roomService = {
  getRooms,
  getChatInRoom,
  createRoom,
};
