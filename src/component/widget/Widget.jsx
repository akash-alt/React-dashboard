import React from 'react'
import "./widget.scss"
import PercentOutlinedIcon from '@mui/icons-material/PercentOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';

const Widget = ({ type }) => {
    let data;

    let amount = 100
    let diff = 20
    switch (type) {
        case "user":
            data = {
                title: 'USERS',
                isMoney: false,
                links: 'See All Users',
                icon: (<PersonOutlineOutlinedIcon className='icon'
                    style={{
                        backgroundColor: 'burlywood'
                    }}
                />)
            }
            break;

        case "order":
            data = {
                title: 'ORDERS',
                isMoney: false,
                links: 'See All Orders',
                icon: (<ShoppingCartOutlinedIcon className='icon'
                    style={{
                        backgroundColor: 'lightblue'
                    }}
                />)
            }
            break;

        case "earning":
            data = {
                title: 'EARNING',
                isMoney: false,
                links: 'View net earning',
                icon: (<MonetizationOnOutlinedIcon className='icon'
                    style={{
                        backgroundColor: 'lightgreen'
                    }}
                />)
            }
            break;

        case "balance":
            data = {
                title: 'BALANCE',
                isMoney: false,
                links: 'View net Balance',
                icon: (<AccountBalanceWalletOutlinedIcon className='icon'
                    style={{
                        backgroundColor: 'lightpink'
                    }}
                />)
            }
            break;
        default:
            break;
    }

    return (
        <div className='widget'>
            <div className='left'>
                <div className='title'>{data.title}</div>
                <div className='counter-left'>
                    <span>
                        {data.isMoney && "$"} {amount}
                    </span>
                </div>
                <div className='links'>{data.links}</div>
            </div>
            <div className='right'>
                <div className='percentage positive'>
                    <KeyboardArrowUpOutlinedIcon />
                    {diff}%
                </div>
                {/** <PersonOutlineOutlinedIcon className='icon' />*/}
                {data.icon}
            </div>
        </div>
    )
}

export default Widget
