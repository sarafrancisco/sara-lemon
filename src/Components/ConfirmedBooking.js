import React  from 'react';
import checksign from '../Images/checked-icon.png';

 const ConfirmedBooking = () => {
    return (
        <div className='success'>
            <h2>Thank you!</h2>
            <img src={checksign} alt='check sign'/>
            <h5 className='confirm-msg'>Your reservation is confirmed.</h5>
            <p className='reminder'>You will get a reminder and a confirmation message on your phone and email.</p>
        </div>
    )
 }

export default ConfirmedBooking;