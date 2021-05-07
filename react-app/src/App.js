import React, { useState, useEffect } from "react";
import { useDispatch} from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import Main from "./components/Main/Main";
// import { authenticate } from "./services/auth";
import { authenticate } from "./store/session";
import Home from "./components/home/home"

function App() {
  // const [authenticated, setAuthenticated] = useState(false);
  const dispatch = useDispatch()
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async() => {
      await dispatch(authenticate())
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <Switch>
        <ProtectedRoute path="/users/:userId" exact={true} >
          <Main />
        </ProtectedRoute>
        <Route path="/" exact={true}>
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
