import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user1 from '../../assets/user-1.png'
import user2 from '../../assets/user-2.png'
import user3 from '../../assets/user-3.png'
import user4 from '../../assets/user-4.png'



const Testimonials = () => {
    const slider = useRef();
    let tx = 0;


    const moveForward = () =>{
        if(tx>-50){
            tx = tx -25;
            
        }
        slider.current.style.transform = `translateX(${tx}%)`;
        
    }

    const moveBackward = () =>{
        
        if(tx<0){
            tx = tx + 25;

        }
        slider.current.style.transform = `translateX(${tx}%)`;
        
    }

  return (
    <div className='Testimonials'>
        <img src={back_icon} className='arrow' alt="" onClick={moveBackward}/>
        <div className='slider'>
            <ul ref={slider}>
            <li><div className="testimonial_card">
            <div className='details' ><img src={user1} className='user' alt="" />
            <div className='address'><p>Emily Williams</p>
            <p>Edusity, USA</p></div></div>
            <div className='description'>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. 
            The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</div>
        </div></li>
        <li><div className="testimonial_card">
            <div className='details' >
            <img src={user2} className='user' alt="" />
            <div className='address'><p>William Jackson</p>
            <p>Edusity, USA</p></div>
            </div>
            <div className='description'>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. 
            The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</div>
        </div></li>
       
        
        <li><div className="testimonial_card">
            <div className='details' >
            <img src={user3} className='user' alt="" />
            <div className='address'><p>Sean Abbot</p>
            <p>Edusity, USA</p></div>
            </div>
            <div className='description'>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. 
            The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</div>
        </div>
        </li>
      
       <li> <div className="testimonial_card">
            <div className='details' >
            <img src={user4} className='user' alt="" />
            <div className='address'><p>James Neesham</p>
            <p>Edusity, USA</p></div>
            </div>
            <div className='description'>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. 
            The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</div>
        </div>
        </li>
        </ul>
        </div>
        <img src={next_icon} className='arrow' alt="" onClick={moveForward}/>
        
    </div>
  )
}

export default Testimonials
