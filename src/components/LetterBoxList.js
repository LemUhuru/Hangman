import React, { Component } from 'react'
import LetterBox from './LetterBoxContainer'
import { alphabets } from '../constants'

const LetterBoxList = () => {
  const letterBoxes = alphabets.map((letter, index) => {
    return <LetterBox key={index} letter={letter} />
  })

  return (
    <ul className="letter-box-container">
      {letterBoxes}
    </ul>
  )
}

export default LetterBoxList
