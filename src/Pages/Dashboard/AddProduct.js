import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddProduct = () => {
    const [user] = useAuthState(auth);
    const email = user?.email;
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        const url = 'http://localhost:5000/part'
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    toast('added item successfuly')
                }
                reset();
            });
    };

    return (
        <div dashboard-sidebar className='card-body bg-base-200' >
            <h2 dashboard-sidebar className="text-2xl font-bold text-success pl-10" > Add a New Product</h2 >

            <form dashboard-sidebar className='mt-5 form-box' onSubmit={handleSubmit(onSubmit)} >
                <input dashboard-sidebar className=' w-full max-w-xs mb-4 add-input pl-3 rounded' placeholder='Part Name'{...register("name", { required: true, maxLength: 20 })} required />
                <br />
                <input dashboard-sidebar className=' w-full max-w-xs mb-4 add-input pl-3 rounded' value={email} placeholder='Email'{...register("email")} readOnly />
                <br />
                <input dashboard-sidebar className=' w-full max-w-xs mb-4 add-input pl-3 rounded' placeholder='Supplier'{...register("supplier", { required: true, maxLength: 20 })} required />
                <br />
                <input dashboard-sidebar className=' w-full max-w-xs mb-4 add-input pl-3 rounded' placeholder='Photo url' {...register("img")} required />
                <br />
                <input dashboard-sidebar className=' w-full max-w-xs mb-4 add-input pl-3 rounded' type="number" placeholder='Input min Quantity'{...register("minQuantity")} required />
                <br />
                <input dashboard-sidebar className=' w-full max-w-xs mb-4 add-input pl-3 rounded' type="number" placeholder='Input avaiable Quantity'{...register("availableQuantity")} required />
                <br />
                <input dashboard-sidebar className=' w-full max-w-xs mb-4 add-input pl-3 rounded' type="number" placeholder='$ Price'{...register("price")} required />
                <br />
                <textarea dashboard-sidebar className=' w-full max-w-xs pl-3 rounded' rows="3" cols="50" placeholder='Description...'{...register("description")} required >
                </textarea >
                <br />
                <br />
                <input dashboard-sidebar className="btn w-full max-w-xs text-white" type="submit" value="Add Item" />
            </form >
        </div >

    );
};


export default AddProduct;