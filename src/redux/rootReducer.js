import { combineReducers } from 'redux'
import cats from './reducers/cats'

const rootReducer = combineReducers({
  cats
})

export default rootReducer
