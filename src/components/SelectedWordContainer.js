import { connect } from 'react-redux'
import SelectedWord from './SelectedWord'

const mapStateToProps = ({ word }) => {
  const { currentWord, selectedLetters } = word

  return {
    currentWord,
    selectedLetters,
  }
}

export default connect(
  mapStateToProps,
)(SelectedWord)
