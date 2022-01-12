/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link } from "react-router-dom";

const UserItem = ({ user, avt, setSearch, onSelectingUser }) => {
  return (
    <div
      className="row sideBar-body"
      onClick={() => {
        onSelectingUser(user);
        setSearch("");
      }}
    >
      <div className="col-sm-3 col-xs-3 sideBar-avatar">
        <div className="avatar-icon">
          <img
            src={`https://bootdey.com/img/Content/avatar/avatar${avt}.png`}
          />
        </div>
      </div>
      <div className="col-sm-9 col-xs-9 sideBar-main">
        <div className="row">
          <div className="col-sm-8 col-xs-8 sideBar-name">
            {user && <span className="name-meta">{user.username}</span>}
          </div>
          <div className="col-sm-4 col-xs-4 pull-right sideBar-time">
            <span className="time-meta pull-right">18:18</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
