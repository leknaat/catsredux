import React from 'react'
import _ from 'lodash'
import Cats from './cats'

export default (props) =>
  <div>
    {_.map(props.cats, (cats) => <Cats cats={cats} key={cats.id} />)}
    <p>Please enjoy a random, locally and ethically sourced cat.</p>
    <Button onClick={() => props.onTodoAdded()}></Button>
  </div>
