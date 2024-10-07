import React from 'react'
import './Program.css'
import Program1 from '../../assets/program-1.png'
import Program2 from '../../assets/program-2.png'
import Program3 from '../../assets/program-3.png'
import Caption1 from '../../assets/program-icon-1.png'
import Caption2 from '../../assets/program-icon-2.png'
import Caption3 from '../../assets/program-icon-3.png'


const Program = () => {
  return (
    <div className='Programs'>

      <div className='Program'>
        <img src={Program1} alt="" />
        <div className="caption">
          <img src={Caption1} alt="" />
        <p>Graduation Degree</p></div>
      </div>
      <div className='Program'>
        <img src={Program2} alt="" />
        <div className="caption"><img src={Caption2} alt="" />
        <p>Masters Degree</p></div>
      </div>
      <div className='Program'>
        <img src={Program3} alt="" />
        <div className="caption"><img src={Caption3} alt="" />
        <p>Post Graduation</p></div>
      </div>
    </div>
  )
}

export default Program
