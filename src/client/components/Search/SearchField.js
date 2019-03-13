import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Input = styled.input`
  color: white;
  background-color: #010101;
  border: none;
  border-bottom: 2px solid #f55263;
  padding: 10px 20px;
  box-sizing: border-box;
  width: 100%;
`;

export default function SearchField(props) {
  const { value, onChange, onKeyPress } = props;
  const onEnterPress = (event) => {
    if (event.keyCode === 13) {
      onKeyPress(event);
    }
  };
  return (
    <div>
      <Input value={value} onChange={onChange} onKeyDown={onEnterPress} placeholder="Search..." />
    </div>
  );
}

SearchField.propTypes = {
  onChange: PropTypes.func,
  onKeyPress: PropTypes.func,
  value: PropTypes.string
};

SearchField.defaultProps = {
  onChange: () => {},
  onKeyPress: () => {},
  value: ''
};
