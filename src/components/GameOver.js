import React, { Component } from 'react'
import { resetGame } from '../modules/word/actions'
import { connect } from 'react-redux'

const GameOver = ({ resetGame }) => {
  return (
    <button
      onClick={() => resetGame()}
      className="game-over-btn"
      >
      Play Again
    </button>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    resetGame: () => dispatch(resetGame()),
  }
}

export default connect(
  null,
  mapDispatchToProps,
)(GameOver)
