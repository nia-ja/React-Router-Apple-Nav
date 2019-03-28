import React from 'react';
import Nav from './Nav';

const NavWrapper = props => {
    return (
        <div className='nav-wrapper'>
            <img src='' alt='' />
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
            <i src='' alt='' />
            <i src='' alt='' />
        </div>
    )
}

export default NavWrapper;