import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import ResultsInfo from './ResultsInfo';
import MainResults from './MainResults';
import { CenteredWrapper } from '../Styled';
import { itemProps, getMetadata } from '../utils';
import { API_KEY } from '../utils/constants';

export default class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      sortBy: 'rating',
      sorterNames: ['release date', 'rating'],
    };

    this.sorterChanged = this.sorterChanged.bind(this);
    this.dataReceived = this.dataReceived.bind(this);
  }

  componentDidMount(prevProps) {
    if (this.props.match.params.searchQuery) {
      this.getData(this.props.match.params.searchQuery);
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.searchQuery !== prevProps.match.params.searchQuery ||
      this.props.searchBy !== prevProps.searchBy) {
      this.getData(this.props.match.params.searchQuery);
    }
  }

  getData(searchQuery, searchByParam) {
    const { searchBy } = this.props;
    const url = `/search/${searchByParam || searchBy}?api_key=${API_KEY}&query=${searchQuery}&page=1`;
    getMetadata(url, this.dataReceived);
  }

  dataReceived(data) {
    this.setState({ data });
  }

  sortData(data) {
    const { sortBy } = this.state;
    const { searchBy } = this.props;
    if (sortBy === 'rating') {
      data.sort((a, b) => b.vote_average - a.vote_average);
    }
    if (sortBy === 'release date') {
      data.sort((a, b) => moment(b[itemProps[searchBy].date]).format('x') - moment(a[itemProps[searchBy].date]).format('x'));
    }
    return data;
  }

  sorterChanged(value) {
    this.setState({ sortBy: value });
  }

  render() {
    const { genres, searchBy } = this.props;
    const { sortBy, sorterNames, data } = this.state;
    const sortedData = data.results ? this.sortData(data.results) : data.results;
    return (
      <CenteredWrapper>
        <ResultsInfo
          numberOfResults={data.total_results}
          value={sortBy}
          sorterNames={sorterNames}
          sorterChanged={this.sorterChanged}
        />
        <MainResults data={sortedData} genres={genres} searchBy={searchBy} />
      </CenteredWrapper>
    );
  }
}

Results.propTypes = {
  genres: PropTypes.object,
  searchBy: PropTypes.string
};

Results.defaultProps = {
  genres: {},
  searchBy: ''
};
