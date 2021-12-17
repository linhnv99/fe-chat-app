import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import SignForm from "../../components/Sign/SignForm";
import SignLayout from "../../components/Sign/SignLayout";

import services from "../../apis";

const Login = () => {
  const history = useHistory();
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await services.login(login.username, login.password);
      localStorage.setItem("token", response.data.data.token);
      history.push("/chat")
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  const handleValidation = () => {
    // validate fields
  };

  const onChange = (e, title) => {
    let loginState = login;
    loginState[title] = e.target.value;

    handleValidation();

    setLogin({ ...loginState });
  };

  return (
    <SignLayout>
      <SignForm
        login={login}
        onSubmit={onSubmit}
        onChange={onChange}
        error={error}
      />
    </SignLayout>
  );
};
export default Login;
