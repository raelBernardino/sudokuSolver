import React from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';

import { Space } from '../../atoms'
import { selectedNumberAtom } from '../../recoil';

interface OptionSpace {
  value?: number;
  selectedNum?: number;
}

const OptionSpace = styled(Space) <OptionSpace>`
  width: 25px;
  height: 25px;
  font-size: 20px;
  background-color: ${p => p.value === p.selectedNum ? "#16DB93" : "white"};
  &:active {
    background-color: #333;
  }
  &:hover {
    background-color: #16DB98;
  }
`;

const Container = styled.div`
  display: flex;
`;

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

export const Options = () => {
  const [selectedNumber, setSelectedNumber] = useRecoilState(selectedNumberAtom);
  const onSelectNumber = (n: number) => setSelectedNumber(n)
  return (
    <Container>{nums.map((n) => (
      <OptionSpace
        value={n}
        selectedNum={selectedNumber}
        onClick={() => onSelectNumber(n)}>
        {n}
      </OptionSpace>
    ))}
    </Container>
  )
}
