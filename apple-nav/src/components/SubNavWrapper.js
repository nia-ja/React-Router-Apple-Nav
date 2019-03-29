import React from 'react';

import SubNav from './SubNav';

const SubNavWrapper = props => {
    if(props.product !== undefined) {
        return (
            <div className='sub-nav-wrapper'>
                <div className='sub-nav-items'>
                    {props.product.map(elem => (<SubNav data={elem} key={elem.id} />))}
                </div>
            </div>
        )
    } else {
        return null;
    }
}

export default SubNavWrapper;