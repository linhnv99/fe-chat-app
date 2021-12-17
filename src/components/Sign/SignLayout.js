import React from "react";

const SignLayout = ({ children }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h2 className="text-center text-dark mt-5">Bird Chat</h2>
          <div className="card my-5">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default SignLayout;
