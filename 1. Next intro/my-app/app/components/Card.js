import React from 'react'

const Card = (props) => {
  return (
    <div id='card'>
        <h1>This is card</h1>
        <img src= {props.img} alt="error" />
        <div className="title">{props.title}</div>
        <div className = "description">{props.desc}</div>
    </div>
  )
}

export default Card