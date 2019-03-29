import React from 'react';

import SubNavWrapper from './SubNavWrapper';

import data from '../data';

const ProductPage = props => {
    const id = props.match.params.id;
    const product = data.find(product => `${product.title.toLowerCase()}` === id);
    return (
        <div className='product-page'>
            <SubNavWrapper product={product.subheader} />
            <div className="random-page">
                <h1>It's a <span>{product.title}</span> page</h1>
                <img src={product.img} alt='random ilustration' />
            </div>
        </div>
    )
}

export default ProductPage;