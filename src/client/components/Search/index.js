import React from 'react';
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

export default class Search extends React.Component {
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
      searchBy, filterNames, filterChanged, handleSubmit
    } = this.props;
    return (
      <CenteredWrapper>
        <Div>
          <SpanPink>netflixroulette</SpanPink>
          <SpanWhite>Find your movie</SpanWhite>
          <SearchField
            value={searchQuery}
            onChange={this.handleChange}
            onKeyPress={() => handleSubmit(searchQuery)}
          />
          <FlexDiv>
            <SearchFilter
              value={searchBy}
              filterNames={filterNames}
              filterChanged={filterChanged}
            />
            <SearchButton onClick={() => handleSubmit(searchQuery)} />
          </FlexDiv>
        </Div>
      </CenteredWrapper>
    );
  }
}

Search.propTypes = {
  handleSubmit: PropTypes.func,
  filterChanged: PropTypes.func,
  searchBy: PropTypes.string,
  filterNames: PropTypes.array,
};

Search.defaultProps = {
  handleSubmit: () => {},
  filterChanged: () => {},
  searchBy: '',
  filterNames: [],
};
