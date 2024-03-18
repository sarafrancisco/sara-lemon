import React, { useState } from 'react';

export default function BookingForm(props) {
    const [formData, setFormData] = useState({
        date: "",
        time: "",
        occasion: "",
        specialInstruction: "",
        fullname: "",
        email: "",
        phone: "",
        isTouched: false,
    })

    const [numOfGuests, setNumOfGuests] = useState(1);

    //todays date;
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth () + 1;
    var yyyy = today.getFullYear();

    if (dd<10) {
        dd = '0' + dd
    }

    if (mm<10) {
        mm = '0' + mm
    }

    today= yyyy + '-' + mm + '-' + dd;
    //

    function clearForm () {
        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                date: "",
                time: "",
                occasion: "",
                specialInstruction: "",
                fullname: "",
                email: "",
                phone: "",
                isTouched: false,
            }
        })
    }

    function handleChange (e) {
        const {name,value}=e.target;
        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    const getIsFormValid =() => {
        return(
            formData.date &&
            formData.time &&
            formData.fullname.trim().length>3 &&
            formData.email &&
            formData.phone
        )
    }

    function handleSubmit(e) {
        e.preventDefault();
        clearForm();
        props.submitForm(e);
    }

    return (
      <div className='reservation-form'>
            <form onSubmit={handleSubmit}>
                <h2>Reserve a Table</h2>
                <p>Please fill in and submit form to book your reservation at Little Lemon.</p>
                <label htmlFor='date'>Choose Date:<sup>*</sup></label>
                    <input
                        type='date'
                        name='date'
                        id='date'
                        min={today}
                        value={formData.date}
                        onBlur={() => setFormData({...formData, isTouched: true})}
                        onChange={handleChange}
                        />
                    {formData.isTouched && formData.date.trim().length<3 ? <div className='field-error'>Select a Date</div>: null}
                    <br/>
                <label htmlFor='time'>Choose Time:<sup>*</sup></label>
                    <select
                        name='time'
                        id='time'
                        value={formData.time}
                        onBlur={() => setFormData({ ...formData, isTouched: true })}
                        onChange={handleChange}
                    >
                        <option>Select a Time:</option>
                        <option>18:00</option>
                        <option>18:30</option>
                        <option>19:00</option>
                        <option>19:00</option>
                        <option>20:00</option>
                        <option>20:30</option>
                        <option>21:00</option>
                        <option>21:30</option>
                        <option>22:00</option>
                    </select>
                    {formData.isTouched && formData.time.trim().length<3 ? <div className="field-error">Select a Time</div> : null}
                    <br/>
                <label htmlFor='occasion'>Occasion:</label>
                    <select
                        name='occasion'
                        id='occasion'
                        value={formData.occasion}
                        onChange={handleChange}
                    >
                        <option>Select an Occasion:</option>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                        <option>Engagement</option>
                    </select>
                <div className='num-of-guests'>
                        <label>Number of Guests:</label>
                        <div className='num'>
                            <span onClick={() => numOfGuests<10 ? setNumOfGuests(numOfGuests + 1): null}>+</span>
                            <h5>1</h5>
                            <span onClick={() => numOfGuests>1 ? setNumOfGuests(numOfGuests - 1): null}>-</span>
                        </div>
                    </div>
                <textarea
                        cols="30"
                        rows="10"
                        placeholder='Special Instructions...'
                        name='specialInstruction'
                        value={formData.specialInstruction}
                        onChange={handleChange}
                        >
                        </textarea>

                <h2>Contact Info</h2>
                <label htmlFor='fullname'>Full Name:<sup>*</sup></label>
                    <input
                        type='text'
                        name='fullname'
                        id='fullname'
                        value={formData.fullname}
                        onChange={handleChange}
                        onBlur={() => setFormData({ ...formData, isTouched: true })}
                        />
                    {formData.isTouched && formData.fullname.trim().length<3 ? <div className="field-error">Name should have atleast 3 characters</div> : null}
                <br/>
                <label htmlFor='email'>email:<sup>*</sup></label>
                    <input
                        type='email'
                        name='email'
                        id='email'
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={() => setFormData({ ...formData, isTouched: true })}
                        />
                {formData.isTouched && formData.email.trim().length<8 ? <div className="field-error">Enter a valid email</div> : null}
                <br/>
                <label htmlFor='phone'>Phone Number:<sup>*</sup></label>
                    <input
                        type='tel'
                        name='phone'
                        id='phone'
                        value={formData.phone}
                        pattern='[0-9]{10,11}'
                        onChange={handleChange}
                        onBlur={() => setFormData({ ...formData, isTouched: true })}
                        />
                {formData.isTouched && formData.phone.trim().length<10 ? <div className="field-error">Enter a valid phone number</div> : null}
                <button type='submit' className='submitBtn' aria-label='On Click' disabled={!getIsFormValid()}>Confirm Reservation</button>
            </form>
        </div>
    )
}
