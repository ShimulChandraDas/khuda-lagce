import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    if (user) {
        navigate('/')
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">

                <div className="card w-full  shadow-2xl bg-base-100">
                    <h1 className="text-2xl text-center font-bold">Sign Up Now!</h1>
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" className="input input-bordered" />

                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text"  value={email}
                            
                                onChange={(e) => setEmail(e.target.value)} placeholder="email" className="input input-bordered" />

                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>

                            <input type="password" value={password}
                                onChange={(e) => setPassword(e.target.value)} placeholder="password" className="input input-bordered" />

                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>

                            <input type='submit' className='btn btn-primary  mx-auto w-full ' onClick={() => createUserWithEmailAndPassword(email, password)} />

                            <label className="label">
                                <a href="/login" className="label-text-alt link link-hover">Have An Account</a>
                            </label>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;