import React, { useRef, useState,useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";


const Training = () => {
  
  const [noofSlides,setnoofSlides]=useState(3);
  useEffect(() => {
    if(window.screen.width>=998)
    {
      setnoofSlides(3);
    }else if(window.screen.width>768 && window.screen.width<998)
      setnoofSlides(2);
    else
    setnoofSlides(1);
  }, [window])
  
  return (
    <div className='training'>
            <h1 className='tr'>CLASSES AND TRAINING EXERCISE</h1>
            <p className="para1">
            Our classes are cutting-edge workouts designed through proven exercise science. <br></br>The classes feature high-intensity workouts, fun music, and energetic coaches.
            </p>
            <div className="swiper">

            
            <Swiper
            slidesPerView={noofSlides}
            spaceBetween={30}
            slidesPerGroup={noofSlides}
            loop={true} 
            // loopFillGroupWithBlank={true}
           
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
            >
        <SwiperSlide>
        <div data-aos="slide-up" className="card"style={{width: "10rem;",height:"50rem"}}>
        <img className="card-img-top" src="P1.jpg" alt="Card image cap"/>
        <div className="card-bodybox"><br></br>
            <h5 className="card-title">Personal Training</h5>
            <p className="card-text">Provides customized fitness programs tailored to individual goals, offering personalized coaching and attention for optimal results.</p>
           
        </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div data-aos="slide-up"  className="card" style={{borderRadius:"10px", width: "10rem;",height:"50rem"}}>
        <img className="card-img-top" src="p2.jpg" alt="Card image cap"/>
        <div className="card-bodybox"><br></br>
            <h5 className="card-title">Studio Classes</h5>
            <p className="card-text">Offers a variety of group fitness classes in a specialized environment, fostering community and motivation through structured workouts led by instructors.</p>
           
        </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div data-aos="slide-up" className="card"style={{width: "10rem;",height:"50rem"}}>
        <img className="card-img-top" src="p3.jpg" alt="Card image cap"/>
        <div className="card-bodybox"><br></br>
            <h5 className="cardtitle">Free Weights</h5>
            <p className="cardtext">Dedicated to strength training with a focus on free weights and resistance equipment, promoting functional strength and muscle development in an unrestricted environment.</p>
           
        </div>
        </div>
        </SwiperSlide>
        
        
      </Swiper>

        <div className="trainingbottom">
            <h1 className="bottrtomheading">
            GET FULL ACCESS TO PERSONAL TRAINING AND FREE WEIGHTS.
            </h1>
            {/* <button className="btn-primary">START TODAY</button> */}
            <p>Push your personal limits and build new skills.</p>
        </div>

      </div>
    </div>
  )
}

export default Training