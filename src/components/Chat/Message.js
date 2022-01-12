import React from "react";

const Message = ({ type, content }) => {
  return (
    <div className="row message-body">
      <div className={`col-sm-12 message-main-${type}`}>
        <div className={type}>
          <div className="message-text">{content}</div>
          <span className="message-time pull-right">Sun</span>
        </div>
      </div>
    </div>
  );
};

export default Message;
