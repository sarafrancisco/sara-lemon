import React  from 'react';
import bannerImg from '../Images/restauranfood.jpg';

 export default function Hero () {
   return (
      <header className='hero'>
        <section>
          <div className='banner'>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <a href='/Booking'>
              <button className='button-hover' aria-label='On Click'>Reserve a Table</button>
            </a>
          </div>
          <div className='banner-img'>
            <img src={bannerImg} alt='Restaurant food'/>
          </div>
        </section>
      </header>
      );
  };

