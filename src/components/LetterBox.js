import React, { Component } from 'react'
import { getRandomInt } from '../helpers/utils'
import { hasWinningLetter, getWinningLetters,
  hasWinningWord, hasSelectedLetter } from '../helpers/word'

class LetterBox extends Component {
  constructor(props) {
    super(props)

    this.handleLetterClick = this.handleLetterClick.bind(this)
  }



  handleLetterClick(letter) {
    const { updateSelectedLetters, decrementTotalTries, word } = this.props
    const { selectedLetters, currentWord, totalTries, isGameOver } = word
    const isSelectedLetter = hasSelectedLetter(letter, selectedLetters)
    const isWinningLetter = hasWinningLetter(currentWord, letter)
    const shouldDecrement = !isWinningLetter && !isSelectedLetter && !isGameOver
    const shouldUpdateLetters = !isSelectedLetter && !isGameOver

    if (shouldDecrement) {
      decrementTotalTries()
    }

    if (shouldUpdateLetters) {
      updateSelectedLetters(letter)
    }
  }

  componentDidUpdate(prevProps) {
    const { word } = this.props
    const { isGameOver } = word

    if (!isGameOver) {
      console.log(prevProps.word.totalTries > 0, 'hey')
      const { word, updateGameState } = this.props
      const { currentWord, selectedLetters, totalTries } = word
      const isWinningWord = hasWinningWord(currentWord, selectedLetters)
      const isGameOver = isWinningWord || totalTries <= 0

      if (isGameOver) {
        updateGameState(isGameOver)
      }
    }
  }

  render() {
    const { key = 0, letter, word } = this.props
    const { selectedLetters } = word
    const isSelectedLetter = selectedLetters.includes(letter)
    const classNames = `blue letter-block  ${isSelectedLetter && 'disabled'}`
    const formattedLetter = letter.toUpperCase()

    return (
      <li
        key={key}
        className={classNames}
        onClick={() => this.handleLetterClick(letter)}
        >
        <span>{formattedLetter}</span>
      </li>
    )
  }
}



export default LetterBox
