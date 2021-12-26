import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import ChatHistory from "./ChatHistory";
import { getAll } from "../../store/actions/user";
import DefaultLayout from "../../components/layout/DefaultLayout";
import SideBar from "./SideBar";

const MainChat = ({
  match: {
    params: { roomId },
  },
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAll());
  }, []);

  return (
    <DefaultLayout>
      <SideBar />
      <ChatHistory />
    </DefaultLayout>
  );
};

export default MainChat;
