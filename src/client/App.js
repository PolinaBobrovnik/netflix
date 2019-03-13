/* eslint-disable react/prop-types */
import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateGenres } from './actions';
import Results from './components/Results';
import Search from './components/Search';
import Film from './components/Film';
import { API_KEY } from './components/utils/constants';
import {
  SpanPink, Footer, Wrapper, Content
} from './components/Styled';

class App extends React.Component {
  componentDidMount() {
    const { searchBy, dispatch } = this.props;
    const url = `/genre/${searchBy}/list?api_key=${API_KEY}&language=en_EN`;
    dispatch(updateGenres(url));
  }

  render() {
    return (
      <Wrapper>
        <Content>
          <Route
            exact
            path={['/', '/search/:searchQuery']}
            component={Search}
          />
          <Route exact path="/" component={Results} />
          <Route path="/search/:searchQuery" component={Results} />
          <Route path="/film/:filmId" component={Film} />
        </Content>
        <Footer>
          <SpanPink>netflixroulette</SpanPink>
        </Footer>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  searchBy: state.searchData.searchBy,
});

export default withRouter(connect(mapStateToProps)(App));
