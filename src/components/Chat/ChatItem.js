/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link } from "react-router-dom";

const ChatItem = ({ room, avt }) => {
  return (
    <Link to={`/chat/${room.id}`}>
      <div className="row sideBar-body">
        <div className="col-sm-3 col-xs-3 sideBar-avatar">
          <div className="avatar-icon">
            {room && room.type === "GROUP" && (
              <img
                src={`https://thumbs.dreamstime.com/b/linear-group-icon-customer-service-outline-collection-thin-line-vector-isolated-white-background-138644548.jpg`}
              />
            )}
            {room && room.type === "PAIR" && (
              <img
                src={`https://bootdey.com/img/Content/avatar/avatar${avt}.png`}
              />
            )}
          </div>
        </div>
        <div className="col-sm-9 col-xs-9 sideBar-main">
          <div className="row">
            <div className="col-sm-8 col-xs-8 sideBar-name">
              {room && (
                <div>
                  <span className="name-meta">
                    {room.name ? room.name : "My team"}
                  </span>
                  <small className="d-block">{room.lastMessage}</small>
                </div>
              )}
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
