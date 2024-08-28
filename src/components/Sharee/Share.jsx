import React from 'react'
import './Share.css'
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import RoomIcon from '@mui/icons-material/Room';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

const Share = () => {
  return (
    <div className="share">
        <div className="shareWrapper">
            <div className="shareTop">
                <img className='shareProfileImg' src='/assets/person/1.jpeg' alt=''></img>
                <input
                  placeholder='what is in your mind?'
                  className='shareInput'
                />
            </div>
            <hr className='shareHr'></hr>
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <PermMediaIcon htmlColor="red " className='shareIcon'/>
                        <span className='shareOptionsText'>Photo or video</span>
                    </div>

                    <div className="shareOption">
                        <LabelIcon htmlColor="blue" className='shareIcon'/>
                        <span className='shareOptionsText'>Tag</span>
                    </div>

                    <div className="shareOption">
                        <RoomIcon htmlColor="green" className='shareIcon'/>
                        <span className='shareOptionsText'>Location</span>
                    </div>

                    <div className="shareOption">
                        <EmojiEmotionsIcon htmlColor="yellow" className='shareIcon'/>
                        <span className='shareOptionsText'>Feelings</span>
                    </div>
                </div>
                <button className='shareButton'>Share</button>
            </div>

        </div>
    </div>
  )
}

export default Share