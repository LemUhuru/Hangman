import { combineReducers } from 'redux'
import wordReducer from '../modules/word/reducer'


export default combineReducers({
  word: wordReducer,
})
