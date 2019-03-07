/* eslint-disable react/prop-types */
import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { setGenres } from './actions';
import Results from './components/Results';
import Search from './components/Search';
import Film from './components/Film';
import { getMetadata } from './components/utils';
import { API_KEY } from './components/utils/constants';
import {
  SpanPink, Footer, Wrapper, Content
} from './components/Styled';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchBy: 'movie',
      filterNames: ['movie', 'tv'],
    };

    this.genresReceived = this.genresReceived.bind(this);
    this.filterChanged = this.filterChanged.bind(this);
  }

  componentDidMount() {
    const { searchBy } = this.state;
    this.updateGenres(searchBy);
  }

  updateGenres(searchBy) {
    const url = `/genre/${searchBy}/list?api_key=${API_KEY}&language=en_EN`;
    getMetadata(url, this.genresReceived);
  }

  genresReceived(genres) {
    const { dispatch } = this.props;
    dispatch(setGenres(genres));
  }

  filterChanged(value) {
    this.setState({ searchBy: value });
    this.updateGenres(value);
  }

  render() {
    const {
      searchBy, filterNames
    } = this.state;
    const { genres } = this.props;
    return (
      <Wrapper>
        <Content>
          <Route
            exact
            path={['/', '/search/:searchQuery']}
            render={() => (
              <Search
                dataReceived={this.dataReceived}
                searchBy={searchBy}
                filterNames={filterNames}
                filterChanged={this.filterChanged}
              />
            )}
          />
          <Route
            exact
            path="/"
            render={props => <Results {...props} />}
          />
          <Route
            path="/search/:searchQuery"
            render={props => <Results {...props} genres={genres} searchBy={searchBy} />}
          />
          <Route
            path="/film/:filmId"
            render={props => <Film {...props} genres={genres} searchBy={searchBy} />}
          />
        </Content>
        <Footer>
          <SpanPink>netflixroulette</SpanPink>
        </Footer>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({ genres: state.genres });

export default connect(mapStateToProps)(App);
