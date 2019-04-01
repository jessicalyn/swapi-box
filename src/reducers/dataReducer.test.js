import { dataReducer } from './dataReducer'
import * as actions from '../actions'

describe('dataReducer', () => {
  it('should return the initial state', () => {
    const expected = []
    const result = dataReducer([], {})

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
    const action = actions.updateData(mockData)
    const expected = [
      {
        category: "people",
        name: "Luke Skywalker"
      }
    ]
    const result = dataReducer(initialState, action)

    expect(result).toEqual(expected)
  });

})