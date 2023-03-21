import React, { useEffect, useState } from 'react';
import Parts from './Parts';

const AllParts = () => {
    const [parts, setParts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/part')
            .then(res => res.json())
            .then(data => setParts(data))
    }, [])
    return (
        <div>
            <h1 dashboard-sidebar className='text-center text-4xl mt-20 text-indigo-900 mb-10'>Our Products</h1>
            <div dashboard-sidebar className='grid grid-cols-1 lg:grid-cols-3 gap-10 lg:px-60' >
                {
                    parts.slice(0, 6).map(part => <Parts
                        key={part._id}
                        part={part}
                    ></Parts>)
                }
            </div >
        </div >
    );
};

export default AllParts;