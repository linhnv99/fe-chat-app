import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import ChatHistory from "./ChatHistory";
import DefaultLayout from "../../components/layout/DefaultLayout";
import SideBar from "./SideBar";
import services from "../../services";
import { ENUM } from "../../utils";
import { checkExistNGetRoom } from "../../utils/roomUtils";
import useChatHistory from "../../hooks/useChatHistory";

const MainChat = ({
  match: {
    params: { roomId },
  },
}) => {
  const history = useHistory();
  const scrollToBottom = useRef(null);
  const { messages, sendMessage, rooms, selectingRoom } =
    useChatHistory(roomId);

  const [message, setMessage] = useState("");
  const [selectingUser, setSelectingUser] = useState();

  useEffect(() => {
    scrollToBottom.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const onSendMessage = async (e) => {
    try {
      const me = localStorage.getItem("me");
      if (message.trim()) {
        if (!roomId) {
          const response = await services.createRoom("", [selectingUser._id]);
          roomId = response.data.data._id;
          setSelectingUser(null);
          history.push("/chat/" + roomId);
        }
        const data = {
          roomId,
          senderId: me,
          content: message,
          type: ENUM.MESSAGE_TYPE.MESSAGE,
        };
        sendMessage(data);
        setMessage("");
      }
    } catch (error) {
      console.log("Error create room: ", error.response);
    }
  };

  const handleSelectingUser = (user) => {
    const roomExisted = checkExistNGetRoom(rooms, user._id);
    if (roomExisted) {
      history.push("/chat/" + roomExisted);
    } else {
      setSelectingUser(user);
      history.push("/chat");
    }
  };

  return (
    <DefaultLayout>
      <SideBar rooms={rooms} onSelectingUser={handleSelectingUser} />
      {(selectingRoom || selectingUser) && (
        <ChatHistory
          selectingUser={selectingUser}
          room={selectingRoom}
          messages={messages}
          message={message}
          setMessage={setMessage}
          onSendMessage={onSendMessage}
          scrollToBottom={scrollToBottom}
        />
      )}
    </DefaultLayout>
  );
};

export default MainChat;
