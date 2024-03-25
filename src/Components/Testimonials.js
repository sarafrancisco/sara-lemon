import React  from 'react';
import people from './people';
import star from '../Images/star.png';

 const Testimonials = () => {
   return (
      <div className='testimonials'>
        <div className='testimonials-header'>
          <h2>Testimonials</h2>
          <h6>Read what others say about us</h6>
        </div>
        <section className='reviews'>
          {people.map((reviews) => (
            <article key={reviews.id} className='person'>
              <img src={reviews.image} alt=""/>
              <h4>{reviews.name}</h4>
              <h5>{reviews.review}<img src={star} alt='star' className='star'/></h5>
              <p>"{reviews.say}"</p>  
            </article>
          ))}
        </section>
      </div>
    );
  };

export default Testimonials;