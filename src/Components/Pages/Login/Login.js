import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate()

    if (user) {
        toast.success('Successfully Login with');
        navigate('/')
    }
    return (

        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">

                <div className="card w-full  shadow-2xl bg-base-100">
                    <h1 className="text-2xl text-center font-bold">Login Now!</h1>
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />

                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                            <input type='submit' className='btn btn-primary  mx-auto w-full ' />
                        </div>
                        <label className="label">
                            <a href="/signup" className="label-text-alt link link-hover">Don't have An Account</a>
                        </label>
                        <div className='grid grid-flow-col gap-5 '>
                            <button onClick={() => signInWithGoogle()} className='btn btn-success  '> Continue With Google</button>
                            <button className='btn btn-secondary  '> Continue With GitHub</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;