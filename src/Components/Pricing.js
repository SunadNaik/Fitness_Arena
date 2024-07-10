import React from 'react'
import { useState,useEffect } from 'react'
const Pricing = () => {
    const [effect,setEffect]=useState({});
    const [delay,setDelay]=useState(true);
    useEffect(() => {
        if(window.screen.width>=1200)
        {
            setEffect({
                box1:"fade-right",
                box2:"",
                box3:"fade-left"
            })
            setDelay(true)
        }
        else{
            setEffect({
                box1:"fade-right",
                box2:"fade-right",
                box3:"fade-right"
            })
            setDelay(false)
        }
    }, [])
   
  return (
    <div className='pricing'>
    <div className='parallex2'>
        <h1>
            YOU CAN DO IT.
        </h1>
        <h1>START TODAY.</h1>
        <p><b>Push your personal limits and build new skills.</b></p>
    </div>



    <div className='pricingcontainer'>
        <h1 className='heading'>PRICING PLANS AND OPTIONS </h1>
        <p className='para1'>Simple, flexible, and predictable pricing.
        Choose which package is best suited for you.</p>
        <div className='prices'>
            <div
             data-aos="fade-right" data-aos-offset={delay?"600":"100"} data-aos-delay="0" className='box box1'>
                <div className='top'>
                    <h3>Starter</h3>
                    <i class="fa-solid fa-dumbbell"></i>
                    <h2>💸8,999</h2>
                    <h4>Billed Monthly</h4>
                </div>
                <div className='bottom'>
                    <div className='item'>
                        <div className='left'>
                            <h4>Personal Training</h4>
                        </div>
                        <div className='right'>
                            <h4 className="tick">✔️</h4>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='left'>
                            <h4>Team workouts</h4>
                        </div>
                        <div className='right'>
                            <h4 className="tick">✔️</h4>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='left'>
                            <h4>Cardio classes</h4>
                        </div>
                        <div className='right'>
                            <h4 className="tick">✔️</h4>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='left'>
                            <h4>Yoga classes</h4>
                        </div>
                        <div className='right'>
                            <h4 className="tick">✔️</h4>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='left'>
                            <h4>Free weights</h4>
                        </div>
                        <div className='right'>
                            <h4>❌</h4>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='left'>
                            <h4>Stair climbers</h4>
                        </div>
                        <div className='right'>
                            <h4>❌</h4>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='left'>
                            <h4>Rowing machines</h4>
                        </div>
                        <div className='right'>
                            <h4>❌</h4>
                        </div>
                    </div>
                </div>
                <button className='btn-outline'>Get Started</button>
            </div>


            
            <div data-aos="" data-aos-offset={delay?"600":"100"} data-aos-delay={delay?"300":"0"} className='box box1'>
            <div className='top'>
                    <h3>Professional</h3>
                    <i class="fa-solid fa-person-running"></i>
                    <h2>💸13,999</h2>
                    <h4>Billed Monthly</h4>
                </div>
                <div className='bottom'>
                    <div className='item'>
                        <div className='left'>
                            <h4>Personal Training</h4>
                        </div>
                        <div className='right'>
                            <h4 className="tick">✔️</h4>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='left'>
                            <h4>Team workouts</h4>
                        </div>
                        <div className='right'>
                            <h4 className="tick">✔️</h4>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='left'>
                            <h4>Cardio classes</h4>
                        </div>
                        <div className='right'>
                            <h4 cla>✔️</h4>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='left'>
                            <h4>Yoga classes</h4>
                        </div>
                        <div className='right'>
                            <h4 className="tick">✔️</h4>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='left'>
                            <h4>Free weights</h4>
                        </div>
                        <div className='right'>
                            <h4>✔️</h4>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='left'>
                            <h4>Stair climbers</h4>
                        </div>
                        <div className='right'>
                            <h4>✔️</h4>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='left'>
                            <h4>Rowing machines</h4>
                        </div>
                        <div className='right'>
                            <h4>❌</h4>
                        </div>
                    </div>
                </div>
                <button className='btn-primary'>Get Started</button>
            </div>



            <div data-aos="fade-left" data-aos-offset={delay?"600":"100"} data-aos-delay={delay?"200":"0"} className='box box3' >
            <div className='top'>
                    <h3>Enterprise</h3>
                    <i class="fa-solid fa-building"></i>
                    <h2>💸16,999</h2>
                    <h4>Billed Monthly</h4>
                </div>
                <div className='bottom'>
                    <div className='item'>
                        <div className='left'>
                            <h4>Personal Training</h4>
                        </div>
                        <div className='right'>
                            <h4 className="tick">✔️</h4>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='left'>
                            <h4>Team workouts</h4>
                        </div>
                        <div className='right'>
                            <h4 className="tick">✔️</h4>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='left'>
                            <h4>Cardio classes</h4>
                        </div>
                        <div className='right'>
                            <h4 className="tick">✔️</h4>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='left'>
                            <h4>Yoga classes</h4>
                        </div>
                        <div className='right'>
                            <h4 className="tick">✔️</h4>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='left'>
                            <h4>Free weights</h4>
                        </div>
                        <div className='right'>
                            <h4>✔️</h4>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='left'>
                            <h4>Stair climbers</h4>
                        </div>
                        <div className='right'>
                            <h4>✔️</h4>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='left'>
                            <h4>Rowing machines</h4>
                        </div>
                        <div className='right'>
                            <h4>✔️</h4>
                        </div>
                    </div>
                </div>
                <button className='btn-outline'>Get Started</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Pricing