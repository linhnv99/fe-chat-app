import React from "react";
import { Link } from "react-router-dom";

const ChatItem = ({ user, avt }) => {
  return (
    <Link to={`/chat/${user._id}`}>
      <li className="clearfix">
        <img
          src={`https://bootdey.com/img/Content/avatar/avatar${avt}.png`}
          alt="avatar"
        />
        <div className="about">
          <div className="name">{user.username}</div>
          <div className="status">
            {" "}
            <i className="fa fa-circle offline"></i> left 7 mins ago{" "}
          </div>
        </div>
      </li>
    </Link>
  );
};

export default ChatItem;
