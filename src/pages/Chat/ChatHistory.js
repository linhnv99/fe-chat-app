import React from "react";
import Message from "../../components/Chat/Message";

const ChatHistory = ({
  room,
  messages,
  message,
  setMessage,
  onSendMessage,
  selectingUser,
  scrollToBottom,
}) => {
  return (
    <form className="col-sm-8 conversation">
      <div className="row heading">
        <div className="col-sm-2 col-md-1 col-xs-3 heading-avatar">
          <div className="heading-avatar-icon">
            <img src="https://bootdey.com/img/Content/avatar/avatar6.png" />
          </div>
        </div>
        <div className="col-sm-9 col-xs-9 heading-name">
          {room && (
            <div>
              <a className="heading-name-meta">{room?.name}</a>
              <span className="heading-online">Online</span>
            </div>
          )}
          {selectingUser && (
            <div>
              <a className="heading-name-meta">{selectingUser?.username}</a>
              <span className="heading-online">Online</span>
            </div>
          )}
        </div>
        <div className="col-sm-1 col-xs-1  heading-dot pull-right">
          <i
            className="fa fa-ellipsis-v fa-2x  pull-right"
            aria-hidden="true"
          ></i>
        </div>
      </div>
      <div className=" message" id="conversation">
        {messages.length !== 0 &&
          messages
            .slice(0)
            .reverse()
            .map((message, index) => (
              <div ref={scrollToBottom}>
                <Message
                  key={index}
                  content={message.content}
                  type={`${message.isMyMessage ? "sender" : "receiver"}`}
                />
              </div>
            ))}
        {messages.length === 0 && (
          <small className="text-center d-block mt-3">Let's go</small>
        )}
      </div>
      <div className="row reply">
        <div className="col-sm-1 col-xs-1 reply-emojis">
          <i className="fa fa-smile-o fa-2x"></i>
        </div>
        <div className="col-sm-9 col-xs-9 reply-main">
          <textarea
            className="form-control"
            rows="1"
            id="comment"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <div className="col-sm-1 col-xs-1 reply-recording">
          <i className="fa fa-microphone fa-2x" aria-hidden="true"></i>
        </div>
        <div
          type="button"
          className="col-sm-1 col-xs-1 reply-send"
          onClick={(e) => onSendMessage(e)}
        >
          <i className="fa fa-send fa-2x" aria-hidden="true"></i>
        </div>
      </div>
    </form>
  );
};

export default ChatHistory;
