import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import DeleteOrderModal from './DeleteOrderModal';

const MyOrder = () => {

    const [orders, setOrders] = useState([]);

    const [deletingOrder, setDeletingOrder] = useState({});

    const [user, loading] = useAuthState(auth);

    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/api/order/${user?.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    console.log('res', res);
                    if (res.status === 401 || res.status === 403) {

                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/')
                    }
                    return res.json()
                })
                .then(data => {

                    setOrders(data);
                });
        }
    }, [user]);

    const handleRemove = id => {
        console.log(id);
        const url = `http://localhost:5000/api/order/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = orders?.filter(o => o?._id !== id);
                setOrders(remaining);

                setDeletingOrder({});

            })
    };



    if (loading) {
        return <div dashboard-sidebar className='h-screen flex justify-center items-center' >
            <svg role="status" dashboard-sidebar className="inline w-10 h-10 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-primary" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg" >
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
            </svg >
        </div >;
    }

    return (
        <div>
            <h2>my order:{orders?.length}</h2>

            {
                deletingOrder._id && <DeleteOrderModal
                    handleRemove={handleRemove}
                    deletingOrder={deletingOrder}>
                </DeleteOrderModal>
            }

            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Address</th>
                            <th>Phone</th>
                            <th>Payment</th>
                            <th>Cancel</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map((o, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{o?.part}</td>
                                <td>$ {o?.price}</td>
                                <td>{o?.quantity}</td>
                                <td>{o?.address}</td>
                                <td>{o?.phone}</td>
                                <td>
                                    {(o?.price && !o?.paid) && <Link to={`/dashboard/payment/${o?._id}`}><button className="btn btn-warning">Payment</button></Link>}
                                    {(o?.price && o?.paid) && <span className="text-success">Already Paid</span>}
                                </td>
                                <td>
                                    {(o?.price && o?.paid) && <button disabled className="btn btn-error">Cancel</button>}
                                    {o?.paid ? <p></p> :
                                        <label onClick={() => setDeletingOrder(o)} htmlFor="orderDelete" className="btn modal-button">Cancel</label>}
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default MyOrder;