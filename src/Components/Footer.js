import React  from 'react';
import restaurant from '../Images/restaurant.jpg'

 const Footer = () => {
   return (
      <footer>
        <section>
          <img src={restaurant} alt='Little Restaurant terrace'/>
          <div className='footer-info'>
                <div className='doormat_navigation'>
                    <h4>Important Links</h4>
                    <ul>
                        <li><a href='/'>Home</a></li>
                        <li><a href='/'>About</a></li>
                        <li><a href='/'>Menu</a></li>
                        <li><a href='/Booking'>Reservations</a></li>
                        <li><a href='/'>Order Online</a></li>
                        <li><a href='/'>Login</a></li>
                    </ul>
                </div>
                <div className='social_media'>
                <h4>Social Media</h4>
                    <ul>
                        <li><a href="https://www.instagram.com">Instagram</a></li>
                        <li><a href="https://www.facebook.com">Facebook</a></li>
                        <li><a href="https://www.twitter.com">Twitter</a></li>
                    </ul>
                </div>
                <div className='contact'>
                <h4>Contact Info</h4>
                    <ul>
                        <li>Adress: <br/> 123 Town Street, Chicago</li>
                        <li>E-mail: <br/>littlelemon@restaurant.com</li>
                        <li>Phone Number: <br/> +00 123 456 789</li>
                    </ul>
                </div>
            </div>
        </section>
      </footer>
    );
  };

export default Footer;