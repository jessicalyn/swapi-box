import { movieReducer } from './movieReducer'
import * as actions from '../actions'

describe('movieReducer', () => {
  it('should return the initial state', () => {
    const expected = []
    const result = movieReducer([], {})

    expect(result).toEqual(expected)
  })

  it('should return the state with a movie added', () => {
    const initialState = []
    const mockMovie = {
      title: "Return of the Jedi", 
      year: 2019, 
      crawl: "This is the movie text"
    }
    const action = actions.addMovie(mockMovie)
    const expected = {
      title: "Return of the Jedi", 
      year: 2019, 
      crawl: "This is the movie text"
    }
    const result = movieReducer(initialState, action)

    expect(result).toEqual(expected)
  })
})