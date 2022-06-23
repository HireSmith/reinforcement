import QuestionCard from "../components/questioncard"
import { useSelector } from 'react-redux';

// const mapStateToProps = state => ({
//   // add pertinent state here
//   company: state.company,
//   question: state.question,
//   answer: state.answer,
//   isLoggedIn: state.isLoggedIn,
//   ssId: state.ssId,
// });

export default function CardsContainer( { questionData } ): JSX.Element {

  // const company = useSelector((state: RootState) => state.company);
  // const question = useSelector((state: RootState) => state.question);
  // const answer = useSelector((state: RootState) => state.answer);
  // const type = useSelector((state: RootState) => state.type);

  // const cardsArr = []
  // for (let i = 0; i < questionData.length; i++) {
  //   cardsArr.push(
  //     <QuestionCard
  //       key={i}
  //       company={questionData.company[i]}
  //       question={questionData.question[i]}
  //       answer={questionData.answer[i]}
  //       type={questionData.type[i]}
  //       />
  //   )
  // }

  console.log(questionData)
  const cardsArr = questionData.map((q) => (
      <div key={q._id}>
        <QuestionCard
          company={q.company}
          question={q.question}
          answer={q.answer}
          type={q.question_type}
        />
      </div>
  )); 
    console.log(cardsArr)
  return (
    questionData.length && (
    <div id="cards-container">
      {/* <h1>{questionData}</h1> */}
      {/* {questionData.map((q) => {
        <div key={q._id}>
          <QuestionCard
            company={q.company}
            question={q.question}
            answer={q.answer}
            type={q.question_type}
          />
        </div>
      })} */}
      {cardsArr}
    </div>
    )
    
    
  )
}
// will u share ur localhost:8080 o done

// export default connect(mapStateToProps, null)(CardsContainer);