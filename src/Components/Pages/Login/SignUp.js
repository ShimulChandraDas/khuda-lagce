import React from 'react';

const SignUp = () => {
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
                            <input type="text" placeholder="email" className="input input-bordered" />

                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>

                            <input type='submit' className='btn btn-primary  mx-auto w-full ' />
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