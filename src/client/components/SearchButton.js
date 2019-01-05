import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  color: white;
  background-color: #f55263;
  text-transform: uppercase;
  border: none;
  border-radius: 2px;
  margin-left: 15px;
  padding: 10px 60px;
  font-size: 16px;
`;

export default function SearchButton() {
  return (
    <div>
      <Button type="button">Search</Button>
    </div>
  );
}
