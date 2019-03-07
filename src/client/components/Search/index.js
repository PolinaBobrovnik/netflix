import React from 'react';
import { withRouter } from 'react-router';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SearchField from './SearchField';
import SearchFilter from './SearchFilter';
import SearchButton from './SearchButton';
import {
  SpanPink, SpanWhite, CenteredWrapper, Div
} from '../Styled';

const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
`;

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ searchQuery: event.target.value });
  }

  render() {
    const { searchQuery } = this.state;
    const {
      searchBy, filterNames, filterChanged, history,
    } = this.props;
    return (
      <CenteredWrapper>
        <Div>
          <SpanPink>netflixroulette</SpanPink>
          <SpanWhite>Find your movie</SpanWhite>
          <SearchField
            value={searchQuery}
            onChange={this.handleChange}
            onKeyPress={() => {
              history.push(`/search/${searchQuery}`);
            }}
          />
          <FlexDiv>
            <SearchFilter
              value={searchBy}
              filterNames={filterNames}
              filterChanged={filterChanged}
            />
            <SearchButton onClick={() => {
              history.push(`/search/${searchQuery}`);
            }}
            />
          </FlexDiv>
        </Div>
      </CenteredWrapper>
    );
  }
}

Search.propTypes = {
  filterChanged: PropTypes.func,
  searchBy: PropTypes.string,
  filterNames: PropTypes.array,
  history: PropTypes.object,
};

Search.defaultProps = {
  filterChanged: () => {},
  searchBy: '',
  filterNames: [],
  history: {},
};

export default withRouter(Search);
