import React from 'react';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import EventAvailableOutlinedIcon from '@material-ui/icons/EventAvailableOutlined';
import BookmarksOutlinedIcon from '@material-ui/icons/BookmarksOutlined';
import LocalHotelIcon from '@material-ui/icons/LocalHotel';
import GradeRoundedIcon from '@material-ui/icons/GradeRounded';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import MissedVideoCallRoundedIcon from '@material-ui/icons/MissedVideoCallRounded';
import ProfileSrc from '../../images/profile.png'

import SideBarRow from '../sidebar-row/sidebar-row.component'
import './sidebar.styles.css';



const SideBar = () => {
    return (
        <div className="sidebar">
            <SideBarRow 
                src={ProfileSrc} 
                title="Shodipo Folajimi"
                fontSize="10px"
            />
            <SideBarRow 
                Icon={LocalHotelIcon} 
                title="Hotel Reservation"
            />
            <SideBarRow 
                Icon={PeopleAltOutlinedIcon} 
                title="Friends"
            />
            <SideBarRow 
                Icon={BookmarksOutlinedIcon } 
                title="Saved"/>
            <SideBarRow 
                Icon={EmojiFlagsIcon} 
                title="Pages"
            />
            <SideBarRow 
                Icon={EventAvailableOutlinedIcon} 
                title="Events"/>
            <SideBarRow 
                Icon={GradeRoundedIcon} 
                title="Favorites"/>
            <SideBarRow 
                Icon={MissedVideoCallRoundedIcon} 
                title="Video Call"
            />
            <SideBarRow 
                Icon={ExpandMoreIcon} 
                title="See More"
            />
        </div>
    )
}

export default SideBar;


