import React from "react";

const SideContainer = ({ children }) => {
  return (
    <div className="col-sm-4 side">
      <div className="side-top">{children}</div>
    </div>
  );
};

export default SideContainer;
