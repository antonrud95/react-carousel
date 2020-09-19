import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';

import CarouselItem from './Item';

import './App.css'
 
const App = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;

  const titles = [
    {id: 1, title: 'First card'},
    {id: 2, title: 'Second card'},
    {id: 3, title: 'Third card'},
    {id: 4, title: 'Fourth card'}
  ]

  const changeActiveIndex = index => {
    if (index >= 0 && index <= titles.length - 1) {
      setActiveItemIndex(index);
      console.log(index)
    }
  };

  


  return (
    <div style={{ padding: `0 ${chevronWidth}px` }}>
      <ItemsCarousel
        requestToChangeActive={changeActiveIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={2}
        gutter={20}
        leftChevron={<button>{'<'}</button>}
        rightChevron={<button>{'>'}</button>}
        outsideChevron
        chevronWidth={chevronWidth}
        infiniteLoop={true}
        classes={{
          rightChevronWrapper: 'right-ch',
          leftChevronWrapper: 'left-ch',
        }}
        
      >
        {titles.map((title, index) => {
          // console.log(index)
          if (activeItemIndex === index) {
            return (
              <CarouselItem title={title.title} className="item-wrapper" key={Date.now()} />
            );
          } else {
            return (
              <CarouselItem title={title.title} className="item-wrapper-opacity" key={Date.now()} />
            );
          }
        })}  
      </ItemsCarousel>
    </div>
  );
};

export default App