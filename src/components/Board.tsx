import React from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { boardAtom, modalIsOpenAtom } from '../recoil';

interface BorderProps {
  index: number;
}

const Space = styled.div<BorderProps>`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  font-family: 'Poppins', sans-serif;
  font-size: 32px;
  border-right: ${p => p.index === 2 || p.index === 5 ? '1px solid black' : ''};
  &:hover {
    /* background-color: #F95738; */
    background-color: #d3d3d3;
  }
  `;

const Row = styled.div<BorderProps>`
  display: flex;
  border-bottom: ${p => p.index === 2 || p.index === 5 ? '1px solid black' : ''};
`;

const Container = styled.div`
  padding: 12px;
`;

export const Board = () => {
  const [board, setBoard] = useRecoilState(boardAtom);
  const [modalIsOpen, setModalIsOpen] = useRecoilState(modalIsOpenAtom);

  const openModal = () => setModalIsOpen(!modalIsOpen)

  const displayRow = (i: number) => board[i].map((b, i) => <Space index={i}>{b}</Space>)

  return (
    <Container>
      {board.map((b, i) => <Row index={i}>{displayRow(i)}</Row>)}
    </Container>
  )
}