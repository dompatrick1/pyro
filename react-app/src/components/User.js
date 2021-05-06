import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import LogoutButton from "./auth/LogoutButton"
import Player from './Player/Player'

function User() {
  const [user, setUser] = useState({});
  // Notice we use useParams here instead of getting the params
  // From props.
  const { userId }  = useParams();

  useEffect(() => {
    if (!userId) {
      return
    }
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      const user = await response.json();
      setUser(user);
    })();
  }, [userId]);

  if (!user) {
    return null;
  }

  return (
    <ul>
      <li>
        <strong>Username</strong> {user.username}
      </li>
      <LogoutButton/>
      <Player/>
    </ul>
  );
}
export default User;
