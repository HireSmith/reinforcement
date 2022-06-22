import * as actionTypes from '../constants/actionTypes.js'

const initialState = {
  ssId: 0, // session id returned from oauth and bcrypt
  isLoggedIn: false, // is the user logged in
  question: '', // what interview question was asked
  answer: '', // what is the answer to that question
  company: '' // what company asked the question
};

const reducer = (state = initialState, action) => {
//add card
//update card
//login
  
  const { question, company, answer } = action.payload;
  switch (action.type) {
    case actionTypes.ADD_CARD:
      // adds a new card
      return { ...state, question, answer, company }
    
    case actionTypes.UPDATE_CARD:
      // updates a card
      return { ...state, question, answer, company }
    
    case actionTypes.LOGGED_IN:
      // updates if logged in
      const { ssId } = action.payload;
      const isLoggedIn = state.isLoggedIn
      const loggedIn = true
      return { ...state, ssId, isLoggedIn: loggedIn }
    default:
      return state;
  }
}

export default reducer
