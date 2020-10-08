import styled from 'styled-components';

export interface BorderProps {
  index?: number;
}

export interface ButtonProps {
  width?: string;
}

export const Space = styled.div<BorderProps>`
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
    cursor: pointer;
  }
  `;

export const Button = styled.button<ButtonProps>`
  width: ${p => p.width ? `${p.width}` : "100%"};
  padding: 10px;
  height: 45px;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border-radius: 7px;
  outline: none;
  border: none;
  color: white;
  background-color: ${p => p.disabled ? "#d3d3d3" : "#16DB93"};
  &:hover {
    cursor: pointer;
  }
`;