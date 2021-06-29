import React from 'react';

import Avatar from '@material-ui/core/Avatar';
import PublicSharpIcon from '@material-ui/icons/PublicSharp';
import MoreHorizSharpIcon from '@material-ui/icons/MoreHorizSharp';
import { Link } from 'react-router-dom';
import snap13 from '../../images/snap13.png';
import IconButton from '@material-ui/core/IconButton';
import Profile from '../../images/profileSource.png'
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ArrowDropDownRoundedIcon from '@material-ui/icons/ArrowDropDownRounded';
import ShareIcon from '@material-ui/icons/Share';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import CameraAltOutlinedIcon from '@material-ui/icons/CameraAltOutlined';
import GifOutlinedIcon from '@material-ui/icons/GifOutlined';

import './custom-post.styles.css';


const CustomPost = () => {
    return (
        <div className="custom__post">
            <div className="custom__first">
                <div className="custom__one">
                    <Avatar alt="Harvey Specter" src={snap13} className="avatar"/>
                    <div className="custom__name">
                       
                        <Link>
                            <p className="name" style={{cursor: "pointer", color:"black"}}>Harvey Specter</p>
                        </Link>
                        <div className="custom__timing">
                            <Link style={{color: "gray", display: "flex", justifyContent: "space-between", width: "50px"}}>
                                <p className="time" style={{textDecoration: "underline", fontSize: "16.5px"}}> 5h</p>
                                •<PublicSharpIcon fontSize="small" style={{ position: "relative", bottom:"-3px"}} />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="custom__two">
                    <IconButton>
                        <MoreHorizSharpIcon />
                    </IconButton>
                </div>              
            </div>
            <div className="custom__second">
                <span className="second"> 
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                </span>
            </div>
            <div className="custom__third">
                <img src='https://scontent.flos8-1.fna.fbcdn.net/v/t31.18172-8/277223_390590191004314_1744421142_o.jpg?_nc_cat=106&ccb=1-3&_nc_sid=9267fe&_nc_ohc=XhC2r39CzNkAX-HBRZo&_nc_oc=AQmTfsodhHCoPvOIsSkX7BLMO5FdGgpWIq4uWfw_tl5XOZ0rpunQbL513BP2BIviIEY&tn=Dt7nVYp63ODp6DJX&_nc_ht=scontent.flos8-1.fna&oh=b34b44a8ec666b0c0d485aebc5aa97bf&oe=60DE6237' alt="" />
            </div>
            <div className="custom__fourth">
                <div className="font" style={{display: "flex", justifyContent: "space-between"}}>
                    <ThumbUpOutlinedIcon style={{color: "dodgerblue", cursor:"pointer"}} fontSize="small" className='thumb'/>
                    <FavoriteBorderOutlinedIcon style={{color: "indianred", cursor:"pointer"}} fontSize="small" className='love'/>
                    <p className="paragraph" style={{paddingLeft:"10px"}}> 327 </p>
                </div>
                <div className="letter" style={{display: "flex", justifyContent: "space-between"}}>
                    <p className="comments" style={{color: "gray"}}> 28 Comments</p>
                    <p className="shares" style={{color: "gray"}}> 2 Shares </p>
                </div>
            </div>
            <div className="fifth">
                <div className="carry">
                    <div className="one" style={{display: "flex", cursor:"pointer"}}>
                        <ThumbUpOutlinedIcon style={{color: "gray", cursor:"pointer"}} fontSize="medium" className='thumb'/>
                        <p style={{color: "gray", cursor:"pointer", marginLeft: "15px"}}> Like</p>
                    </div>
                    <div className="two"  style={{display: "flex", cursor:"pointer"}}>
                        <ChatBubbleOutlineIcon style={{color: "gray", cursor:"pointer"}} fontSize="medium"/>
                        <p style={{color: "gray", cursor:"pointer", marginLeft: "12px"}}> Comment </p>
                    </div>
                    <div className="three"  style={{display: "flex", cursor:"pointer"}}>
                        <ShareIcon style={{color: "gray", cursor:"pointer"}} fontSize="medium"/>                       
                       <p style={{color: "gray", cursor:"pointer", marginLeft: "15px"}}> Share </p>
                    </div>

                </div>
                
                <div className="four" >
                    <Avatar src={Profile} className="shine"/>
                    <ArrowDropDownRoundedIcon className="bolt"/>
                </div>
            </div>
            <div className="sixth">
                <Avatar  src={Profile}/>
                <input type="text" placeholder="Write a Comment..." className="bash"/>
                <button style={{display:"none"}}></button>
            </div>
            <div className="emoji">
                <SentimentSatisfiedIcon fontSize="small" style={{color:"gray"}}/>
                <CameraAltOutlinedIcon fontSize="small" style={{color:"gray"}}/>
                <GifOutlinedIcon fontSize="small" style={{color:"gray"}}/>
            </div>
        </div>
    )
}

export default CustomPost;
