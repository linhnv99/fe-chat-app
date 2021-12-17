import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import SignForm from "../../components/Sign/SignForm";
import SignLayout from "../../components/Sign/SignLayout";

import services from "../../apis";

const SignUp = () => {
  const history = useHistory();

  const [signUp, setSignUp] = useState({
    username: "",
    password: "",
    confirmPass: "",
  });
  const [error, setError] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await services.signUp(signUp.username, signUp.password);
      history.push("/login");
      console.log("Success");
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  const handleValidation = () => {
    // validate fields
  };

  const onChange = (e, title) => {
    console.log("title: ", e.target.value);
    let signUpState = signUp;
    signUpState[title] = e.target.value;

    handleValidation();

    setSignUp({ ...signUpState });
  };

  return (
    <SignLayout>
      <SignForm
        signUp={signUp}
        onSubmit={onSubmit}
        onChange={onChange}
        error={error}
      />
    </SignLayout>
  );
};
export default SignUp;
