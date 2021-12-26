import React from "react";
import Message from "../../components/Chat/Message";

const ChatHistory = () => {
  return (
    <div className="col-sm-8 conversation">
      <div className=" message" id="conversation">
        <div className="row heading">
          <div className="col-sm-2 col-md-1 col-xs-3 heading-avatar">
            <div className="heading-avatar-icon">
              <img src="https://bootdey.com/img/Content/avatar/avatar6.png" />
            </div>
          </div>
          <div className="col-sm-8 col-xs-7 heading-name">
            <a className="heading-name-meta">name</a>
            <span className="heading-online">Online</span>
          </div>
          <div className="col-sm-1 col-xs-1  heading-dot pull-right">
            <i
              className="fa fa-ellipsis-v fa-2x  pull-right"
              aria-hidden="true"
            ></i>
          </div>
        </div>
        <Message type={"sender"} />
        <Message type={"receiver"} />
      </div>
      <div className="row reply">
        <div className="col-sm-1 col-xs-1 reply-emojis">
          <i className="fa fa-smile-o fa-2x"></i>
        </div>
        <div className="col-sm-9 col-xs-9 reply-main">
          <textarea className="form-control" rows="1" id="comment"></textarea>
        </div>
        <div className="col-sm-1 col-xs-1 reply-recording">
          <i className="fa fa-microphone fa-2x" aria-hidden="true"></i>
        </div>
        <div className="col-sm-1 col-xs-1 reply-send">
          <i className="fa fa-send fa-2x" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  );
};

export default ChatHistory;
