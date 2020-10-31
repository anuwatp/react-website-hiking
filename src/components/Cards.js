import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Discover Norway</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/trolltunga.jpg'
              title='Trolltunga'
              text='The most spectacular rock formation in Norway.'
              label='Demanding'
              path='/places-to-go/trolltunga'
              />
            <CardItem
              src='images/besseggen.jpg'
              title='Besseggen'
              text="Besseggen is considered to be Norway's clearest lake. "
              label='More demanding'
              path='/places-to-go/besseggen'
              />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/ryten.jpg'
              title='Ryten'
              text='View from the mountain Ryten is second to none, with the long, golden beach far below.'
              label='Easy'
              path='/places-to-go/ryten'
              />
            <CardItem
              src='images/kjerag.jpg'
              text='Beautiful view of the Lysefjord from the plateau.'
              title='Kjerag'
              label='More demanding'
              path='/places-to-go/kjerag'
              />
            <CardItem
              src='images/preikestolen.jpg'
              title='Preikestolen'
              text='One of the country’s most spectacular photo subjects.'
              label='Easy'
              path='/places-to-go/preikestolen'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
