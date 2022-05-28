import React from 'react';

const AllOrderRow = ({ order, index, refetch, setDeletingProduct }) => {
    const { part, price, quantity, userEmail, userName } = order;
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{part}</td>
            <td>{userName}</td>
            <td>{userEmail}</td>
            <td>{quantity} pieces</td>
            <td>${price}</td>
            <td>
                {
                    order.transactionId ? <button class="btn btn-success">paid</button> : <label disabled htmlFor="delete-confirm-modal" class=" btn btn-error">Unpaid</label>
                }
            </td>
            <td>
                {
                    order.transactionId ? <button class="btn btn-warning">Shiped</button> : <label htmlFor="delete-confirm-modal" disabled class=" btn btn-error">panding</label>
                }

            </td>
        </tr>
    );
};

export default AllOrderRow;