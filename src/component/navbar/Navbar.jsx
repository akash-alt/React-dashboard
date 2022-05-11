import React from 'react'
import "./navbar.scss"
import SearchIcon from '@mui/icons-material/Search';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LanguageIcon from '@mui/icons-material/Language';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ZoomInMapOutlinedIcon from '@mui/icons-material/ZoomInMapOutlined';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='wrapper'>
                <div className='search'>
                    <input type="text" placeholder="Search here" />
                    <span ><SearchIcon /> </span>
                </div>
                <div className='items'>
                    <LanguageIcon /> English
                </div>
                <div className='items'>
                    <DarkModeOutlinedIcon />
                </div>
                <div className='items'>
                    <ZoomInMapOutlinedIcon />
                </div>
                <div className='items'>
                    <ChatBubbleOutlineOutlinedIcon />
                    <div className='counter'>1</div>
                </div>
                <div className='items'>
                    <NotificationsNoneOutlinedIcon />
                    <div className='counter'>2</div>
                </div>
                <div className='items'>
                    <ListAltOutlinedIcon />
                </div>
                <div >
                    <img
                        className='image'
                        alt='img'
                        src='https://images.unsplash.com/photo-1542550371427-311e1b0427cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
                    />
                </div>

            </div>
        </div>
    )
}

export default Navbar