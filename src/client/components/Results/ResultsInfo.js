/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import ResultsCount from './ResultsCount';
import ResultsFilter from './ResultsFilter';

const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #f5f5f5;
  padding: 15px 60px 15px 60px;
  font-weight: bold;
`;

export default function ResultsInfo() {
  return (
    <FlexDiv>
      <ResultsCount />
      <ResultsFilter />
    </FlexDiv>
  );
}
