import React from "react";

const Message = ({ type }) => {
  return (
    <div className="row message-body">
      <div className={`col-sm-12 message-main-${type}`}>
        <div className={type}>
          <div className="message-text">Hi, what are you doing?!</div>
          <span className="message-time pull-right">Sun</span>
        </div>
      </div>
    </div>
  );
};

export default Message;
