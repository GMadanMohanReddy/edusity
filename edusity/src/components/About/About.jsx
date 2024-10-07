import React from 'react'
import './About.css'
import about_icon from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
      <div className='about_icon'><img src={about_icon} className='image' alt="" />
      <img src={play_icon} className='icon' alt="" /></div>
      <div className='about_description'><h2>About University</h2>
      <h1>Nurturing Tomorrow's Leaders Today</h1>
      <p>Embark on a transformative educational journey with our university's comprehensive education programs. Our 
        cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the d
        ynamic field of education. <br />
        With a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring educators to 
        make a meaningful impact in classrooms, schools, and communities. <br />
       .</p></div>
    </div>
  )
}

export default About
