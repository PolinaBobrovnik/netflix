/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import ResultsInfo from './ResultsInfo';
import MainResults from './MainResults';
import { CenteredWrapper } from '../Styled';
import { itemProps } from '../utils';
import { API_KEY } from '../utils/constants';
import { getResultsData } from '../../actions/index';

class Results extends React.Component {
  componentDidMount() {
    if (this.props.match.params.searchQuery) {
      this.getData(this.props.match.params.searchQuery);
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.searchQuery !== prevProps.match.params.searchQuery
      || this.props.searchBy !== prevProps.searchBy) {
      this.getData(this.props.match.params.searchQuery);
    }
  }

  getData(searchQuery) {
    const { searchBy, dispatch } = this.props;
    const url = `/search/${searchBy}?api_key=${API_KEY}&query=${searchQuery}&page=1`;
    dispatch(getResultsData(url));
  }

  sortData(data) {
    const { searchBy, sortBy } = this.props;
    if (sortBy === 'rating') {
      data.sort((a, b) => b.vote_average - a.vote_average);
    }
    if (sortBy === 'release date') {
      data.sort((a, b) => moment(b[itemProps[searchBy].date]).format('x') - moment(a[itemProps[searchBy].date]).format('x'));
    }
    return data;
  }

  render() {
    const { genres, searchBy, data } = this.props;
    const sortedData = data.results ? this.sortData(data.results) : data.results;
    return (
      <CenteredWrapper>
        <ResultsInfo />
        <MainResults data={sortedData} genres={genres} searchBy={searchBy} />
      </CenteredWrapper>
    );
  }
}

const mapStateToProps = state => ({
  searchBy: state.searchData.searchBy,
  genres: state.genres,
  data: state.resultsData.data,
  sortBy: state.resultsData.sortBy,
});

export default connect(mapStateToProps)(Results);
