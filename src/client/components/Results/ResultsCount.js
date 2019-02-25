import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Div = styled.div`
  color: #4a4a4a;
`;

export default function SearchButton(props) {
  const { numberOfResults } = props;
  return (
    <Div>
      {`${numberOfResults} movies found`}
    </Div>
  );
}

SearchButton.propTypes = {
  numberOfResults: PropTypes.number
};

SearchButton.defaultProps = {
  numberOfResults: 0
};
