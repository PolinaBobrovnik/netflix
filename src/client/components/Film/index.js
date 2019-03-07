/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';
import RelativeInfo from './RelativeInfo';
import FilmInfo from './FilmInfo';
import MainResults from '../Results/MainResults';
import { CenteredWrapper } from '../Styled';
import { getMetadata } from '../utils';
import { API_KEY } from '../utils/constants';

export default class Film extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      similarFilms: {},
    };
    this.dataReceived = this.dataReceived.bind(this);
    this.similarReceived = this.similarReceived.bind(this);
  }

  componentDidMount() {
    this.getData(this.props.match.params.filmId);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.filmId !== prevProps.match.params.filmId) {
      this.getData(this.props.match.params.filmId);
    }
  }

  getData(filmId) {
    const { searchBy } = this.props;
    const filmUrl = `/${searchBy}/${filmId}?api_key=${API_KEY}`;
    const similarUrl = `/${searchBy}/${filmId}/similar?api_key=${API_KEY}`;
    getMetadata(filmUrl, this.dataReceived);
    getMetadata(similarUrl, this.similarReceived);
  }

  dataReceived(data) {
    console.log(data);
    this.setState({ data });
  }

  similarReceived(similarFilms) {
    console.log(similarFilms);
    this.setState({ similarFilms });
  }

  render() {
    const { genres, searchBy } = this.props;
    const { data, similarFilms } = this.state;
    return (
      <CenteredWrapper>
        <FilmInfo data={data} />
        <RelativeInfo />
        <MainResults data={similarFilms.results} genres={genres} searchBy={searchBy} />
      </CenteredWrapper>
    );
  }
}

Film.propTypes = {
  genres: PropTypes.object,
  searchBy: PropTypes.string
};

Film.defaultProps = {
  genres: {},
  searchBy: ''
};
