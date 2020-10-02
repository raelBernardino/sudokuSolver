import React from 'react';
import { Board } from './components'
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  return (
    <Container>
      <Board />
    </Container>
  )
}
export default App;
