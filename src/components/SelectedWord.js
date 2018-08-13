import React, { Component } from 'react'

class SelectedWord extends Component {
  renderSelectedWord() {
    const { currentWord, selectedLetters } = this.props
    const selectedWordList = currentWord.toLowerCase().split('')

    return selectedWordList.map((letter, key) => {
      const includesLetter = selectedLetters.includes(letter)
      const letterElement = includesLetter ?
        <span className="letter">{letter.toUpperCase()}</span>
        :
        <span className="placeholder"></span>

      return (
        <li key={key}>
          {letterElement}
        </li>
      )
    })
  }

  render() {
    return (
      <div>
        <ul className="selected-word-list">
          {this.renderSelectedWord()}
        </ul>
      </div>
    )
  }
}


export default SelectedWord
