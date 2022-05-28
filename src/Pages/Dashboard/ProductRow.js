import React from 'react';

const ProductRow = ({ part, index, refetch, setDeletingProduct }) => {
    const { name, price, img, availableQuantity } = part;
    return (
        <tr>
            <th>{index + 1}</th>
            <td><div className="avatar">
                <div className="w-20 rounded">
                    <img src={img} alt={name} />
                </div>
            </div></td>
            <td>{name}</td>
            <td>{availableQuantity} pieces</td>
            <td>${price}</td>
            <td>
                <label onClick={() => setDeletingProduct(part)} htmlFor="delete-confirm-modal" className=" btn btn-error">Delete</label>
            </td>
        </tr>
    );
};

export default ProductRow;