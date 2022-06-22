import QuestionCard from "../components/questioncard"
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  // add pertinent state here
  company: state.company,
  question: state.question,
  answer: state.answer,
  isLoggedIn: state.isLoggedIn,
  ssId: state.ssId,
});

function CardsContainer(props): JSX.Element {

  const cardsArr = []
  for (let i = 0; i < props.question.length; i++) {
    cardsArr.push(
      <QuestionCard 
        key={i}
        company={props.company[i]}
        question={props.question[i]}
        answer={props.answer[i]}
        />
    )
  }
  return(
    <div id="cards-container">
      {cardsArr}
    </div>
  )
}

export default connect(mapStateToProps, null)(CardsContainer);