import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  color: #4a4a4a;
  display: flex;
  justify-content: space-between;
  width: 200px;
`;

const SortDiv = styled.div`
  color: ${props => (props.inputColor === 'active'
    ? '#f55263' : '#4a4a4a')};
`;

export default function SearchButton() {
  return (
    <Div>
      <div>Sort by</div>
      <SortDiv>release date</SortDiv>
      <SortDiv inputColor="active">rating</SortDiv>
    </Div>
  );
}
