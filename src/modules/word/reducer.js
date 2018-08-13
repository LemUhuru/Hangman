import {
  UPDATE_SELECTED_LETTERS,
  UPDATE_GAME_STATE,
  DECREMENT_TOTAL_TRIES,
  SET_CURRENT_WORD,
  RESET_GAME,
} from './types'


const INITIAL_STATE = {
  isGameOver: false,
  totalTries: 7,
  selectedLetters: [],
  currentWord: "",
  currentLetter: '',
}

export default function reducer(state = INITIAL_STATE, action = {}) {
  switch(action.type) {
    case UPDATE_SELECTED_LETTERS:
      return {
        ...state,
        selectedLetters: [...state.selectedLetters, action.payload]
      }

    case UPDATE_GAME_STATE:
      return {
        ...state,
        isGameOver: action.payload,
      }

    case DECREMENT_TOTAL_TRIES:
      return {
        ...state,
        totalTries: state.totalTries -= 1,
      }

    case SET_CURRENT_WORD:
      return {
        ...state,
        currentWord: action.payload,
      }

    case RESET_GAME:
      return {
        ...state,
        isGameOver: false,
        totalTries: 7,
        selectedLetters: [],
      }

    default:
      return state
  }
}
