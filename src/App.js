import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Chat from "./pages/Chat/MainChat";
import Login from "./pages/Sign/Login";
import SignUp from "./pages/Sign/SignUp";
import DefaultLayout from "./components/layout/DefaultLayout";
import { credential } from "./services/request";

const routes = [
  { path: "/chat", exact: true, component: Chat },
  { path: "/chat/:roomId", exact: true, component: Chat },
];

const PrivateRoute = ({ children, ...rest }) => {
  const token = credential.getToken();

  return (
    <Route {...rest} render={() => (token ? children : <Redirect to="/" />)} />
  );
};

const NotFound = () => {
  return <h1 className="text-center mt-5 ">Page not found</h1>;
};

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/sign-up" component={SignUp} />
        <PrivateRoute>
          <DefaultLayout>
            <Switch>
              {routes.map((r) => (
                <Route
                  key={r.path}
                  path={r.path}
                  exact={r.exact}
                  component={r.component}
                />
              ))}
            </Switch>
          </DefaultLayout>
        </PrivateRoute>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
