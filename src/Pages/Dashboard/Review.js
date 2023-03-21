import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Review = () => {

    const [user] = useAuthState(auth);
    const name = user?.displayName;
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        const url = 'http://localhost:5000/reviews'
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
                    toast('added rivew successfuly')
                }
                reset();
            });
    };


    return (
        <div dashboard-sidebar className='card-body shadow bg-base-200' >
            < form dashboard-sidebar className='form-box gap-y-3' onSubmit={handleSubmit(onSubmit)} >
                <label className="label">
                    <span className="label-text">Give your rating</span>
                </label>
                <input dashboard-sidebar className='mb-2 pl-3 rounded add-input w-full max-w-xs mb-2 add-input' type="number" placeholder='Rating (1 to 5)'{...register("rating", { max: 5 })} required />
                <br />
                <input dashboard-sidebar className=' w-full max-w-xs mb-4 add-input pl-3 rounded' value={name} placeholder='Name'{...register("name")} readOnly />
                <label className="label">
                    <span className="label-text ">Tell something about us</span>
                </label>
                <textarea dashboard-sidebar className='pl-3 rounded w-full max-w-xs mb-2 add-input' rows="3" cols="50" placeholder='Description...'{...register("description")} required >
                </textarea >
                <br />
                <br />
                <input dashboard-sidebar className="btn btn-sm btn-success text-light w-full max-w-xs form-submit add-input" type="submit" value="Add review" />
            </form >
        </div >

    );
};

export default Review;