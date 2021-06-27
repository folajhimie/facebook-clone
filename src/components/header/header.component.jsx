import React from 'react'

import { Link } from 'react-router-dom';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import Avatar from '@material-ui/core/Avatar';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontRoundedIcon from '@material-ui/icons/StorefrontRounded';
import SupervisedUserCircleOutlinedIcon from '@material-ui/icons/SupervisedUserCircleOutlined';
import AddIcon from '@material-ui/icons/Add';
import ArrowDropDownRoundedIcon from '@material-ui/icons/ArrowDropDownRounded';
import NotificationsSharpIcon from '@material-ui/icons/NotificationsSharp';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import { ReactComponent as Logo } from '../../assets/facebook.svg';
import SearchButton from '../../components/search-button/search-button.component'
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Profile from '../../images/profileSource.png'



import './header.styles.css';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            isSwitchOn: false,
            isButtonOn: true,
            isLightOn: true,
            isPowerOn: true
        };
    }
    
    render() {
        return (
            <div className="header">
                <div className="header__input">
                    <Link className="logo-container" to='/'>
                        <Logo className="logo"/>
                    </Link>
                    <SearchButton className="logo__search"/>
                </div>
                <div className="header__middle">
                    <Tooltip title="Home">
                        <Link 
                            className={this.state.isSwitchOn ? 'option': 'bank'} 
                            onClick={()=> this.setState({isSwitchOn: !this.state.isSwitchOn})}
                            to='/'>
                            <HomeRoundedIcon fontSize="medium"/> 
                        </Link>
                    </Tooltip>
                    <Tooltip title="Subscription">
                        <Link 
                            className={this.state.isButtonOn ? 'option': 'bank'} 
                            onClick={()=> this.setState({isButtonOn: !this.state.isButtonOn})}
                            to='/'>
                            <SubscriptionsOutlinedIcon fontSize="medium" />
                        </Link>
                    </Tooltip>
                    <Tooltip title="Store">
                        <Link 
                            className={this.state.isLightOn ? 'option': 'bank'} 
                            onClick={()=> this.setState({isLightOn: !this.state.isLightOn})}
                            to='/'>
                            <StorefrontRoundedIcon fontSize="medium"/>
                        </Link>
                    </Tooltip>
                    <Tooltip title="Supervisor">
                        <Link 
                            className={this.state.isPowerOn ? 'option': 'bank'} 
                            onClick={()=> this.setState({isPowerOn: !this.state.isPowerOn})}
                            to='/'>
                            <SupervisedUserCircleOutlinedIcon fontSize="medium" /> 
                        </Link>
                    </Tooltip>
                    <div className="line"></div>
                </div>
                <div className="header__right">
                    <Link className="header__last" to='/'>
                        <div className="header__info">
                            <Avatar 
                                alt="Gold" 
                                src={Profile}
                                className="pour"/>
                            <h4 className="letter"> Folajimi </h4>
                        </div>
                    </Link> 
                    <Tooltip title="Create">
                        <Link className="header__option" to='/'>
                            <IconButton>
                                <AddIcon className="icon"/>
                            </IconButton>
                        </Link>
                    </Tooltip>
                    <Tooltip title="Messanger">
                     <Link className="header__option" to='/'>
                            <IconButton>
                                <ChatBubbleIcon className="icon"/>
                            </IconButton>
                        </Link>
                    </Tooltip>
                    <Tooltip title="Notification">
                        <Link className="header__option" to='/'>
                            <IconButton>
                                <NotificationsSharpIcon className="icon"/>
                            </IconButton>
                        </Link>
                    </Tooltip>
                    <Tooltip title="Account">
                        <Link className="header__option" to='/'>
                            <IconButton>
                                <ArrowDropDownRoundedIcon className="icon"/>
                            </IconButton>
                        </Link>
                    </Tooltip>
                </div>
            </div>
            
        );
    }
}

export default Header;
