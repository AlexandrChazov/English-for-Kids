const cardInfo = {
  gameTheme: '',
  imageUrl: '',
}

const initialState = {
  card1: cardInfo,
  card2: cardInfo,
  card3: cardInfo,
  card4: cardInfo,
  card5: cardInfo,
  card6: cardInfo,
  card7: cardInfo,
  card8: cardInfo
}

const mainReducer = (state = initialState, action: any): InitialStateType => {
  return state
}

export default mainReducer;

type InitialStateType = typeof initialState;