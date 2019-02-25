import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ResultsCount from './ResultsCount';
import ResultsFilter from './ResultsFilter';

const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #f5f5f5;
  padding: 15px 60px 15px 60px;
  font-weight: bold;
`;

export default function ResultsInfo(props) {
  const {
    numberOfResults, value, sorterNames, sorterChanged
  } = props;
  return (
    <FlexDiv>
      <ResultsCount numberOfResults={numberOfResults} />
      <ResultsFilter
        value={value}
        sorterNames={sorterNames}
        sorterChanged={sorterChanged}
      />
    </FlexDiv>
  );
}

ResultsInfo.propTypes = {
  numberOfResults: PropTypes.number,
  sorterChanged: PropTypes.func,
  sorterNames: PropTypes.array,
  value: PropTypes.string
};

ResultsInfo.defaultProps = {
  numberOfResults: 0,
  sorterChanged: () => {},
  sorterNames: ['anchor1', 'anchor2'],
  value: ''
};
