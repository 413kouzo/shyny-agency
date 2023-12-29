import { useParams, Link } from 'react-router-dom'

function Survey() {
  const { questionNumber } = useParams()
  const questionNuberInt = parseInt(questionNumber)
  const prevQuestionNumber = questionNuberInt === 1 ? 1 : questionNuberInt - 1
  const nextQuestionNumber = questionNuberInt + 1
  return (
    <div>
      <h1>Questionnaire ⁉</h1>
      <h2>Question {questionNumber}</h2>
      <Link to={`/survey/${prevQuestionNumber}`}>Precedent</Link>
      {questionNuberInt === 10 ? (
        <Link to="/results">Resultat</Link>
      ) : (
        <Link to={`/survey/${nextQuestionNumber}`}>Suivant</Link>
      )}
    </div>
  )
}

export default Survey
