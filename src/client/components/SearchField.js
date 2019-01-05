import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  color: white;
  background-color: #010101;
  border: none;
  border-bottom: 2px solid #f55263;
  padding: 10px 20px;
  box-sizing: border-box;
  width: 100%;
`;

export default function SearchField() {
  return (
    <div>
      <Input />
    </div>
  );
}
