import React from 'react'
import './Rigthbar.css'
import { Users } from '../../dummyData'
import Online from '../../online/Online'

const Rightbar = ({profile}) => {

  const HomeRightbar = () =>{
    return 
    <>
     <div className="birthdayContainer">
          <img className='birthdayImg' src="assets/gift.png" alt="" />
          <span className='birthdayText'>
            <b>Kash</b> and <b>other friends</b> have a birthday today.
          </span>
        </div>
        <img className='rightbarAd' src="assets/ad.png" alt="" />
           <h4 className="rightbarTitle">Online friends</h4>
           <ul className="rightbarFriendList">
          
          {Users.map(u=>(
            <Online  key={u.id} user={u}/>
          ))}
           </ul>
    </>
}

  const ProfileRightBar = () => {
    return  (
    <>
    <div className="rightbarTitle">User Information</div>
    <div className="rightbarInfo">
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">city:</span>
        <span className=
        "rightbarInfoKey">New York</span>
      </div>

      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">From:</span>
        <span className="rightbarInfoKey">Madrid</span>
      </div>

      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">Relationship</span>
        <span className="rightbarInfoKey">Single</span>
      </div> 
    </div>
{/* ........ */}
    <div className="rightbarTitle">User Friends</div>
    <div className="rightbarMain">

    <div className="rightbarFollowings">
      <img src="assets/person/1.jpeg" alt="" className='rightbarFollowingImg' />
         <p className="rightbarFollowingName">
          john 
         </p>
    </div>

    <div className="rightbarFollowings">
      <img src="assets/person/2.jpeg" alt="" className='rightbarFollowingImg' />
         <p className="rightbarFollowingName">
          john 
         </p>
    </div>

    <div className="rightbarFollowings">
      <img src="assets/person/3.jpeg" alt="" className='rightbarFollowingImg' />
         <p className="rightbarFollowingName">
          john 
         </p>
    </div>

    <div className="rightbarFollowings">
      <img src="assets/person/4.jpeg" alt="" className='rightbarFollowingImg' />
         <p className="rightbarFollowingName">
          john 
         </p>
    </div>

    <div className="rightbarFollowings">
      <img src="assets/person/5.jpeg" alt="" className='rightbarFollowingImg' />
         <p className="rightbarFollowingName">
          john 
         </p>
    </div>

    <div className="rightbarFollowings">
      <img src="assets/person/6.jpeg" alt="" className='rightbarFollowingImg' />
         <p className="rightbarFollowingName">
          john 
         </p>
    </div>
           
    </div>
    </> 
    )
  }
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
       <ProfileRightBar/> 
      </div>
    </div>
  )
}

export default Rightbar