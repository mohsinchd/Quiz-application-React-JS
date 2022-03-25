import React, { useContext } from "react";
import EndScreen from "./components/EndScreen";
import MainMenu from "./components/MainMenu";
import Quiz from "./components/Quiz";
import QuizContext from "./Helpers/QuizContext";

const App = () => {
  const { gameState } = useContext(QuizContext);

  return (
    <div className="container mt-5 p-2">
      <h1 className="text-center display-4">Quiz App</h1>
      <small className="text-center d-block">Small Project to take Quiz</small>
      <main>
        <div className="card card-body w-50 m-auto bg-primary text-light text-center mt-3 p-5">
          {gameState === "mainMenu" && <MainMenu />}
          {gameState === "quiz" && <Quiz />}
          {gameState === "endScreen" && <EndScreen />}
        </div>
      </main>
    </div>
  );
};

export default App;
