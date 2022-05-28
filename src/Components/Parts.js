import React from 'react';
import { useNavigate } from 'react-router-dom';

const Parts = ({ part }) => {

    const navigate = useNavigate()

    const handleNavigatePurchasePart = id => {
        navigate(`/part/${id}`);
    }

    return (

        <div className="card w-96 mx-auto bg-base-100 shadow-xl">
            <figure><img style={{ height: "225px", width: "400px" }} src={part.img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-blue-900">{part.name}</h2>
                <p>{part.description.slice(0, 100)}...</p>
                <div dashboard-sidebar className='grid gap-y-4'>
                    <p dashboard-sidebar className='text-xl card-title'>Price: <span dashboard-sidebar className='text-yellow-600'>${part.price}</span><span dashboard-sidebar className='text-sm'>/ Piece</span></p >
                    <p dashboard-sidebar className='card-title text-base' > Minimum order quantity: <span dashboard-sidebar className='text-red-500 font-bold' > {part.minQuantity}</span > <span dashboard-sidebar className='text-sm' > Pieces</span></p>
                    <p dashboard-sidebar className='card-title text-base' > Available quantity: <span dashboard-sidebar className='text-green-600 font-bold' > {part.availableQuantity}</span > <span dashboard-sidebar className='text-sm' > Pieces</span ></p >

                </div >
                <div className="card-actions justify-between items-center">
                    <button onClick={() => handleNavigatePurchasePart(part._id)} className="btn btn-warning">Buy Now</button>
                    <div>
                        <div className="badge badge-outline mr-3">Featured</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                </div>
            </div >
        </div >

    );
};

export default Parts;