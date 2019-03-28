import React from 'react';

import Nav from './Nav';

import AppleLogo from '../img/apple_logo.svg';
import SearchIcon from '../img/search_icon.svg';
import ShopingBagIcon from '../img/shopping_bag_icon.svg';

const NavWrapper = props => {
    return (
        <div className='nav-wrapper'>
            <img className='apple-logo' src={AppleLogo} alt='white apple logo' />
            <div className='nav-items'>
                {
                    props.data.length > 0 ? (
                        props.data.map(elem => (<Nav data={elem} key={elem.id} />))
                    ) : (
                        // Spinner
                        <div className="semipolar-spinner">
                        <div className="ring"></div>
                        <div className="ring"></div>
                        <div className="ring"></div>
                        <div className="ring"></div>
                        <div className="ring"></div>
                        </div>
                    )
                }
            </div>
            <img className='search-icon' src={SearchIcon} alt='white magnifier, search' />
            <img className='bag-icon' src={ShopingBagIcon} alt='' />
        </div>
    )
}

export default NavWrapper;