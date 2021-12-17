import React from "react";

const ChatForm = () => {
  return (
    <div className="chat-message clearfix">
      <div className="input-group mb-0">
        <input
          type="text"
          className="form-control"
          placeholder="Enter text here..."
        />
        <div className="input-group-prepend">
          <span className="input-group-text">
            <i className="fa fa-send"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ChatForm;
