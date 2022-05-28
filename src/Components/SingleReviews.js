import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import starimg from '../Assets/icon/star.png'
import auth from '../firebase.init';

const SingleReviews = ({ review }) => {
    const [user] = useAuthState(auth);
    return (
        <div className="card w-96 mx-auto bg-base-200 shadow-xl">
            <div className="card-body items-center text-center">
                <h2 className="card-title">{review.name}</h2>
                <p>{review.description}</p>
                <div dashboard-sidebar className='flex items-center gap-1'>
                    <p dashboard-sidebar className='font-bold'>rating: {review.rating}</p>
                    <img width={20} src={starimg} alt="" />
                </div>
            </div >
        </div >
    );
};

export default SingleReviews;