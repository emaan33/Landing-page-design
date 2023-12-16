import './App.css';
import React from 'react';
import Blue from './LandingPage/Blue';
import End from './LandingPage/End';
import F2 from './LandingPage/F2';
import Features from './LandingPage/Features';
import Hero from './LandingPage/Hero';
import Meet from './LandingPage/Meet';
import Nav from './LandingPage/Nav';
import Paraz from './LandingPage/Paraz';
import Twobg from './LandingPage/Twobg';
import Small from './LandingPage/Small';

function App() {
  return (
    <div className="App">
   
<Nav />
{/* <Small /> */}
<Hero />
<Meet />
<Features />
<F2 />
<Blue />
<Twobg />
<Paraz />
<End />
    </div>
  );
}

export default App;
