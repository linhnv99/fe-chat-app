/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link } from "react-router-dom";

const ChatItem = ({ room = 1, avt }) => {
  return (
    <Link to={`/chat/${room.id}`}>
      <div className="row sideBar-body">
        <div className="col-sm-3 col-xs-3 sideBar-avatar">
          <div className="avatar-icon">
            {room.type === "GROUP" ? (
              <img src="https://lh3.googleusercontent.com/proxy/z5ERx4PrVRhS7Zt9G-gUbMQ-eRakGL1o-Z7_Yz7SiS26baW47VIp8FwWCZ4CSj1a8PSfTGjDeeIeLfW0-RIQp0bELn2Mo1fQDmwqZselAzKMwEw" />
            ) : (
              <img
                src={`https://bootdey.com/img/Content/avatar/avatar${avt}.png`}
              />
            )}
          </div>
        </div>
        <div className="col-sm-9 col-xs-9 sideBar-main">
          <div className="row">
            <div className="col-sm-8 col-xs-8 sideBar-name">
              <span className="name-meta">
                {room.type === "PAIR" ? room.users[0].username : room.name}
              </span>
            </div>
            <div className="col-sm-4 col-xs-4 pull-right sideBar-time">
              <span className="time-meta pull-right">18:18</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ChatItem;
