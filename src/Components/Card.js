import React from 'react'

const Card = (img,title,desc) => {
  return (
    <div className='card'>
        <img src={img}></img>
        <h1>{title}</h1>
        <p>desc</p>
    </div>
  )
}

export default Card