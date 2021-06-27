import React from 'react'


import {Avatar} from '@material-ui/core';
import './stories.styles.css';

const Stories = ({ image, profileSrc, title}) => {
    return (
        <div 
            className='stories'
            style={{
                backgroundImage: `url(${image})`
            }}
            height={200}
            width={200}>
            <Avatar className="story__avatar" src={profileSrc}/>
            <h3>{title}</h3>
        </div>
    )
}

export default Stories;
// {<img src={require('/images/image-name.png')} />}
