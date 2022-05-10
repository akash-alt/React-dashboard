import React from 'react';
import "./sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='top'>
                <span className='logo'>Dashboard</span>
            </div>
            <hr />
            <div className='center'>
                <ul>
                    <p className='title'>Main</p>
                    <li>
                        <DashboardIcon /> Dashboard
                    </li>
                    <li>
                        <PersonIcon /> User
                    </li>
                    <li>
                        <ProductionQuantityLimitsIcon /> Products
                    </li>
                    <li>
                        <Inventory2Icon /> Orders
                    </li>
                    <p className='title'>USEFUL</p>
                    <li>
                        <LocalShippingIcon /> Delivery
                    </li>
                    <li>
                        <QueryStatsIcon /> Stats
                    </li>
                    <li>
                        <CircleNotificationsIcon /> Notifications
                    </li>
                    <p className='title'>Service</p>
                    <li>
                        <SettingsSystemDaydreamIcon /> System Health
                    </li>
                    <li>
                        <PsychologyIcon /> Logs
                    </li>
                    <li>
                        <SettingsIcon /> Settings
                    </li>
                    <li>
                        <AccountBoxIcon /> Profile
                    </li>
                    <li>
                        <LogoutIcon />  Logout
                    </li>
                </ul>
            </div>
            <div>color change</div>
        </div>
    )
}

export default Sidebar