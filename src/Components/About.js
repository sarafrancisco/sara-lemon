import React  from 'react';
import brothers from '../Images/Mario-and-Adrian-a.jpg';
import cooking from '../Images/Mario-and-Adrian-b.jpg';

 const About = () => {
   return (
      <div className='about'>
        <section>
          <div className='history'>
            <h2>Our history</h2>
            <h6>Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant.</h6>
            <h6>To craft the menu, Mario relies on family recipes and his experience as a chef in Italy. Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the Mediterranean region.</h6>
          </div>
          <div className='owners'>
              <img src={brothers} alt="Mario and Adrian cooking"/>
              <img src={cooking} alt="Mario and Adrian in the kitchen"/>
          </div>
        </section>
      </div>
    );
  };

export default About;