import React from 'react';
import { NavLink } from 'react-router-dom';

export function Home() {
  return (
    <div className="home-page">
        <h1>Prepared For The End</h1>
      <h2>
        Don't wait until it's too late, start preparing today and shop our
        collection now
      </h2>
      <NavLink 
        className='call-to-action'
        to={"/products"}
        >Survive the Apocalypse with our Top-Quality Survival Gear</NavLink>
      

      <p>
        Welcome to our website, your ultimate destination for all your survival
        needs during a zombies apocalypse. We understand the importance of being
        prepared in case of emergency and that's why we offer a wide range of
        products to help you stay alive, from food and water to self-defense
        weapons and protective gear. Browse our collection and find the perfect
        items for your survival kit.
      </p>

    </div>
  );
}
