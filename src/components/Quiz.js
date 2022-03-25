import React, { useState, useContext } from "react";
import QuizContext from "../Helpers/QuizContext";
import { Questions } from "../Helpers/Questions";
const Quiz = () => {
  const { totalMarks, setTotalMarks, setGameState } = useContext(QuizContext);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const nextQuestion = () => {
    if (Questions[currentQuestion].answer === selectedOption) {
      setTotalMarks(totalMarks + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };
  return (
    <>
      <h3>{Questions[currentQuestion].prompt}</h3>
      <button
        onClick={() => setSelectedOption("A")}
        className="btn btn-light mb-2"
      >
        {Questions[currentQuestion].optionA}
      </button>
      <button
        onClick={() => setSelectedOption("B")}
        className="btn btn-light mb-2"
      >
        {Questions[currentQuestion].optionB}
      </button>
      <button
        onClick={() => setSelectedOption("C")}
        className="btn btn-light mb-2"
      >
        {Questions[currentQuestion].optionC}
      </button>
      <button
        onClick={() => setSelectedOption("D")}
        className="btn btn-light mb-2"
      >
        {Questions[currentQuestion].optionD}
      </button>
      <div>
        {currentQuestion < Questions.length - 1 && (
          <button onClick={nextQuestion} className="btn btn-secondary">
            Next Question
          </button>
        )}
        {currentQuestion === Questions.length - 1 && (
          <button
            onClick={() => setGameState("endScreen")}
            className="btn btn-secondary"
          >
            Finish Quiz
          </button>
        )}
      </div>
    </>
  );
};

export default Quiz;
