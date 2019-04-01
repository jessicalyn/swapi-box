import React from 'react'
import { CardContainer, mapStateToProps } from './CardContainer'
import { shallow } from 'enzyme'

describe('CardContainer', () => {
  describe('CardContainer', () => {
    let wrapper

    const mockCard = {
      name: "Naboo", 
      terrain: "grassy hills, swamps, forests, mountains", 
      population: "4500000000", 
      climate: "temperate", 
      residents: ["R2-D2", "Palpatine"]
    }

    beforeEach(() => {
      const mockCurrentCards = [{
        name: "Luke Skywalker",
        category: "people"
      },
      {
        name: "Chewbaca",
        category: "people"
      }]
      wrapper = shallow(<CardContainer currentCards={ mockCurrentCards } />)
    });

    it.skip('should match the snapshot with all data passed in', () => {
      expect(wrapper).toMatchSnapshot()
    });

  });

  describe('mapStateToProps', () => {
    it('should return an object with the currentCards', () => {
      const mockState = {
        error: "",
        isLoading: "",
        currentCards: [{
          name: "Luke Skywalker",
          category: "people"
        },
        {
          name: "Chewbaca",
          category: "people"
        }]
      }
      const expected = { currentCards: [{
        name: "Luke Skywalker",
        category: "people"
      },
      {
        name: "Chewbaca",
        category: "people"
      }]}

      const mappedProps = mapStateToProps(mockState)

      expect(mappedProps).toEqual(expected)
    })
  })
})