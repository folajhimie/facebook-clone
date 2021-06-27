import React from 'react'
import StoryReel from '../story-reel/story-reel.component';
import MessageSender from '../../components/message-sender/message-sender.component'
import Online from '../../components/online/online.component';


import './feed.styles.css'

const Feed = () => {
    return (
        <div className='feed'>
            <StoryReel/>
            <MessageSender/>
            <Online/>
            
        </div>
    )
}

export default Feed;
