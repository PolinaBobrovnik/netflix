import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  color: white;
  background-color: ${props => (props.inputColor === 'active'
    ? '#f55263' : '#3c3c3c')};
  text-transform: uppercase;
  border: none;
  border-radius: 2px;
  margin-left: 15px;
  padding: 5px 20px;
`;

const Span = styled.span`
  text-transform: uppercase;
  color: white;
  display: inline-block;
`;

export default function SearchFilter() {
  return (
    <div>
      <Span>Search by</Span>
      <Button inputColor="active" type="button">Title</Button>
      <Button type="button">Director</Button>
    </div>
  );
}
