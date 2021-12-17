import React from "react";

const SignForm = ({ signUp, login, onSubmit, onChange, error }) => {
  return (
    <form className="card-body cardbody-color p-lg-5" onSubmit={onSubmit}>
      <div className="text-center mb-4">
        <img
          src="https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295397__340.png"
          className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
          width="200px"
          alt="profile"
        />
      </div>
      {error && <p className="text-danger">{error}</p>}
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          id="Username"
          placeholder="username"
          value={signUp ? signUp.username : login ? login.username : ""}
          onChange={(e) => onChange(e, "username")}
        />
      </div>
      <div className="mb-3">
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="password"
          value={signUp ? signUp.password : login ? login.password : ""}
          onChange={(e) => onChange(e, "password")}
        />
      </div>
      {signUp && (
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            id="confirm-password"
            placeholder="confirm password"
            value={signUp ? signUp.confirmPass : ""}
            onChange={(e) => onChange(e, "confirmPass")}
          />
        </div>
      )}
      <div className="text-center">
        <button type="submit" className="btn btn-color px-5 mb-5 w-100">
          {signUp ? "Sign Up" : "Login"}
        </button>
      </div>
      {login && (
        <div className="form-text text-center mb-5 text-dark">
          Not Registered?{" "}
          <a href="#" className="text-dark fw-bold">
            {" "}
            Create an Account
          </a>
        </div>
      )}
    </form>
  );
};

export default SignForm;
