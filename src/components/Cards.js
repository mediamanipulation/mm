import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>This media has been manipulated!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='This is information about pic 1.'
              label='Digital'
              path='/art'
            />
            <CardItem
              src='images/img-2.jpg'
              text='This is information about pic 2'
              label='Analog'
              path='/art'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='This is information about pic 3'
              label='Digital'
              path='/art'
            />
            <CardItem
              src='images/img-4.jpg'
              text='This is information about pic 4'
              label='Analog'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='This is information about pic 5'
              label='Analog'
              path='/products'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
