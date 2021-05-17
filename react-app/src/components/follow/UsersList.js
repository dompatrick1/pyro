import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux"
import Follow from "./Follow"
import {getFollowsThunk} from "../../store/following"
import {getLastPlayThunk} from "../../store/lastPlay"


function UsersList() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("")
  const sessionUser = useSelector(state => state.session.user)
  const followingList = Object.values(useSelector(state => state.follows))
  const lastPlays = Object.values(useSelector(state => state.lastPlays))
  const albums = Object.values(useSelector(state => state.albums))
  const dispatch = useDispatch()


  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/users/");
      const responseData = await response.json();
      setUsers(responseData.users);
    }
    fetchData();
    dispatch(getFollowsThunk(sessionUser.id))
    dispatch(getLastPlayThunk())
  }, []);

  let allFollowingList = []

   followingList.filter(follow => {
    for (let i = 0; i < users.length; i++) {
      let user = users[i]
      if (user.id === follow.followed_id) {
        allFollowingList.push(user)
      }
    }

  })




  return (
    <div>
      <form>
        <div className="searchInputFieldDiv">
          <input className="searchInputField" type="text" placeholder="Search..." value={searchTerm} onChange={(e) => {setSearchTerm(e.target.value)}}/>
        </div>
          {searchTerm ?
            users.filter(user => {
              if (searchTerm === "") {
                return user
              } else if (user.username.toLowerCase().includes(searchTerm.toLowerCase())) {
                return user
              }
            }).map((user, key) => {
              return (
                <div>
                  <Follow user={user} setSearchTerm={setSearchTerm}/>
                </div>
              )
            })
          : allFollowingList.length > 0 && albums.length > 0 ?
            allFollowingList.map(user => {
              return (
                <div>
                  {lastPlays.filter(lastPlay => lastPlay.userId === user.id).map(play => {
                    return (
                      <>
                      {/* {albums.length > 0 ? */}
                        <p>{albums[play.albumId - 1].title}</p>
                      {/* : null} */}
                      <Follow user={user} />

                      </>
                    )
                  })}
                </div>
              )
            })
          : null}
      </form>
    </div>
  );
}

export default UsersList;
