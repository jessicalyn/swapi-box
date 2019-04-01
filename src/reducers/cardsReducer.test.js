import { cardsReducer } from './cardsReducer'
import * as actions from '../actions'

describe('cardsReducer', () => {
  it('should return the initial state', () => {
    const expected = []
    const result = cardsReducer([], {})

    expect(result).toEqual(expected)
  });

  it('should return the state with cards data added', () => {
    const initialState = []
    const mockData = [
      {
        category: "people",
        name: "Luke Skywalker"
      }
    ]
    const action = actions.showCards(mockData)
    const expected = [
      {
        category: "people",
        name: "Luke Skywalker"
      }
    ]
    const result = cardsReducer(initialState, action)

    expect(result).toEqual(expected)
  })
})