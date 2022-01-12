import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAll } from "../store/actions/user";
import services from "../services";
import { Socket } from "../socket";
import { convertRoom } from "../utils/roomUtils";

const useChatHistory = (roomId) => {
  const dispatch = useDispatch();
  const [messages, setMessages] = useState([]);
  const [incomingMessage, setIncomingMessage] = useState();
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    dispatch(getAll());
    getRooms();
    Socket.getInstance().on("server-new-message", (data) => {
      // console.log("From server: ", data);
      const incomingMsg = {
        roomId: data.roomId,
        senderId: data.senderId,
        type: data.type,
        content: data.content,
        createdAt: data.createdAt,
        isMyMessage: data.isMyMessage,
      };
      setIncomingMessage(incomingMsg)
    });
  }, [dispatch]);

  const getRooms = async () => {
    try {
      const response = await services.getRooms();
      setRooms(convertRoom(response.data.data));
    } catch (error) {
      console.log("Error get rooms: ", error.response);
    }
  };

  useEffect(() => {
    const execute = async () => {
      try {
        const response = await services.getChatInRoom(roomId);
        setMessages(response.data.data);
      } catch (error) {
        console.log("Error get chat in room: ", error.response);
      }
    };
    if (roomId) execute();
  }, [roomId]);

  useEffect(() => {
    const execute = async () => {
      if (incomingMessage) {
        const roomNotify = rooms.find(room => room.id === incomingMessage.roomId)
        if (roomNotify) {
          roomNotify.lastMessage = incomingMessage.content
          const otherRooms = rooms.filter(room => room.id !== incomingMessage.roomId)
          setRooms([roomNotify, ...otherRooms])
          if (roomId === incomingMessage.roomId) {
            setMessages((prevMessages) => [incomingMessage, ...prevMessages]);
          }
        } else {
          await getRooms()
        }
      }
    }
    execute()
    return () => setIncomingMessage(null)
  }, [incomingMessage, roomId])

  const sendMessage = (data) => {
    Socket.getInstance().emit("client-new-message", data);
  };

  const selectingRoom = rooms.find((room) => room.id === roomId);

  return {
    messages,
    sendMessage,
    rooms,
    selectingRoom,
  };
};

export default useChatHistory;
