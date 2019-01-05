import React from 'react';
import styled from 'styled-components';
import SearchField from './SearchField';
import SearchFilter from './SearchFilter';
import SearchButton from './SearchButton';

const Div = styled.div`
  background-color: #302626;
  max-width: 1200px;
  padding: 15px 60px 20px 60px;
  box-sizing: content-box;
`;

const SpanPink = styled.span`
  color: #f55263;
  margin-bottom: 20px;
  display: block;
`;

const SpanWhite = styled.span`
  color: white;
  margin-bottom: 10px;
  font-size: 16px;
  text-transform: uppercase;
  display: block;
`;

const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
`;

export default function Search() {
  return (
    <Div>
      <SpanPink>netflixroulette</SpanPink>
      <SpanWhite>Find your movie</SpanWhite>
      <SearchField />
      <FlexDiv>
        <SearchFilter />
        <SearchButton />
      </FlexDiv>
    </Div>
  );
}
