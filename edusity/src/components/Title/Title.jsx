import React from 'react'
import './Title.css'
const Title = (props) => {
  return (
    <div className='Title'>
      <p>{props.head1}</p>
      <h1>{props.head2}</h1>
    </div>
  )
}

export default Title
