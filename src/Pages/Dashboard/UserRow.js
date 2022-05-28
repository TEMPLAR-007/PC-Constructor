import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, refetch, index }) => {
    const { email, role } = user;

    const MakeAdmin = () => {
        fetch(`https://whispering-ocean-06351.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to Make an admin');
                }
                return res.json()
            })
            .then(data => {

                refetch();
                toast.success(`Admin maded`);

            })
    }

    const userDelete = (email) => {
        fetch(`https://whispering-ocean-06351.herokuapp.com/api/admin/delete/${email}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to remove user');
                }
                return res.json()
            })
            .then(data => {

                refetch();
                toast.success(`user removed`);

            })
    }



    return (

        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{role !== 'admin' ? <button onClick={MakeAdmin} className="btn btn-xs">Make Admin</button> : 'already added'}</td>

            <td><button onClick={() => userDelete(user.email)} className="btn btn-xs">Delete User</button></td>
        </tr>

    );
};

export default UserRow;