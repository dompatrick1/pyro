import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import LogoutButton from "./auth/LogoutButton"
import "./user.css"


function User() {
  const [user, setUser] = useState({});
  const { userId }  = useParams();
  const IMAGE_FOLDER = process.env.NODE_ENV === 'production' ? '/static' : ''


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
      <div className="socialLinks">
        <a href="https://github.com/dompatrick1" class="fa fa-github"><span >Github</span></a>
        <a href="https://www.linkedin.com/in/dominic-patrick-935781113/" class="fa fa-linkedin"><span class="label">Linkedin</span></a>
        <a href="https://dompatrick1.github.io/" class="portfolio"><span >Portfolio</span></a>
      </div>
      <strong>Welcome,</strong>
      <strong>{user.username}</strong>
      <LogoutButton/>
    </div>
  );
}
export default User;
