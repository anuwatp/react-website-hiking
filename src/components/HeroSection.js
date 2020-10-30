import React, { useState } from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import '../../node_modules/react-modal-video/css/modal-video.min.css';
import ModalVideo from 'react-modal-video';
import { Link } from 'react-router-dom';

function HeroSection() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className='hero-container'>
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <ModalVideo channel="custom" url="/videos/hiking-trailer.mp4" autoplay isOpen={isOpen} onClose={() => setOpen(false)} />

      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          <Link to='/sign-up'>
            GET STARTED
        </Link>
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={() => setOpen(true)}
        >
          WATCH VIDEO <i className='far fa-play-circle' />
        </Button>
      </div>
    </div >
  );
}

export default HeroSection;
