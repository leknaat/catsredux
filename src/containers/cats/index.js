import React, { Component } from 'react'
import { connect } from 'react-redux'
import { giveRandomCat } from 'redux/actions/cats'
import RandomCat from 'components/cats'

class CatContainer extends Component {

  render() {
    return (
      <RandomCat giveRandomCat={() => this.props.dispatch(giveRandomCat())} currentCat={this.props.currentCat} />
    )
  }
}


export default connect((state) => state.cats)(CatContainer)
