import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import LogoutButton from "./auth/LogoutButton"
import "./user.css"


function User() {
  const [user, setUser] = useState({});
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
    <div className="userWelcome">
      <strong>Welcome,</strong>
      <strong>{user.username}</strong>
      <LogoutButton/>
    </div>
  );
}
export default User;
