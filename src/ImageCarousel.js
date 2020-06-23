import React from 'react';
import Trabant from './image/Trabant.jpg';
import Wartsberg from './image/Wartsberg.jpg';
import Lada from './image/Lada-2105.jpg';
import Gaz from './image/Gaz21.jpg'
const ImageCarousel =()=>{
        const images=[ Trabant,Wartsberg,Lada,Gaz]
    
return (
  <div>
    <img className="car-image" src={images[0]} alt="Eastern Bloc Cars" />
  </div>
);
}


export default ImageCarousel;
