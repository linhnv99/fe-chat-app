import React from "react";
import ChatForm from "../../components/Chat/ChatForm";
import ChatHeader from "../../components/Chat/ChatHeader";
import ChatContent from "../../components/Chat/ChatContent";

const MainChat = () => {
  return (
    <div className="chat">
      <ChatHeader />
      <ChatContent />
      <ChatForm />
    </div>
  );
};

export default MainChat;
