export const cardsReducer = (state = [], action) => {
  switch (action.type) {

    case 'SHOW_CARDS':
      return action.data

    default:
      return state
  }
}