import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = props => {
    return (
            <div className='nav-item'><NavLink to={`/${props.data.title.toLowerCase()}`} activeClassName='nav-item-active'>{props.data.title}</NavLink></div>
    )
}

export default Nav;