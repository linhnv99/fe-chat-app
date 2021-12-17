import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import ChatLayout from "../../components/Chat/ChatLayout";
import MainChat from "./MainChat";
import SideBar from "./SideBar";

import { getAll } from "../../store/actions/user";

const Chat = ({
  match: {
    params: { id },
  },
}) => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAll());
  }, []);

  return (
    <ChatLayout>
      <SideBar />
      <MainChat />
    </ChatLayout>
  );
};

export default Chat;
