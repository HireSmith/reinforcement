import QuestionCard from "../components/questioncard"
import { connect, useSelector } from 'react-redux';
import { jsx } from "@emotion/react";

interface RootState {
  company: [],
  question: [],
  answer: [],
  type: []
}


// const mapStateToProps = state => ({
//   // add pertinent state here
//   company: state.company,
//   question: state.question,
//   answer: state.answer,
//   isLoggedIn: state.isLoggedIn,
//   ssId: state.ssId,
// });

export default function CardsContainer(): JSX.Element {

  const company = useSelector((state: RootState) => state.company);
  const question = useSelector((state: RootState) => state.question);
  const answer = useSelector((state: RootState) => state.answer);
  const type = useSelector((state: RootState) => state.type);

  const cardsArr = []
  for (let i = 0; i < question.length; i++) {
    cardsArr.push(
      <QuestionCard
        key={i}
        company={company[i]}
        question={question[i]}
        answer={answer[i]}
        type={type[i]}
        />
    )
  }
  return(
    <div id="cards-container">
      {cardsArr}
    </div>
  )
}

// export default connect(mapStateToProps, null)(CardsContainer);