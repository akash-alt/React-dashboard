import React from 'react';
import "./home.scss";
import Sidebar from '../../component/sidebar/Sidebar';

const Home = () => {
    return (
        <div className='home'>
            <Sidebar />
            <div className='home-container'>container</div>
        </div>
    )
}

export default Home