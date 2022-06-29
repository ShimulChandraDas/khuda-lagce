import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading';

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();

    let signInError;

    if (loading || gLoading) {
        return <Loading />
    };
    if (error || gError) {
        signInError = <p className='text-red-500'> {error?.message || gError?.message}</p>
    }


    if (user || gUser) {
        navigate('/')
    }
    const onSubmit = (data) => {
        console.log(data);
        signInWithEmailAndPassword(data.email, data.password)

    };

    return (

        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">

                <div className="card w-full  shadow-2xl bg-base-100">

                    <div className="card-body">
                        <h1 className="text-2xl text-center font-bold">Login Now!</h1>
                        <form className='flex-auto items-center justify-center content-center' onSubmit={handleSubmit(onSubmit)}>
                            {/* Email Field */}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>

                                <input type="email"
                                    placeholder="Type Email here"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: 'email required'
                                        },
                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: 'Enter your valid email'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-600">{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-600">{errors.email.message}</span>}
                                </label>
                            </div>
                            {/* Password Field */}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>

                                <input type="password"
                                    placeholder="Type password here"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: 'password required'
                                        },
                                        minLength: {
                                            value: 6,
                                            message: 'Password must be 6 character or longer'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-600">{errors.password.message}</span>}
                                    {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-600">{errors.password.message}</span>}
                                </label>
                            </div>
                            {signInError}
                            <input className='btn w-full max-w-xs' type="submit" value='Login' />
                        </form>
                        <Link to="/signup" className="label-text-alt link link-hover text-center">Don't have An Account?</Link>




                        <div className="divider">OR</div>


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