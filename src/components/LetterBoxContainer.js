import { connect } from 'react-redux'
import LetterBox from './LetterBox'
import { updateSelectedLetters, updateGameState,
decrementTotalTries } from '../modules/word/actions'

const mapStateToProps = ({ word }) => {

  return {
    word,
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
)(LetterBox)
