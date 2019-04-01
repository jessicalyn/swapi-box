export const movieReducer = (state = [], action) => {
  switch (action.type) {
    
    case 'ADD_MOVIE':
      return action.movie

    default:
      return state
  }
}