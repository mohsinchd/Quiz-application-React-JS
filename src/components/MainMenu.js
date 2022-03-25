import React, { useContext } from "react";
import QuizContext from "../Helpers/QuizContext";
const MainMenu = () => {
  const { setGameState } = useContext(QuizContext);
  return (
    <div>
      <h3>Welcome to the Quiz Application</h3>
      <button
        onClick={() => setGameState("quiz")}
        className="btn btn-light text-center"
      >
        Start The Quiz
      </button>
    </div>
  );
};

export default MainMenu;
