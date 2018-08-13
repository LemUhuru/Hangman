import { wordList } from '../constants'
import { getRandomInt } from './utils'

export function getWinningLetters(currentWord) {
  return currentWord.split('')
}

export function getWordFromList() {
  const listSize = wordList.length
  const randomInt = getRandomInt(listSize)
  
  return wordList[randomInt]
}

export function hasWinningLetter(currentWord, letter) {
  const winningLetters = getWinningLetters(currentWord)
  const isWinningLetter = winningLetters.includes(letter)

  return isWinningLetter
}

export function hasWinningWord(currentWord, selectedLetters) {
  const hasWinningLetters = getWinningLetters(currentWord)
  const isWinningWord = hasWinningLetters.every(letter => {
    return hasSelectedLetter(letter, selectedLetters)
  })

  return isWinningWord
}

export function hasSelectedLetter(letter, selectedLetters) {
  return selectedLetters.includes(letter)
}
