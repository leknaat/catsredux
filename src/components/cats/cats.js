import React from 'react'

export default (props) => {
  return (
   <div>
    <p>{props.currentCat.name}</p>
    <img src={props.currentCat.img} />
    <button onClick={() => props.getRandomCat()}>Give me another cat!</button>
  </div>
  )
}
