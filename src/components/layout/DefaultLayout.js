import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import services from "../../services";
import { credential } from "../../services/request";
const DefaultLayout = ({ children }) => {
  const [error, setError] = useState("");
  const history = useHistory();

  useEffect(() => {
    const execute = async () => {
      try {
        const response = await services.getMe();
        const me = response.data.data;
        if (!me) setError("unauthorized");
        const meStore = localStorage.getItem("me");
        const username = localStorage.getItem("username");
        if (!meStore && !username) {
          localStorage.setItem("me", me._id);
          localStorage.setItem("username", me.username);
        }
      } catch (error) {
        setError(error.response);
      }
    };
    execute();
  }, []);

  useEffect(() => {
    if (error) {
      credential.removeToken();
      history.push("/");
    }
  }, [history, error]);

  return (
    <div className="container app">
      <div className="row app-one">{children}</div>
    </div>
  );
};

export default DefaultLayout;
