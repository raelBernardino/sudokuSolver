import React from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';

import { Button } from '../atoms'
import {
  boardAtom,
} from '../recoil';

const Container = styled.div`
  width: 250px;
  margin-top: 25px;
  `;

// interface BoardParts {
//   board: number[][];
//   row: number;
//   column: number;
//   value: number;
// }
// type SolverFn = (x: BoardParts) => boolean | number[];
// type RowFn = (x: Omit<BoardParts, 'column'>) => boolean | number[];
// type ColFn = (x: Omit<BoardParts, 'row'>) => boolean | number[];


export const Solve = () => {
  const [board, setBoard] = useRecoilState(boardAtom);

  const nextEmptySpot = (board: number[][]) => {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (board[i][j] === 0) return [i, j]
      }
    }
    return [-1, -1]
  }

  const checkRow = (board: number[][], row: number, value: number) => {
    return board[row].indexOf(value) !== -1 ? false : true
  }

  const checkColumn = (board: number[][], column: number, value: number) => {
    for (let i = 0; i < board.length; i++) {
      if (board[i][column] === value) return false
    }
    return true
  }

  const checkSquare = (board: number[][], row: number, column: number, value: number) => {
    let boxRow = Math.floor(row / 3) * 3;
    let boxCol = Math.floor(column / 3) * 3;

    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 3; c++) {
        if (board[boxRow + r][boxCol + c] === value)
          return false;
      }
    }
    return true;
  };

  const checkValue = (board: number[][], row: number, column: number, value: number) => {
    return (checkRow(board, row, value) &&
      checkColumn(board, column, value) &&
      checkSquare(board, row, column, value)) ?
      true
      : false;
  };

  const solveBoard = (board: number[][]) => {
    let tempBoard = JSON.parse(JSON.stringify(board))
    let emptySpot = nextEmptySpot(tempBoard)
    let row = emptySpot![0]
    let col = emptySpot![1]

    if (row === -1) {
      setBoard(tempBoard)
    } else {
      for(let i = 1; i < 10; i++) {
        if(checkValue(board, row, col, i)) {
          tempBoard[row][col] = i
          solveBoard(tempBoard)
        }
      }
    }
  }

  return (
    <Container>
      <Button onClick={() => solveBoard(board)}>Solve</Button>
    </Container>
  )
}