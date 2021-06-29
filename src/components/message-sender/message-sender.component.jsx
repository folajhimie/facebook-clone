import React, { useState } from 'react'
import Avatar from '@material-ui/core/Avatar';
// import SearchButton from '../search-button/search-button.component'
import PostButton from '../post/post-button.component'
import SwitchVideoIcon from '@material-ui/icons/SwitchVideo';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import ProfileSrc from '../../images/profileSource.png'
import './message-sender.styles.css'

function MessageSender(){
    const [input, setInput] = useState("")
    const [imageUrl, setImageUrl] = useState("")

    const handleSubmit= event =>{
        event.preventDefault();
    }
    
    return (
        <div className="message__sender">
            <div className="message__top">
                <Avatar src={ProfileSrc} className="input__color"/>
                <form >
                    <PostButton 
                        value={input}
                        onChange={event=> setInput(event.target.value)}
                        placeholder={"What's on your mind"}/>
                    <PostButton 
                        value={imageUrl}
                        onChange={event=> setImageUrl(event.target.value)}
                        placeholder={'Image URL (Optional)'}/>
                    <button onsubmit={handleSubmit} type="submit">Hidden Submit</button>
                </form>
            </div>
            {/* <div className="message__middle"></div> */}
            <div className="message__bottom">
                <div className="message__option">
                    <SwitchVideoIcon style={{color: "red"}}/>
                    <h3>Live Video</h3>
                </div>
                <div className="message__option">
                    <PhotoLibraryIcon style={{color: "rgb(69,189,98)"}}/>
                    <h3>Photo/Video</h3>
                </div>
                <div className="message__option">
                    <SentimentVerySatisfiedIcon style={{color: "orange"}}/>
                    <h3>Feeling/Activity</h3>
                </div>
            </div> 
        </div>
    )
}

export default MessageSender;
