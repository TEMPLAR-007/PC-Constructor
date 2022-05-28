import React, { useEffect, useState } from 'react';
import SingleReviews from './SingleReviews';

const ShowReviews = () => {
    const [reviews, setreviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setreviews(data))
    }, [])
    return (
        <div>
            <h1 dashboard-sidebar className='text-center text-indigo-900 text-4xl mt-20 mb-10'>All Reviews</h1>

            <div dashboard-sidebar className='grid grid-cols-1 lg:grid-cols-4 lg:gap-36 gap-5 lg:px-60' >
                {
                    reviews.slice(0, 4).map(review => <SingleReviews
                        key={review._id}
                        review={review}
                    ></SingleReviews>)
                }
            </div >

        </div >
    );
};

export default ShowReviews;