/* eslint-disable react/prop-types */
import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import styled from 'styled-components';
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
    const { history } = this.props;
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
            <SearchFilter />
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

export default withRouter(connect()(Search));
