import React, { createContext, useState } from "react";

const QuizContext = createContext();

export const QuizContextProvider = ({ children }) => {
  const [gameState, setGameState] = useState("mainMenu");
  const [totalMarks, setTotalMarks] = useState(0);
  return (
    <QuizContext.Provider
      value={{ gameState, setGameState, totalMarks, setTotalMarks }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export default QuizContext;
