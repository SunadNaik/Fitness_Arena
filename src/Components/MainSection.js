import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay,EffectFade, Navigation, Pagination} from 'swiper';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import "../App.css"


const MainSection = () => {
  return (
      <div className='mainSection'>
      
    <div className='topswiper'>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay,EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >   
        <SwiperSlide>
            <div className='section section1'>
                <h1 className='heading'>Get in the best shape ever</h1>
                {/* <button className='btn-primary'>Purchase</button> */}
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='section section2'>
            <h1 className='headin'>Unlock your potential</h1>
            {/* <button className='btn-primary'>Purchase</button> */}
            </div>
        </SwiperSlide> 
      </Swiper>
    </div>
    <div className='whychooseus'>
        <div className='form'>
            <div className='left'>
                <h1 className='heading1'> COMPLIMENTARY 30-DAY WORKOUT PASS</h1>
                <p>One pass per person, per six months. Guest must prove that they are at least 18 years of age.
                </p>
                <form>
                    <input placeholder='Name'/>
                    <input placeholder='Phone'/>
                    <input placeholder='Email'/>
                    <button className='btn-primary'>get started</button>
                </form>
            </div>
            <div className='right'>

            </div>
        </div> 
        {/* <div className='bottom'> */}
            {/* <div className='left'  data-aos="fade-up">
                <h1 className='heading1'>
                WHY CHOOSE US?
                BECAUSE WE’RE THE BEST.
                </h1>
                <div className='features'>
                <ul className='leftul'>
                  
                    <li data-icon="✔"> Friendly atmosphere</li>
                    <li data-icon="✔"> High-level traininge</li>
                    <li data-icon="✔"> Fantastic trainers</li>
                </ul>
                <ul className='rightul'>
                    <li data-icon="✔"> Challenging workouts</li>
                    <li data-icon="✔"> Exercise regime</li>
                    <li data-icon="✔"> Exercise variety</li>
                </ul>
                </div>
            </div> */}
            {/* <div className='right'>
                <div className='box'>
                    <h2>Flexibility and patience</h2>
                    <p>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
                <div className='box'>
                    <h2>Flexibility and patience</h2>
                    <p>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className='box'>
                    <h2>Flexibility and patience</h2>
                    <p>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
                <div className='box'>
                    <h2>Flexibility and patience</h2>
                    <p>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div> */}
         
        {/* </div> */}
           
        </div>
    </div>
  )
}

export default MainSection