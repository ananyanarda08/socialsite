import React from 'react'
import './TopBar.css'
// import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

const TopBar = () => {
  
  return (
    <div className='topbarContainer'>
      <div className="topbarLeft">
        <span className="logo">
            Lamasocial
        </span>
        </div>
    
        <div className="topbarCenter">
            <div className="searchbar">
           {/* <SearchIcon/> */}
           <input type='search'  placeholder='search for friend, posts or video' className='searchIcon'/>
            </div>
        </div>

        <div className="topbarRight">
            <div className="topbarLinks">
                <a href="/">HomePage</a>
                <a href="timeline">Timeline</a>
            </div>
            <div className="topbarIcon">

                <div className="topbarIconItem">
                <PersonIcon/>
                <span className="topbarIconBadge">1</span>
                </div>

                <div className="topbarIconItem">
                <ChatIcon/>
                <span className="topbarIconBadge">2</span>
                </div>

                <div className="topbarIconItem">
                <NotificationsIcon/>
                <span className="topbarIconBadge">3</span>
                </div>
              

            </div>
            <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
        </div>
    </div>
  )
}

export default TopBar
