import React from 'react';
import bannerPic from '../../../Images/doctor1.webp'
const Banner = () => {
    return (
        <div className="hero min-h-screen  bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={bannerPic} className="rounded-lg lg:w-1/2 shadow-2xl" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">Book Your Appointment!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;