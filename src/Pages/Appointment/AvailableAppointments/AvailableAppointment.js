import React from 'react';
import { format } from 'date-fns';

const AvailableAppointment = ({ selectedDate }) => {
    return (
        <section>
             <p className='text-center text-secondary font-bold'>Available Appointments on {format(selectedDate, 'PP')}</p>
        </section>
    );
};

export default AvailableAppointment;