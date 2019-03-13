/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { setSortBy } from '../../actions/index';

const Div = styled.div`
  color: #4a4a4a;
  display: flex;
  justify-content: space-between;
  width: 200px;
`;

const SortDiv = styled.div`
  color: ${props => (props.inputColor === 'active'
    ? '#f55263' : '#4a4a4a')};
    :hover {
      cursor: pointer;
      text-decoration: underline;
    }
`;

function ResultsFilter({
  dispatch, value, sorterNames
}) {
  return (
    <Div>
      <div>Sort by</div>
      {sorterNames.map(name => (
        <SortDiv
          key={name}
          inputColor={value === name ? 'active' : ''}
          onClick={(event) => {
            dispatch(setSortBy(event.target.textContent));
          }}
        >
          {name}
        </SortDiv>
      ))}
    </Div>
  );
}

const mapStateToProps = state => ({
  value: state.resultsData.sortBy,
  sorterNames: state.resultsData.sorterNames,
});

export default connect(mapStateToProps)(ResultsFilter);