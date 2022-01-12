import React from "react";

const User = ({ name }) => {
  return (
    <div className="row heading">
      <div className="col-sm-2 col-xs-2 heading-avatar">
        <div className="heading-avatar-icon">
          <img src="https://bootdey.com/img/Content/avatar/avatar1.png" />
        </div>
      </div>
      <div className="col-7 heading-dot  pull-right user">
        <p>{name}</p>

        <i
          className="fa fa-ellipsis-v fa-2x  pull-right"
          aria-hidden="true"
        ></i>
      </div>
      <div className="col-sm-2 col-xs-2 heading-compose  pull-right">
        <i className="fa fa-comments fa-2x  pull-right" aria-hidden="true"></i>
      </div>
    </div>
  );
};

export default User;
