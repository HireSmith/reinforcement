import * as actionTypes from '../constants/actionTypes'

type initialState = {
  ssId: number,
  isLoggedIn: boolean,
  question: [],
  answer: [],
  company: [],
  type: []
}

const initialState = {
  ssid: 0, // session id returned from oauth and bcrypt
  isLoggedIn: true, // is the user logged in
  question: [], // what interview question was asked
  answer: [], // what is the answer to that question
  company: [], // what company asked the question
  type: [] //type of question
};

const reducer = (state = initialState, action): object => {
  //add card
  //update card
  //login

  // const { question, company, answer } = action.payload;
  let newQuestion: string, newCompany: string, newAnswer: string, newType: string;
  const { question, answer, company, type } = { ...state }
  switch (action.type) {
    case actionTypes.ADD_CARD:
      // adds a new card
      newQuestion = action.payload.newQuestion;
      newCompany = action.payload.newCompany;
      newAnswer = action.payload.newAnswer;
      newType = action.payload.newType;

      question.push(newQuestion)
      answer.push(newAnswer)
      company.push(newCompany)
      type.push(newType)

      return { ...state, question, answer, company, type }

    case actionTypes.UPDATE_CARD:
      // updates a card
      const index = question.indexOf(newQuestion)

      newQuestion = action.payload.question;
      newCompany = action.payload.company;
      newAnswer = action.payload.answer;
      newType = action.payload.newType;

      question[index] = newQuestion
      answer[index] = newAnswer
      company[index] = newCompany
      type[index] = newType

      return { ...state, question, answer, company, type }

    case actionTypes.LOGGED_IN:
      // updates if logged in
      const { ssid } = action.payload;
      const loggedIn = true
      return { ...state, ssid, isLoggedIn: loggedIn }

    // case actionTypes.LOGGED_OUT:
    //   // updates if logged out
    //   ssid = 0;
    //   const loggedIn = false
    //   return { ...state, ssid, isLoggedIn: loggedIn }

    default:
      return state;
  }
}

export default reducer
