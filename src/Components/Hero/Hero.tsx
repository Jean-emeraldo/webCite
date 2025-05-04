import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className='hero-wrapper'>
      <div className='paddings innerWidth flexCenter hero-container'>
        <div className='hero-left'>
          <div className='hero-title'>
            <h1>
                Discouver <br />
                Most Suitable <br /> Progerty
            </h1>
          </div>
          <div className='fiexColStart hero-des'>
            <span>Find a variety of properties that suit you very easilty</span>
            <span>Forget difficulties in finding a residence for you</span>
          </div>
          <div className='search-bar'>
            search bar
          </div>
        </div>
        <div className='flexCenter hero-right'>
          <div className='image-container'>
            <img src="./3D.jpeg" alt="" width={'100%'} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
