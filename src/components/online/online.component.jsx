import React from 'react';
import VideoCallRoundedIcon from '@material-ui/icons/VideoCallRounded';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Carousel from 'react-elastic-carousel';
import Snap1 from '../../images/snap1.png';
import Snap3 from '../../images/snap2.png';
import Snap2 from '../../images/snap3.png';
import Snap4 from '../../images/snap4.png';
import Snap5 from '../../images/snap5.png';
import Snap6 from '../../images/snap6.png';
import Snap7 from '../../images/snap7.png';
import Snap8 from '../../images/snap8.png';
import Snap9 from '../../images/snap9.png';
import Snap10 from '../../images/snap10.png';
import Snap11 from '../../images/snap11.png';
import Snap12 from '../../images/snap12.png';
import Snap13 from '../../images/snap13.png';
import Snap14 from '../../images/snap14.png';
import Photo1 from '../../images/photo-1.png'

import './online.styles.css';

// const breakPoints = [
//     { width: 340, itemsToShow: 4},
//     { width: 370, itemsToShow: 5},
//     { width: 380, itemsToShow: 6 },
//     { width: 800, itemsToShow: 7}
// ];

const StyledBadge = withStyles((theme) => ({
    badge: {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: '$ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
    '0%': {
        transform: 'scale(.8)',
        opacity: 1,
    },
    '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
    },
    },
}))(Badge);
  
// const SmallAvatar = withStyles((theme) => ({
//     root: {
//       width: 22,
//       height: 22,
//       border: `2px solid ${theme.palette.background.paper}`,
//     },
// }))(Avatar);
  
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        // margin: theme.spacing(-1),
        paddingTop: '15px',
        display: 'flex',
        justifyContent: 'space-around',
        marginLeft: '10px',

      },
      
    },
    
}));

const Online = () => {
    const classes = useStyles();
    return (
        <div className="online">
            <div className="online__top">
                <VideoCallRoundedIcon className="video"/>
                <h2> Create Room </h2>
            </div>
            <div className={classes.root}>
                <div className="styling">
                <Carousel itemsToScroll={2} itemsToShow={6} className="undo">
                <StyledBadge
                    overlap="circle"
                    anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                    variant="dot"
                >
                    <Avatar src={Photo1} className="hello" alt="Remy Sharp" />
                </StyledBadge>
                <StyledBadge
                    overlap="circle"
                    anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                    variant="dot"
                >
                    <Avatar className="hello" alt="Remy Sharp" src={Snap2} />
                </StyledBadge>
                <StyledBadge
                    overlap="circle"
                    anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                    variant="dot"
                >
                    <Avatar className="hello" alt="Remy Sharp" src={Snap3} />
                </StyledBadge>
                <StyledBadge
                    overlap="circle"
                    anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                    variant="dot"
                >
                    <Avatar className="hello" alt="Remy Sharp" src={Snap4} />
                </StyledBadge>
                <StyledBadge
                    overlap="circle"
                    anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                    variant="dot"
                >
                    <Avatar className="hello" alt="Remy Sharp" src={Snap5} />
                </StyledBadge>
                <StyledBadge
                    overlap="circle"
                    anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                    variant="dot"
                >
                    <Avatar className="hello" alt="Remy Sharp" src={Snap6} />
                </StyledBadge>
                <StyledBadge
                    overlap="circle"
                    anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                    variant="dot"
                >
                    <Avatar className="hello" alt="Remy Sharp" src={Snap7} />
                </StyledBadge>
                <StyledBadge
                    overlap="circle"
                    anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                    variant="dot"
                >
                    <Avatar className="hello" alt="Remy Sharp" src={Snap8} />
                </StyledBadge>
                <StyledBadge
                    overlap="circle"
                    anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                    variant="dot"
                >
                    <Avatar className="hello" alt="Remy Sharp" src={Snap9}/>
                </StyledBadge>
                <StyledBadge
                    overlap="circle"
                    anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                    variant="dot"
                >
                    <Avatar className="hello" alt="Remy Sharp" src={Snap10}/>
                </StyledBadge>
                <StyledBadge
                    overlap="circle"
                    anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                    variant="dot"
                >
                    <Avatar className="hello" alt="Remy Sharp" src={Snap11} />
                </StyledBadge>
                <StyledBadge
                    overlap="circle"
                    anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                    variant="dot"
                >
                    <Avatar className="hello" alt="Remy Sharp" src={Snap12} />
                </StyledBadge>
                <StyledBadge
                    overlap="circle"
                    anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                    variant="dot"
                >
                    <Avatar className="hello" alt="Remy Sharp" src={Snap13}/>
                </StyledBadge>
                <StyledBadge
                    overlap="circle"
                    anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                    variant="dot"
                >
                    <Avatar className="hello" alt="Remy Sharp" src={Snap14} />
                </StyledBadge>
                <StyledBadge
                    overlap="circle"
                    anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                    variant="dot"
                >
                    <Avatar className="hello" alt="Remy Sharp" src={Snap1} />
                </StyledBadge>
                </Carousel>
                </div>
            </div>
        </div>
    )
}

export default Online;
