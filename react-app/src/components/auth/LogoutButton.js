import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/session";
import {getPlayerAlbum} from "../../store/player"
import "../user.css"

const LogoutButton = () => {
  const dispatch = useDispatch();
  const onLogout = async (e) => {
    await dispatch(logout());
    dispatch(getPlayerAlbum(0))
  };

  return <button className="logoutButton" onClick={onLogout}>Logout</button>;
};

export default LogoutButton;
