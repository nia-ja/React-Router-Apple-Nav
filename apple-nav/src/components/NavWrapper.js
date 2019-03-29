import React from 'react';
import { Link } from 'react-router-dom';

import Nav from './Nav';

import AppleLogo from '../img/apple_logo.svg';
import SearchIcon from '../img/search_icon.svg';
import ShopingBagIcon from '../img/shopping_bag_icon.svg';

const NavWrapper = props => {
    return (
        <div className='nav-wrapper'>
            <Link to='/'><img className='apple-logo' src={AppleLogo} alt='white apple logo' /></Link>
            <div className='nav-items'>
                {props.data.map(elem => (<Nav data={elem} key={elem.id} />))}
            </div>
            <img className='search-icon' src={SearchIcon} alt='white magnifier, search' />
            <img className='bag-icon' src={ShopingBagIcon} alt='' />
        </div>
    )
}

export default NavWrapper;