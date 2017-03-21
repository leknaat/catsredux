import React from 'react'

export default (props) =>
  <div>
    <p>Currently viewing: <b>{props.currentCat.name}</b></p>
    <p><img src={props.currentCat.img} /></p>
    <button onClick={() => props.giveRandomCat()}>Another cat, please!</button>
    <p>All cats were sourced ethically and locally. Pls2not report us, thx.</p>
    <p>If you were (un?)fortunate enough to get the same kitty twice, just click again!</p>
  </div>
