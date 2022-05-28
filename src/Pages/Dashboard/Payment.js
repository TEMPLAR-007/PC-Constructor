import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51L3g8ZEcjGOXCJTTwdNctF1MWtzKXI0T0oEodICv9f4tTvagdtzQV6e1GGgMLCO54FAriJmIfXcsGTpnMpsuZINM00xwmceU6K');

const Payment = () => {
    const { id } = useParams();

    const url = `https://whispering-ocean-06351.herokuapp.com/order/${id}`;

    const { data: order, isLoading } = useQuery(['order', id], () => fetch(url).then(res => res.json()));

    if (isLoading) {
        return <div dashboard-sidebar className='h-screen flex justify-center items-center' >
            <svg role="status" dashboard-sidebar className="inline w-10 h-10 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-primary" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg" >
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
            </svg >
        </div >;
    }

    return (
        <div dashboard-sidebar className='px-10' >
            <div className="card w-50 max-w-md bg-base-100 shadow-xl my-10">
                <div className="card-body">
                    <p dashboard-sidebar className="text-success font-bold">Hello, {order.userName}</p>
                    <h2 className="card-title">Please Pay</h2>
                    <p dashboard-sidebar className='font-bold'>Your Order: <span dashboard-sidebar className='text-orange-700 font-normal'>{order.part}</span> </p >
                    <p dashboard-sidebar className='font-bold' > Price: <span dashboard-sidebar className='text-orange-700 font-normal' > ${order.price}</span ></p >
                    <p dashboard-sidebar className='font-bold' > Quantity: <span dashboard-sidebar className='text-orange-700 font-normal' > {order.quantity} pieces</span ></p >
                </div >
            </div >
            <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>
                </div>
            </div>
        </div >
    );
};

export default Payment;