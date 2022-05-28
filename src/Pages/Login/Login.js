import { useForm } from 'react-hook-form';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from './SocialLogin';
import useToken from '../../Hooks/useToken';
import { useEffect } from 'react';


const Login = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [token] = useToken(user);

    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, from, navigate])


    if (loading) {
        return <div dashboard-sidebar className='h-screen flex justify-center items-center' >
            <svg role="status" dashboard-sidebar className="inline w-10 h-10 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-primary" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg" >
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
            </svg >
        </div >;
    }

    let errorMsg;
    if (error) {

        errorMsg = <p dashboard-sidebar className='text-danger' > Error: {error?.message}</p >
    };


    const onSubmit = data => {
        console.log(data)

        signInWithEmailAndPassword(data.email, data.password);

    };


    return (
        <div dashboard-sidebar className="hero min-h-screen " >
            <div dashboard-sidebar className="hero-content flex-col lg:flex-row-reverse" >
                <div dashboard-sidebar className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-200 " >
                    <div dashboard-sidebar className="card-body" >
                        <h1 dashboard-sidebar className="text-5xl font-bold mb-6 text-primary" > Login now!</h1 >
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div dashboard-sidebar className="form-control">
                                <label dashboard-sidebar className="label">
                                    <span dashboard-sidebar className="label-text">Email</span>
                                </label >

                                <input
                                    type="email"
                                    placeholder="Email"
                                    dashboard-sidebar className="input input-bordered"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: 'Email is Required'
                                        },
                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: 'Provide a valid Email'
                                        }
                                    })
                                    } />

                                < label dashboard-sidebar className='label text-red-500 text-sm' >
                                    {errors.email?.type === 'required' && errors.email.message}
                                    {errors.email?.type === 'pattern' && errors.email.message}
                                </label >
                            </div >

                            <div dashboard-sidebar className="form-control" >
                                <label dashboard-sidebar className="label" >
                                    <span dashboard-sidebar className="label-text" > Password</span >
                                </label >

                                <input type="password" placeholder="password" dashboard-sidebar className="input input-bordered" {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or longer'
                                    }
                                })
                                } />

                                < label dashboard-sidebar className='label text-red-500 text-sm' >
                                    {errors.password?.type === 'required' && errors.password.message}
                                    {errors.password?.type === 'minLength' && errors.password.message}
                                    {errorMsg}
                                </label >

                                <p> New to here? <Link dashboard-sidebar className='text-secondary' to="/signUp">Create new account</Link></p >

                            </div >

                            <input dashboard-sidebar className="w-full max-w-xs mt-6 btn btn-primary" type="submit" value="Login" />


                            <SocialLogin></SocialLogin>

                        </form >

                    </div >
                </div >
            </div >
        </div >

    );
};

export default Login;






