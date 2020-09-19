import React from 'react';

import './item.css';

const CarouselItem = ({title, className}) => {
    return (
        <div className={className}>
            <p>{title}</p>
        </div>
    )
}

export default CarouselItem;