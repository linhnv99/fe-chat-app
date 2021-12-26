import axiosInstance from "./request";

const getRooms = async () => axiosInstance.get("/room/me");

const getChatInRoom = async (id) => axiosInstance.get(`/room/${id}/chat-data`);

export const roomService = {
  getRooms,
  getChatInRoom,
};
