import { fetchMetadata } from '../components/utils';

export const setGenres = genres => ({
  type: 'SET_GENRES',
  genres
});

export const updateGenres = url => dispatch => fetchMetadata(url)
  .then(genres => dispatch(setGenres(genres)));

export const setSearchBy = searchBy => ({
  type: 'SET_SEARCH_BY',
  searchBy
});

export const setFilmData = data => ({
  type: 'SET_FILM_DATA',
  data
});

export const getFilmData = url => dispatch => fetchMetadata(url)
  .then(data => dispatch(setFilmData(data)));

export const setFilmSimilar = similarFilms => ({
  type: 'SET_FILM_SIMILAR',
  similarFilms
});

export const getFilmSimilar = url => dispatch => fetchMetadata(url)
  .then(similarFilms => dispatch(setFilmSimilar(similarFilms)));

export const setResultsData = data => ({
  type: 'SET_RESULTS_DATA',
  data
});

export const getResultsData = url => dispatch => fetchMetadata(url)
  .then(data => dispatch(setResultsData(data)));

export const setSortBy = sortBy => ({
  type: 'SET_SORT_BY',
  sortBy
});
