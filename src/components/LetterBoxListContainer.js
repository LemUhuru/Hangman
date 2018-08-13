import { connect } from 'react-redux'
import LetterBoxList from './LetterBoxList'
import { updateSelectedLetters, updateGameState,
decrementTotalTries } from '../modules/word/actions'

const mapStateToProps = state => {
  const { word } = state
  const { isGameOver, currentWord, selectedLetters,
    totalTries } = word

  return {
    isGameOver,
    currentWord,
    selectedLetters,
    totalTries,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateSelectedLetters: letter => dispatch(updateSelectedLetters(letter)),
    updateGameState: gameState => dispatch(updateGameState(gameState)),
    decrementTotalTries: () => dispatch(decrementTotalTries()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LetterBoxList)
