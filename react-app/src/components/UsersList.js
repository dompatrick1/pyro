import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux"
import Follow from "./follow/Follow"
import { NavLink } from "react-router-dom";



function UsersList() {
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch()


  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/users/");
      const responseData = await response.json();
      setUsers(responseData.users);
    }
    fetchData();
  }, []);

  const userComponents = users.map((user) => {
    return (
      <Follow user={user} />
    );
  });

  return (
    <>
      <h1>User List: </h1>
      <ul>{userComponents}</ul>
    </>
  );
}

export default UsersList;
