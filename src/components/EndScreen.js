import React, { useContext } from "react";
import QuizContext from "../Helpers/QuizContext";
const EndScreen = () => {
  const { totalMarks, setGameState } = useContext(QuizContext);
  return (
    <div>
      <h3>Your Marks Were {totalMarks} / 3</h3>
      <button
        onClick={() => setGameState("mainMenu")}
        className="btn btn-light"
      >
        Start Quiz Again?
      </button>
    </div>
  );
};

export default EndScreen;
