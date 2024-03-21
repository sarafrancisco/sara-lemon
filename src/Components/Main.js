import React, {useReducer} from 'react';
import Home from "./Home"
import Booking from './Booking';
import ConfirmedBooking from './ConfirmedBooking';
import { Route, Routes, useNavigate } from "react-router-dom";

export default function Main() {
    const seededRandom = function (seed) {
        var m = 2 ** 35 - 31;
        var a = 185852;
        var s = seed % m;
        return function () {
            return (s = s * a % m) / m;
        };
    }

    const fetchAPI = function (date) {
        let result = [];
        let random = seededRandom(date.getDate());

        for (let i = 17; i <= 23; i++) {
            if (random() < 0.5) {
                result.push(i + ':00');
            }
            if (random() < 0.5) {
                result.push(i + ':30');
            }
        }
        return result;
    };

    const submitAPI = function (formData) {
        return true;
    };

    const navigate = useNavigate();
    function submitForm(formData) {
        if (submitAPI(formData)) {
            navigate("/ConfirmedBooking");
        }
    }

    const initialState = { availableTimes: fetchAPI(new Date()) }
    const [state, dispatch] = useReducer(updateTimes, initialState);

    function updateTimes(state, date) {
        return { availableTimes: fetchAPI(new Date(date)) }
    }

  return (
    <main>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Booking" element={<Booking availableTimes={state.availableTimes} dispatch={dispatch} submitForm={submitForm}/>}/>
            <Route path="/ConfirmedBooking" element={<ConfirmedBooking/>}/>
        </Routes>
    </main>
  )
}
