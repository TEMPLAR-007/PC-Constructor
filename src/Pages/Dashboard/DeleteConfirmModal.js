import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({ deletingProduct, refetch, setDeletingProduct }) => {
    const { name, _id } = deletingProduct;


    const handleRemove = (id) => {

        const url = `https://whispering-ocean-06351.herokuapp.com/part/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success(`${name} is deleted`)
                    setDeletingProduct(null);
                    refetch()
                }

            })

    };
    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 dashboard-sidebar className='font-bold text-lg'>Are you sure you want to delete: <span className="font-bold text-lg text-red-500">{name} ?</span></h3>
                    <div className="modal-action">
                        <label onClick={() => handleRemove(_id)} htmlFor="delete-confirm-modal" className="btn btn-xs btn-error">Delete</label>
                        <label htmlFor="delete-confirm-modal" className="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteConfirmModal;