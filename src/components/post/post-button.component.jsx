import React from 'react'

import './post-button.styles.css'

const PostButton = ({placeholder}) => {
    return (
        <div className="post__button">
            <input 
                className="post__search" 
                type="text"
                placeholder={placeholder}
            />
        </div>
    )
}

export default PostButton;
