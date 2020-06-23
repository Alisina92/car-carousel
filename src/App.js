import React,{useState} from 'react';
import BackgroundImage from'./BackgroundImage';
import Title from './Title';
import ImageCarousel from'./ImageCarousel';
import ControlCenter from'./ControlCenter';
import Trabant from "./image/Trabant.jpg";
import Wartsberg from "./image/Wartsberg.jpg";
import Lada from "./image/Lada-2105.jpg";
import Gaz from "./image/Gaz.jpg";

import './App.css';


const App=()=> {
  const [controlStateIndex, setControlStateIndex] = useState(0);
  const images = [Trabant, Wartsberg, Gaz, Lada];
   
  return (
    <div className="App">
      <BackgroundImage />
      <Title />
      <ImageCarousel
        images={images}
        controlStateIndex={controlStateIndex}
        setControlStateIndex={setControlStateIndex}
      />
      <ControlCenter
        images={images}
        controlStateIndex={controlStateIndex}
        setControlStateIndex={setControlStateIndex}
      />
    </div>
  );
}

export default App;
