import { useState } from "react";
import Box from "./Box";
import { useEffect } from "react";

const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXTurn, setXTurn] = useState(true);
  const [winner, setWinner] = useState(null);
  const [isDraw, setDraw] = useState(false);

  const checkWhoIsWinner = () => {
    const winnerLogic = [
      //Row wise
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      //Column wise
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      //Diagonally wise
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let eachLogic of winnerLogic) {
      const [a, b, c] = eachLogic;
      if (state[a] && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }
    return null;
  };

  const checkDraw = (isWinner) =>
    state.every((each) => Boolean(each)) && !isWinner;

  const clickHandler = (index) => {
    if (state[index] !== null) {
      return;
    }
    const copyState = [...state];
    copyState[index] = isXTurn ? "X" : "O";
    setState(copyState);
    setXTurn(!isXTurn);
  };

  useEffect(() => {
    const winnerTemp = checkWhoIsWinner();
    setWinner(winnerTemp);
    setDraw(checkDraw(Boolean(winnerTemp)));
  }, [state]);

  return (
    <div className="board-container">
      {winner || isDraw ? (
        <>{isDraw ? <h1>DRAW!</h1> : <h1>{winner} Won the game</h1>}</>
      ) : (
        <>
          {isXTurn ? <h2> X Turn !!!</h2> : <h2> O Turn !!! </h2>}
          <div className="board-row">
            <Box onClick={() => clickHandler(0)} value={state[0]} />
            <Box onClick={() => clickHandler(1)} value={state[1]} />
            <Box onClick={() => clickHandler(2)} value={state[2]} />
          </div>
          <div className="board-row">
            <Box onClick={() => clickHandler(3)} value={state[3]} />
            <Box onClick={() => clickHandler(4)} value={state[4]} />
            <Box onClick={() => clickHandler(5)} value={state[5]} />
          </div>
          <div className="board-row">
            <Box onClick={() => clickHandler(6)} value={state[6]} />
            <Box onClick={() => clickHandler(7)} value={state[7]} />
            <Box onClick={() => clickHandler(8)} value={state[8]} />
          </div>
        </>
      )}
    </div>
  );
};

export default Board;
