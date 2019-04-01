import * as actions from './index'

describe('actions', () => {
  it('should return a type of HAS_ERROR with message', () => {
    const message = "Sorry something went wrong"
    const expected = {
      type: "HAS_ERROR",
      message
    }
    const result = actions.hasError(message)

    expect(result).toEqual(expected)
  });

  it('should return a type of IS_LOADING with message', () => {
    const message = "Your content is loading"
    const expected = {
      type: "IS_LOADING",
      message
    }
    const result = actions.isLoading(message)

    expect(result).toEqual(expected)
  });

  it('should return a type of ADD_MOVIE with movie', () => {
    const movie = {
      title: "Return of the Jedi", 
      year: 2019, 
      crawl: "This is the movie text"
    }
    const expected = {
      type: "ADD_MOVIE",
      movie
    }
    const result = actions.addMovie(movie)

    expect(result).toEqual(expected)
  });

  it('should return a type of UPDATE_DATA with data', () => {
    const data = [
      {
        category: "people",
        name: "Luke Skywalker"
      }
    ]
    const expected = {
      type: "UPDATE_DATA",
      data
    }
    const result = actions.updateData(data)

    expect(result).toEqual(expected)
  });

  it('should return a type of SHOW_CARDS with data', () => {
    const data = [
      {
        category: "people",
        name: "Luke Skywalker"
      }
    ]
    const expected = {
      type: "SHOW_CARDS",
      data
    }
    const result = actions.showCards(data)

    expect(result).toEqual(expected)
  });

  it('should return a type of TOGGLE_FAVORITE with a name', () => {
    const name = "Luke Skywalker"
    const expected = {
      type: "TOGGLE_FAVORITE",
      name
    }
    const result = actions.toggleFavorite(name)

    expect(result).toEqual(expected)
  });
})