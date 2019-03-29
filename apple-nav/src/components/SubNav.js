import React from 'react';

const SubNav = props => {
    return (
        <div className='sub-nav-item'>
            <img className='sub-nav-item-icon' src={props.data.img} alt={props.data.title} />
            <p className='sub-nav-item-text'>{props.data.title}</p>
        </div>
    )
}

export default SubNav;