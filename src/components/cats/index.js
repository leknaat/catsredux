import React from 'react'
import CurrentCat from './currentcat'

export default (props) =>
  <div>
    <CurrentCat giveRandomCat={() => props.giveRandomCat()} currentCat={props.currentCat} />
  </div>
