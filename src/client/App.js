import React from 'react';
import Results from './components/Results';
import Search from './components/Search';
import { getMetadata } from './components/utils';
import { API_KEY } from './components/utils/constants';
import {
  SpanPink, Footer, Wrapper, Content
} from './components/Styled';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      genres: {},
      searchBy: 'movie',
      filterNames: ['movie', 'tv'],
    };

    this.dataReceived = this.dataReceived.bind(this);
    this.genresReceived = this.genresReceived.bind(this);
    this.filterChanged = this.filterChanged.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { searchBy } = this.state;
    this.updateGenres(searchBy);
  }

  getData(searchQuery, searchByParam) {
    const { searchBy } = this.state;
    const url = `/search/${searchByParam || searchBy}?api_key=${API_KEY}&query=${searchQuery}&page=1`;
    getMetadata(url, this.dataReceived);
  }

  updateGenres(searchBy) {
    const url = `/genre/${searchBy}/list?api_key=${API_KEY}&language=en_EN`;
    getMetadata(url, this.genresReceived);
  }

  genresReceived(genres) {
    this.setState({ genres });
  }

  dataReceived(data) {
    this.setState({ data });
  }

  filterChanged(value) {
    const { searchQuery } = this.state;
    this.setState({ searchBy: value });
    this.updateGenres(value);
    if (searchQuery) {
      this.getData(searchQuery, value);
    }
  }

  handleSubmit(searchQuery) {
    this.setState({ searchQuery });
    this.getData(searchQuery);
  }

  render() {
    const {
      data, genres, searchBy, filterNames
    } = this.state;
    return (
      <Wrapper>
        <Content>
          <Search
            dataReceived={this.dataReceived}
            searchBy={searchBy}
            filterNames={filterNames}
            filterChanged={this.filterChanged}
            handleSubmit={this.handleSubmit}
          />
          <Results data={data} genres={genres} searchBy={searchBy} />
        </Content>
        <Footer>
          <SpanPink>netflixroulette</SpanPink>
        </Footer>
      </Wrapper>
    );
  }
}
