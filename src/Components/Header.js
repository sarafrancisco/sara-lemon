import React  from 'react';
import bannerImg from '../Images/restauranfood.jpg';

 const Header = () => {
   return (
      <header className='header'>
        <section>
          <div className='banner'>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <button>Reserve a Table</button>
          </div>
          <div className='banner-img'>
            <img src={bannerImg} alt='Restaurant food'/>
          </div>
        </section>
      </header>
      );
  };

export default Header;