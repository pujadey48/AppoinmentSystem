import React from 'react';
import doctor from '../../../Images/doctor5.jpg'
import appointment from '../../../Images/bg2.png'

const MakeAppointment = () => {
    return (
        <section className='mt-32'
        // style={{
        //     background: `url(${appointment})`
        // }}
            >
        <div className="hero">
  <div className="hero-content flex-col lg:flex-row">
    <img src={doctor} alt="" className=" hidden md:block lg:w-1/2 rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Book Your Appointment!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">BookNow</button>
    </div>
  </div>
</div>
        </section>
    );
};

export default MakeAppointment;