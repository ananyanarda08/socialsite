import React from 'react'
import './Sidebar.css'
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import GroupIcon from '@mui/icons-material/Group';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import WorkIcon from '@mui/icons-material/Work';
import EventIcon from '@mui/icons-material/Event';
import Closefriend from '../closefriend/Closefriend';
import { Users } from '../../dummyData';
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <ul className="sidebarList">

          <li className="sidebarlistItem"> 
             <RssFeedIcon className='sidebarIcon'/>
             <span className="sidebarListItemText">Feed</span>
          </li>

          <li className="sidebarlistItem"> 
             <ChatIcon className='sidebarIcon'/>
             <span className="sidebarListItemText">Chats</span>
          </li>

          <li className="sidebarlistItem"> 
             <PlayCircleIcon className='sidebarIcon'/>
             <span className="sidebarListItemText">Videos</span>
          </li>

          <li className="sidebarlistItem"> 
             <GroupIcon className='sidebarIcon'/>
             <span className="sidebarListItemText">Groups</span>
          </li>

          <li className="sidebarlistItem"> 
             <BookmarkIcon className='sidebarIcon'/>
             <span className="sidebarListItemText">Bookmark</span>
          </li>

          <li className="sidebarlistItem"> 
             <QuestionMarkIcon className='sidebarIcon'/>
             <span className="sidebarListItemText">Questions</span>
          </li>

          <li className="sidebarlistItem"> 
             <WorkIcon className='sidebarIcon'/>
             <span className="sidebarListItemText">Jobs</span>
          </li>

          <li className="sidebarlistItem"> 
             <EventIcon className='sidebarIcon'/>
             <span className="sidebarListItemText">Events</span>
          </li>

          <li className="sidebarlistItem"> 
             <ChatIcon className='sidebarIcon'/>
             <span className="sidebarListItemText">Courses</span>
          </li> 
        </ul>
        <button className='sidebarButton'>Show More</button>
        <hr className='sidebarHr'/>
        <ul className='sidebarFriendList'>
        
        {Users.map(u=>(
         <Closefriend user={u}/>
        ))}

       
        </ul>
      </div>
    </div>
  )
}

export default Sidebar