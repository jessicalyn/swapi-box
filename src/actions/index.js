export const hasError = (message) => ({
  type: "HAS_ERROR",
  message
})

export const isLoading = (message) => ({
  type: "IS_LOADING",
  message
})

export const addMovie = (movie) => ({
  type: 'ADD_MOVIE',
  movie
})

export const updateData = (data) => ({
  type: 'UPDATE_DATA',
  data
})

export const showCards = (data) => ({
  type: 'SHOW_CARDS',
  data
})

export const toggleFavorite = (name) => ({
  type: 'TOGGLE_FAVORITE',
  name
})