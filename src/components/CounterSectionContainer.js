import CounterSection from './CounterSection'
import { connect } from 'react-redux'

const mapStateToProps = ({ word }) => {
  const { totalTries } = word

  return {
    totalTries,
  }
}


export default connect(
  mapStateToProps,
)(CounterSection)
