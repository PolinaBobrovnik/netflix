import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
  color: white;
  background-color: #f55263;
  text-transform: uppercase;
  border: none;
  border-radius: 2px;
  margin-left: 15px;
  padding: 10px 60px;
  font-size: 16px;
  :hover {
    cursor: pointer;
    background-color: white;
    color: #3c3c3c;
  }
`;

export default function SearchButton(props) {
  const { onClick } = props;
  return (
    <div>
      <Button type="button" onClick={onClick}>Search</Button>
    </div>
  );
}

SearchButton.propTypes = {
  onClick: PropTypes.func
};

SearchButton.defaultProps = {
  onClick: () => {}
};
