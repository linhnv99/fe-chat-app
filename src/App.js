import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Chat from "./pages/Chat/Chat";
import Login from "./pages/Sign/Login";
import SignUp from "./pages/Sign/SignUp";
import { io } from "socket.io-client";
import { useEffect } from "react";

function App() {
  const socket = io("http://localhost:3333");
  useEffect(() => {
    socket.on("connect", () => {
      console.log(socket.id); 
    });
    
  });
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/sign-up" component={SignUp} />
        <Route exact path="/chat" component={Chat} />
        <Route exact path="/chat/:id" component={Chat} />
        <Route
          render={() => <h1 className="text-center mt-5 ">Page not found</h1>}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
