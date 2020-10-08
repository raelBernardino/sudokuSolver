import React from 'react';
import styled from 'styled-components';
import { GrFormClose } from 'react-icons/gr'
import { useRecoilState } from 'recoil';

import { Options } from './Options'
import { Button } from '../../atoms'
import {
  modalIsOpenAtom,
  selectedNumberAtom,
  selectedCellAtom,
  boardAtom,
} from '../../recoil';

interface ContainerProps {
  isDisplayed: boolean;
};

const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 100vh;
  display: ${p => !p.isDisplayed ? 'none' : 'flex'};
  justify-content: center;
  align-items: center;
  z-index: 1;
  background-color: rgba(0, 0, 0, .5);
  position: absolute;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  > * {
    margin-bottom: 5px;
  }
`;

const ModalContainer = styled.div`
  width: 325px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: white;
  padding: 15px;
  border-radius: 7px;
  position: relative;
`

const Exit = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 10px;
  left: 8px;
  font-size: 24px;
  background: transparent;
  border: none;
  outline: none;
  svg {
    color: #d3d3d3;
    &:hover,
    &:active {
      cursor: pointer;
      color: #F95738;
    }
  }
`;

export const Modal = () => {
  const [modalIsOpen, setModalIsOpen] = useRecoilState(modalIsOpenAtom);
  const [selectedNumber, setSelectedNumber] = useRecoilState(selectedNumberAtom);
  const [selectedCell,] = useRecoilState(selectedCellAtom);
  const [board, setBoard] = useRecoilState(boardAtom);
  const { i, j } = selectedCell;
  const cellValue = board[i][j];

  const closeModal = () => {
    setSelectedNumber(0)
    setModalIsOpen(false);
  }

  const confirmSelect = () => {
    setBoard(board.map((row, rowIndex) => row.map((col, colIndex) => {
      return rowIndex === i && colIndex === j ? selectedNumber : col
    }))
    )
    closeModal()
  }

  const clearCell = () => {
    setBoard(board.map((row, rowIndex) => row.map((col, colIndex) => {
      return rowIndex === i && colIndex === j ? 0 : col
    }))
    )
    closeModal()
  }

  return (
    <Container isDisplayed={modalIsOpen}>
      <ModalContainer>
        <Exit onClick={closeModal}>
          <GrFormClose />
        </Exit>
        <Options />
        <ButtonsContainer>
          <Button onClick={confirmSelect} disabled={selectedNumber === 0}>Select</Button>
          <Button onClick={clearCell} disabled={cellValue === 0}>Clear</Button>
        </ButtonsContainer>
      </ModalContainer>
    </Container>
  )
}