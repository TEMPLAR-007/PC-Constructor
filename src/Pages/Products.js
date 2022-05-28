import React, { useEffect, useState } from 'react';
import Product from '../Pages/product';

const Products = () => {
    const [parts, setParts] = useState([]);

    useEffect(() => {
        fetch('https://whispering-ocean-06351.herokuapp.com/part')
            .then(res => res.json())
            .then(data => setParts(data))
    }, [])
    return (
        <div>
            <h1 dashboard-sidebar className='text-center text-4xl mt-5 mb-10'>All Products</h1>
            <div dashboard-sidebar className='grid grid-cols-1 lg:grid-cols-3 gap-10 lg:px-60' >
                {
                    parts.map(part => <Product
                        key={part._id}
                        part={part}
                    ></Product>)
                }
            </div >
        </div >
    );
};

export default Products;