import React from 'react'
import Cats from './cats'

export default (props) =>
  <div>
    <Cats giveRandomCat={() => props.randomCat()} currentCat={props.currentCat} />
  </div>
