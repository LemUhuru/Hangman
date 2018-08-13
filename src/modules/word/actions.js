import {
  UPDATE_SELECTED_LETTERS,
  UPDATE_GAME_STATE,
  DECREMENT_TOTAL_TRIES,
  SET_CURRENT_WORD,
  RESET_GAME,
} from './types'

export const updateSelectedLetters = letter => {
  return {
    type: UPDATE_SELECTED_LETTERS,
    payload: letter,
  }
}

export const updateGameState = gameState => {
  return {
    type: UPDATE_GAME_STATE,
    payload: gameState,
  }
}

export const decrementTotalTries = () => {
  return {
    type: DECREMENT_TOTAL_TRIES,
  }
}

export const setCurrentWord = currentWord => {
  return {
    type: SET_CURRENT_WORD,
    payload: currentWord,
  }
}

export const resetGame = () => {
  return {
    type: RESET_GAME,
  }
}
