import React  from 'react';
import recipes from "./recipes";

 const Highlights = () =>  {
  
  return (
   <div className="menu-container">
    <div className="menu-header">
      <h2>This weeks specials!</h2>
      <button className='online-menu'>Online Menu</button>
    </div>
    <section className='cards'>
     {recipes.map((recipe) => (
          <article key={recipe.id} className="menu-items">
            <img src={recipe.image} alt="" />
            <div className="menu-content">
              <div className="heading">
                <h5 className='menu-title'>{recipe.title}</h5>
                <p className='menu-price'>${recipe.price}</p>
              </div>
              <p className='description'>{recipe.description}</p>
              <button className="orderbtn">Order Now</button>
            </div>
          </article>
        ))}
    </section>
  </div>
   );
 };

export default Highlights;