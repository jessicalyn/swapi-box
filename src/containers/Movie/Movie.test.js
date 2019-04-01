import React from 'react'
import { Movie, mapStateToProps } from './Movie'
import { shallow } from 'enzyme'

describe('Movie', () => {
  describe('Movie', () => {
    let wrapper

    beforeEach(() => {
      const mockMovie = [{
        title: "Return of the Jedi", 
        year: 2019, 
        crawl: "This is the movie text"
      }]
      wrapper = shallow(<Movie movie={ mockMovie } />)
    });

    it('should match the snapshot with all data passed in', () => {
      expect(wrapper).toMatchSnapshot()
    });

  });

  describe('mapStateToProps', () => {
    it('should return an object with a movie', () => {
      const mockState = {
        error: "",
        isLoading: "",
        movie: [{
          title: "Return of the Jedi", 
          year: 2019, 
          crawl: "This is the movie text"
        }]
      }
      const expected = { movie: [{
        title: "Return of the Jedi", 
        year: 2019, 
        crawl: "This is the movie text"
      }]}

      const mappedProps = mapStateToProps(mockState)

      expect(mappedProps).toEqual(expected)
    })
  })
})