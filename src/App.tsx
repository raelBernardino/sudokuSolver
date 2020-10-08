import React from 'react';
import { Board, Modal, Solve } from './components'
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-direction: column;
`;

const App = () => {
  return (
    <Container>
      <Board />
      <Modal />
      <Solve />
    </Container>
  )
}
export default App;
