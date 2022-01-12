import React from "react";

const SideContainer = ({ children }) => {
  return (
    <div className="col-sm-4 side" style={{ borderRight: "1px solid #ddd" }}>
      <div className="side-top">{children}</div>
    </div>
  );
};

export default SideContainer;
