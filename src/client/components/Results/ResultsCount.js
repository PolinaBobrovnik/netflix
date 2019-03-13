import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Div = styled.div`
  color: #4a4a4a;
`;

function SearchButton({ numberOfResults }) {
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

const mapStateToProps = state => ({
  numberOfResults: state.resultsData.data.total_results,
});

export default connect(mapStateToProps)(SearchButton);
