import React from 'react';
import "./home.scss";
import Sidebar from '../../component/sidebar/Sidebar';
import Navbar from "../../component/navbar/Navbar";
import Widget from '../../component/widget/Widget';
import Featurs from '../../component/features/Featurs';
import Charts from '../../component/charts/Charts';

const Home = () => {
    return (
        <div className='home'>
            <Sidebar />
            <div className='home-container'>
                <Navbar />
                <div className='widget-container'>
                    <Widget type='user' />
                    <Widget type='order' />
                    <Widget type='earning' />
                    <Widget type='balance' />
                </div>
                <div className='chart-container'>
                    <Featurs />
                    <Charts />
                </div>
            </div>
        </div>
    )
}

export default Home