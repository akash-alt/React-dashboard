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
                    <p className='title'>MAIN</p>
                    <li>
                        <DashboardIcon className='icon' /> <span>  Dashboard</span>
                    </li>
                    <p className='title'>LIST</p>
                    <li>
                        <PersonIcon className='icon' /><span>  User</span>
                    </li>
                    <li>
                        <ProductionQuantityLimitsIcon className='icon' /><span>  Product</span>
                    </li>
                    <li>
                        <Inventory2Icon className='icon' /><span>Orders</span>
                    </li>
                    <p className='title'>USEFUL</p>
                    <li>
                        <LocalShippingIcon className='icon' /><span>  Delivery </span>
                    </li>
                    <li>
                        <QueryStatsIcon className='icon' /><span>  Stats</span>
                    </li>
                    <li>
                        <CircleNotificationsIcon className='icon' /> <span> Notifications</span>
                    </li>
                    <p className='title'>SERVICE</p>
                    <li>
                        <SettingsSystemDaydreamIcon className='icon' /><span>  System Health</span>
                    </li>
                    <li>
                        <PsychologyIcon className='icon' /><span>  Logs</span>
                    </li>
                    <li>
                        <SettingsIcon className='icon' /><span>  Settings</span>
                    </li>
                    <p className='title'>USER</p>
                    <li>
                        <AccountBoxIcon className='icon' /><span>  Profile</span>
                    </li>
                    <li>
                        <LogoutIcon className='icon' /> <span>  Logout</span>
                    </li>
                </ul>
            </div>
            <div className='color-bottom'>
                <div className='color-option'></div>
                <div className='color-option'></div>
                <div className='color-option'></div>
            </div>
        </div>
    )
}

export default Sidebar