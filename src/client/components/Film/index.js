/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { connect } from 'react-redux';
import RelativeInfo from './RelativeInfo';
import FilmInfo from './FilmInfo';
import MainResults from '../Results/MainResults';
import { CenteredWrapper } from '../Styled';
import { API_KEY } from '../utils/constants';
import { getFilmData, getFilmSimilar } from '../../actions/index';

class Film extends React.Component {
  componentDidMount() {
    this.getData(this.props.match.params.filmId);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.filmId !== prevProps.match.params.filmId) {
      this.getData(this.props.match.params.filmId);
    }
  }

  getData(filmId) {
    const { searchBy, dispatch } = this.props;
    const filmUrl = `/${searchBy}/${filmId}?api_key=${API_KEY}`;
    const similarUrl = `/${searchBy}/${filmId}/similar?api_key=${API_KEY}`;
    dispatch(getFilmData(filmUrl));
    dispatch(getFilmSimilar(similarUrl));
  }

  render() {
    const {
      genres, searchBy, similarFilms
    } = this.props;
    return (
      <CenteredWrapper>
        <FilmInfo />
        <RelativeInfo />
        <MainResults data={similarFilms.results} genres={genres} searchBy={searchBy} />
      </CenteredWrapper>
    );
  }
}

const mapStateToProps = state => ({
  genres: state.genres,
  searchBy: state.searchData.searchBy,
  similarFilms: state.filmData.similarFilms,
});

export default connect(mapStateToProps)(Film);
