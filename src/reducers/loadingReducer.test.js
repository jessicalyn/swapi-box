import { loadingReducer } from './loadingReducer'
import * as actions from '../actions'

describe('loadingReducer', () => {
  it('should return the initial state', () => {
    const expected = ""
    const result = loadingReducer("", {})

    expect(result).toEqual(expected)
  })

  it('should return the state with an error message added', () => {
    const initialState = ""
    const mockMessage = "Your content is loading"
    const action = actions.isLoading(mockMessage)
    const expected = "Your content is loading"
    const result = loadingReducer(initialState, action)

    expect(result).toEqual(expected)
  })
})