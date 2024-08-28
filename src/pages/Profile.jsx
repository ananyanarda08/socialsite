import React from 'react'
import './profile.css'
import TopBar from '../components/TopBar'
import Sidebar from '../components/Sidebar/Sidebar'
import Feed from '../components/feed/Feed'
import Rightbar from '../components/RigthBar/Rightbar'

const Profile = () => {
  return (
    <>
      <TopBar/>
      <div className="profile">
      <Sidebar/>
      <div className="profileRight">
      <div className="profileRightTop">
        <img className="profileCoverImg" src="assets/post/3.jpeg" alt="" />
        <img className="profileUserImg" src="assets/person/7.jpeg" alt="" />
      </div>

      <div className="profileRightBottom">
      <Feed/>
     
      <Rightbar/>
      </div>
      </div>
      </div>
    </>
  )
}

export default Profile
