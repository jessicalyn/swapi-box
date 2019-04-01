import { combineReducers } from 'redux'
import { loadingReducer } from './loadingReducer'
import { errorReducer } from './errorReducer'
import { movieReducer } from './movieReducer'
import { dataReducer } from './dataReducer'
import { cardsReducer } from './cardsReducer'

export const rootReducer = combineReducers({
  error: errorReducer,
  isLoading: loadingReducer,
  movie: movieReducer,
  fetchedData: dataReducer,
  currentCards: cardsReducer
})