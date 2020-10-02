import React from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { modalIsOpenAtom } from '../recoil';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  background-color: #666;
`;

const ModalContainer = styled.div`
  width: 250px;
  height: 325px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: 10px;
`

export const Modal = () => {
  const [modalIsOpen, setModalIsOpen] = useRecoilState(modalIsOpenAtom);
  
  return (
    <Container>
      <ModalContainer/>
    </Container>
  )
}