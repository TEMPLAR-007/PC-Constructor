import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../firebase.init';
import Parts from './Parts';

const PartPurchase = () => {
    const { partId } = useParams();
    const [user] = useAuthState(auth);

    const [btnDisable, setBtnDisable] = useState(false);

    const { data: parts, isLoading } = useQuery('singlePart', () => fetch(`http://localhost:5000/part/${partId}`).then(res =>
        res.json()
    ))

    if (isLoading) {
        return <button className="btn btn-square loading"></button>
    }


    const handleBtn = (e) => {
        let qtn = parseInt(e.target.value);
        let productQtn = parseInt(parts.availableQuantity);
        if (qtn > productQtn || qtn <= 100) {
            setBtnDisable(true);
        } else {
            setBtnDisable(false);
        }

    }

    const handleBooking = event => {
        event.preventDefault();

        const order = {
            partsId: partId,
            part: parts.name,
            quantity: event.target.quantity.value,
            price: parts.price,
            userEmail: user.email,
            userName: user.displayName,
            phone: event.target.phone.value,
            address: event.target.address.value
        };


        fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    toast('added item successfuly')
                }
                event.target.reset()
            })
    }

    return (

        <div dashboard-sidebar className='lg:px-40 mt-10' >
            <div dashboard-sidebar className='grid grid-cols-1 lg:grid-cols-2 lg:px-96' >
                <div className="card w-96 mx-auto bg-base-100 shadow-xl">
                    <figure><img style={{ height: "225px", width: "400px" }} src={parts.img} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-blue-900">{parts.name}</h2>
                        <p>{parts.description}</p>
                        <div dashboard-sidebar className='grid gap-y-4'>
                            <p dashboard-sidebar className='text-xl card-title'>Price: <span dashboard-sidebar className='text-yellow-600'>${parts.price}</span><span dashboard-sidebar className='text-sm'>/ Piece</span></p >
                            <p dashboard-sidebar className='card-title text-base' > Minimum order quantity: <span dashboard-sidebar className='text-red-500 font-bold' > {parts.minQuantity}</span > <span dashboard-sidebar className='text-sm' > Pieces</span ></p >
                            <p dashboard-sidebar className='card-title text-base' > Available quantity: <span dashboard-sidebar className='text-green-600 font-bold' > {parts.availableQuantity}</span > <span dashboard-sidebar className='text-sm' > Pieces</span ></p >
                        </div >
                    </div >
                </div >

                <form onSubmit={handleBooking} dashboard-sidebar className='grid justify-items-center gap-3 card w-96 mx-auto bg-base-100 shadow-xl mt-5' >
                    <h1 dashboard-sidebar className='text-2xl font-bold text-warning' > Order Form</h1 >
                    <input type="text" name="name" disabled value={user.displayName} dashboard-sidebar className="input input-bordered w-full max-w-xs" />
                    <input type="email" name="email" disabled value={user.email} dashboard-sidebar className="input input-bordered w-full max-w-xs" />
                    <input type="text" name="address" placeholder="Address" dashboard-sidebar className="input input-bordered w-full max-w-xs" />
                    <input type="number" name="phone" placeholder="Phone Number" dashboard-sidebar className="input input-bordered w-full max-w-xs" />
                    <input onChange={handleBtn} type="number" name="quantity" defaultValue={parts.minQuantity} dashboard-sidebar className="input input-bordered w-full max-w-xs" />
                    <input type="submit" disabled={btnDisable} value="Order" dashboard-sidebar className="btn btn-warning w-full max-w-xs" />
                </form >
            </div >
        </div >
    );
};

export default PartPurchase;