import React from 'react';
import styled from 'styled-components';

export default function Header() {
  return (
    <HeaderStyled>
      <h1>REACT GITHUB USERCARD</h1>
    </HeaderStyled>

  );
}



const HeaderStyled = styled.div`
  width: 100%;
  height: 100px;
  margin-bottom: 1%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: 'Righteous', cursive;
  background: rgb(253, 254, 254, 0.9);

`;