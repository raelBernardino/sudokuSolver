import React from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { boardAtom, modalIsOpenAtom, selectedCellAtom } from '../recoil';
import { Space, BorderProps } from '../atoms'

const Row = styled.div<BorderProps>`
  display: flex;
  border-bottom: ${p => p.index === 2 || p.index === 5 ? '1px solid black' : ''};
`;

const Container = styled.div`
  padding: 12px;
`;

export const Board = () => {
  const [board,] = useRecoilState(boardAtom);
  const [, setModalIsOpen] = useRecoilState(modalIsOpenAtom);
  const [, setSelectedCell] = useRecoilState(selectedCellAtom);

  const storeCellCordinates = (i: number, j: number) => {
    setModalIsOpen(true)
    setSelectedCell({i, j})
  }

  const displayRow = (row: number) => (
    board[row].map((b, col: number) => (
      <Space index={col} onClick={() => storeCellCordinates(row, col)}>{b === 0 ? "-" : b}</Space>
    ))
  )

  return (
    <Container>
      {board.map((b, row) => <Row index={row}>{displayRow(row)}</Row>)}
    </Container>
  )
}