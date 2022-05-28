import React from 'react';

const DeleteOrderModal = ({ handleRemove, deletingOrder }) => {

    return (
        <div>

            <input type="checkbox" id="orderDelete" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle bg-transparent">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Are you sure you want to cancel ?</h3>

                    <div className="modal-action">
                        <button className="btn btn-xs btn-error" onClick={() => handleRemove(deletingOrder._id)}>Yes</button>
                        <label htmlFor="orderDelete" className="btn btn-xs">No</label>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default DeleteOrderModal;