import React from 'react';
import Photo1 from '../../images/photo-1.png'
import Photo2 from '../../images/photo-2.png'
import Photo7 from '../../images/photo-7.png'
import Photo6 from '../../images/photo-6.png'
import Photo5 from '../../images/photo-5.png'
import Apple from '../../images/apple.png';
import RangeRover from '../../images/rangerover.png';
import StarBuck from '../../images/starBuck.png';
import Status from '../../images/status.png';
import TikTok from '../../images/TikTok.png'


import Stories from '../stories/stories.component'

import './story-reel.styles.css';

const storyReel = () => {
    return (
        <div className='storyReel'>
            <Stories
                image={Apple}
                profileSrc={Photo1}
                title="Justin Smith"
            />
            <Stories
                image={Status}
                profileSrc={Photo2}
                title="Kelly Rowland"
            />
            <Stories
                image={TikTok}
                profileSrc={Photo7}
                title="Lauren Phillips"
            />
            <Stories
                image= {RangeRover}
                profileSrc={Photo5}
                title="Jennifer Lawrence"
            />
            <Stories
                image={StarBuck}
                profileSrc= {Photo6}
                title="Bruce Jackman"
            />
            
        </div>
    )
}

export default storyReel;

// {<img src={require('/images/image-name.png')} />}
