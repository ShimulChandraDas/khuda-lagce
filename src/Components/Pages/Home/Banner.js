import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const Banner = () => {
    return (
        // <div className='' 
        // style={{ background: "url(https://thumbs.dreamstime.com/b/greek-food-background-traditional-different-dishes-top-view-close-up-143835841.jpg)" }}>
        <div >
            <Navbar />
            <div className="hero min-h-screen ">
                <div className="hero-content text-center">
                    <div className="max-w-lg">
                        <h1 className="text-4xl font-bold">Welcome to Khuda Lagce!</h1>
                        <p className="py-6">Order Online From Your Favorite Nearby Restaurants.</p>


                        {/* <div className="form-control">
                            <input type="text" placeholder="Search" className="input input-bordered max-w-full " />
                        </div> */}

                        <div className="container flex justify-center items-center">
                            <div className="relative">
                                <div className="absolute top-4 left-3">
                                    <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i>
                                </div>
                                <input type="text" className="h-14 w-96 pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none" placeholder="Enter your Location"></input>
                                <div className="absolute top-2 right-2">

                                    <button className="h-10 w-20 text-white rounded-lg bg-red-500 hover:bg-red-600">Search</button>

                                </div>
                            </div>
                        </div>


                        <p className='text-lg font-bold'>Having Issues? Call Us 16753</p>
                        {/* <div className='flex content-end justify-end'>
                                <button className="btn btn-primary">Buy Now</button><button className="btn btn-primary">Buy Now</button>
                            </div> */}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Banner;