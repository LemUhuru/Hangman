import { connect } from 'react-redux'
import App from './App'
import { setCurrentWord } from '../modules/word/actions'


const mapStateToProps = ({ word }) => {
  const { isGameOver } = word

  return {
    isGameOver,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setCurrentWord: currentWord => dispatch(setCurrentWord(currentWord)),
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)
