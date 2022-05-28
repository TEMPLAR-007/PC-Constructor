import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const MyProfile = () => {

    const [user] = useAuthState(auth);

    return (
        <div>
            <div className="mockup-phone border-indigo-900 mt-10 ml-3">
                <div className="camera"></div>
                <div className="display">
                    <div className="artboard artboard-demo phone-1">
                        <div>
                            <div className="avatar flex justify-center">
                                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src="https://i.ibb.co/x2ZbTNs/user.png" />
                                </div>
                            </div>
                            <div dashboard-sidebar className='py-10'>
                                <h1 dashboard-sidebar className='text-xl font-bold'> Name: <span dashboard-sidebar className='font-normal'>{user.displayName}</span></h1>
                                <br />
                                <h1 dashboard-sidebar className='font-bold'> EMAIL: <span dashboard-sidebar className='font-normal'>{user.email}</span></h1>
                                <br />
                                <h1 dashboard-sidebar className='font-bold'> phone number: <span dashboard-sidebar className='font-normal'>01XXXXXXXXX</span></h1 >
                                <br />
                                <h1 dashboard-sidebar className='font-bold' > LinkedIn profile: <span dashboard-sidebar className='font-normal' > https//:*********</span> </h1>
                            </div >
                            <button className="btn btn-secondary w-full max-w-xs "><Link to='/editProfile'>Edit</Link></button>
                        </div >
                    </div >
                </div >
            </div >
        </div >
    );
};

export default MyProfile;