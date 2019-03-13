import { combineReducers } from 'redux';
import genres from './genres';
import searchData from './searchData';
import filmData from './filmData';
import resultsData from './resultsData';

export default combineReducers({
  genres,
  searchData,
  filmData,
  resultsData
});
