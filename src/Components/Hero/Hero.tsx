import React from 'react';
import './Hero.css';
import { MapPinIcon } from '@heroicons/react/24/solid'; 
import CountUp from 'react-countup';

const Hero: React.FC = () => {
  return (
    <section className='hero-wrapper'>
      <div className='paddings innerWidth flexCenter hero-container'>
        <div className='hero-left'>
          <div className='hero-title'>
            <h1>
              Discover <br />
              Most Suitable <br /> Property
            </h1>
          </div>
          <div className='fiexColStart hero-des'>
            <span>Find a variety of properties that suit you very easily</span>
            <span>Forget difficulties in finding a residence for you</span>
          </div>
          <div className='search-bar'>
            <MapPinIcon color="var(--blue)" className="icon" style={{ width: 25, height: 25 }} />
            <input type="text" />
            <button className='button'>Search</button>
          </div>
          <div className='flexCenter stats'>
            <div className='flexColStart stat'>
              <span>
                <CountUp start={8800} end={9000} duration={4}/>
                <span>+</span>
              </span>
              <span>Premium Products</span>
            </div>
            <div className='flexColStart stat'>
              <span>
                <CountUp start={1950} end={2000} duration={4}/>
                <span>+</span>
              </span>
              <span>Happy Curstomers</span>
            </div>
            <div className='flexColStart stat'>
              <span>
                <CountUp end={28} duration={4}/>
                <span>+</span>
              </span>
              <span>Award winning</span>
            </div>
          </div>
        </div>
       
        <div className='flexCenter hero-right'>
          <div className='image-container'>
            <img src="./istockphoto-1196537229-612x612.jpg" alt="" width={'100%'} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
