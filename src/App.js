import React from 'react';
import BackgroundImage from'./BackgroundImage';
import Title from './Title';
import ImageCarousel from'./ImageCarousel';
import './App.css';

const App=()=> {
  return (
    <div className="App">
       <BackgroundImage/>  
       <Title/>
       <ImageCarousel/>
    </div>
  );
}

export default App;
