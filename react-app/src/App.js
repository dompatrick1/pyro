import React, { useState, useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import Main from "./components/Main/Main";
import { authenticate } from "./store/session";
import Home from "./components/home/home"
import Player from "./components/Player/Player"
import "./components/Main/main.css"
import 'font-awesome/css/font-awesome.min.css';

function App() {
  // const [authenticated, setAuthenticated] = useState(false);
  const dispatch = useDispatch()
  const [loaded, setLoaded] = useState(false);
  const selectAlbumId = useSelector(state => state.player.albumId)

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
          <Main selectAlbumId={selectAlbumId}/>
          <div className="mainPlayer">
            <Player />
          </div>
        </ProtectedRoute>
        <Route path="/" exact={true}>
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
