import * as actionTypes from '../constants/actionTypes'

type initialState = {
  ssId: number,
  isLoggedIn: boolean,
  question: [],
  answer: [],
  company: []
}

const initialState = {
  ssId: 0, // session id returned from oauth and bcrypt
  isLoggedIn: false, // is the user logged in
  question: [], // what interview question was asked
  answer: [], // what is the answer to that question
  company: [] // what company asked the question
};

const reducer = (state = initialState, action): object => {
  //add card
  //update card
  //login

  // const { question, company, answer } = action.payload;
  let newQuestion: string, newCompany: string, newAnswer: string
  const { question, answer, company } = { ...state }
  switch (action.type) {
    case actionTypes.ADD_CARD:
      // adds a new card
      newQuestion = action.payload.newQuestion;
      newCompany = action.payload.newCompany;
      newAnswer = action.payload.newAnswer;

      question.push(newQuestion)
      answer.push(newAnswer)
      company.push(newCompany)

      return { ...state, question, answer, company }

    case actionTypes.UPDATE_CARD:
      // updates a card
      const index = question.indexOf(newQuestion)

      newQuestion = action.payload.question;
      newCompany = action.payload.company;
      newAnswer = action.payload.answer;

      question[index] = newQuestion
      answer[index] = newAnswer
      company[index] = newCompany

      return { ...state, question, answer, company }

    case actionTypes.LOGGED_IN:
      // updates if logged in
      const { ssid } = action.payload;
      const loggedIn = true
      return { ...state, ssid, isLoggedIn: loggedIn }
    default:
      return state;
  }
}

export default reducer
