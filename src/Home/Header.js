import React from "react";
import './Header.css'
const Header = () => {
  return (
    <header>
      <div className="container">
        <div className='col-md-6'>
         < div className="row">
           <h2>Good food choices are good investments.</h2>
           <p>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
             purus a odio finibus bibendum amet leo.
           </p>
           <button id="order">Order Now <span className="fa fa-shopping-basket"></span></button>
           <button id="learn">Learn More <i class="fa-solid fa-chevron-right"></i></button>
         </ div>
        </div>
        <div className='col-md-6'></div>
      </div>
    </header>
  );
};

export default Header;
