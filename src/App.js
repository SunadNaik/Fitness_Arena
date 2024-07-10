// Import Swiper React components

import {useEffect} from 'react'
import './App.css';
import Nav from './Components/Nav';
import MainSection from './Components/MainSection';
import Training from './Components/Training';
import Schedule from './Components/Schedule';
import Pricing from './Components/Pricing';
import Map from './Components/Map';
import Footer from './Components/Footer';
import   Aos from 'aos';
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    Aos.init();
  }, [])
  
  return (
    
   <div className='app'>
    <Nav/>
    <MainSection/>
    <Training/>
    <Schedule/>
    <Pricing/>
    <Map/>
    <Footer/>
   </div>
  );
}

export default App;
