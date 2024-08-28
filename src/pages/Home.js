import React from 'react'
import './Home.css'
import TopBar from '../components/TopBar'
import Sidebar from '../components/Sidebar/Sidebar'
import Feed from '../components/feed/Feed'
import Rightbar from '../components/RigthBar/Rightbar'

const Home = () => {
  return (
    <div>
      <TopBar/>

      <div className='homeContainer'>
      <Sidebar/>
      <Feed/>
      <Rightbar/>
      </div>
      
    </div>
  )
}

export default Home