import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux"
import Follow from "./follow/Follow"
import {getFollowsThunk} from "../store/following"
import {getLastPlayThunk} from "../store/lastPlay"
import {getPlayerAlbum} from "../store/player"
import "./follow/follow.css"



function UsersList() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("")
  const sessionUser = useSelector(state => state.session.user)
  const followingList = Object.values(useSelector(state => state.follows))
  const lastPlays = Object.values(useSelector(state => state.lastPlays))
  const albums = Object.values(useSelector(state => state.albums))
  const IMAGE_FOLDER = process.env.NODE_ENV === 'production' ? '/static' : ''
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

  function exitSearch(e) {
    e.preventDefault()
    setSearchTerm("")
  }

  function selectAlbum(e, id) {
    e.preventDefault()
    dispatch(getPlayerAlbum(id))

  }


  return (
    <div>
      <form>
        <div className="searchFriendsDiv">
          <input className="searchFriendsInputField" type="text" placeholder="Search Friends..." value={searchTerm} onChange={(e) => {setSearchTerm(e.target.value)}}/>
          <button onClick={e => exitSearch(e)}>x</button>
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
                <div className="friendSearchReturn">
                  <Follow user={user} setSearchTerm={setSearchTerm}/>
                </div>
              )
            })
          : allFollowingList.length > 0 && albums.length > 0 ?
          <div>
            <h2 className="friendsText">Active Friends:</h2>
              {allFollowingList.map(user => {
                return (
                  <div >
                    {lastPlays.filter(lastPlay => lastPlay.userId === user.id).map(play => {
                      return (
                        <div className="followingContainer">
                          <div className="lastPlayContainer">
                            <button className="followLastPlayButton" onClick={e => selectAlbum(e, albums[play.albumId - 1].id)}>
                              <img className="followImage" src={`${IMAGE_FOLDER}${albums[play.albumId - 1].image}`} alt={albums[play.albumId - 1].image}></img>
                            </button>
                            <button className="after" onClick={e => selectAlbum(e, albums[play.albumId - 1].id)}><i class="fa fa-play"></i></button>
                          </div>
                          <div className="followInfoContainer">
                            <p className="lastListenText">Last Listen:</p>
                            <p className="lastListenAlbumTitle">{albums[play.albumId - 1].title}</p>
                            <Follow user={user} />
                          </div>

                        </div>
                      )
                    })}
                  </div>
                )
              })}
          </div>
          : null}
      </form>
    </div>
  );
}

export default UsersList;
