import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = props => {
    return (
        <NavLink activeClassName='nav-item-active'>
            <div className='nav-item'>{props.data.title}</div>
        </NavLink>
    )
}

export default Nav;