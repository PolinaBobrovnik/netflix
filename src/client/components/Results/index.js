import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import ResultsInfo from './ResultsInfo';
import MainResults from './MainResults';
import { CenteredWrapper } from '../Styled';
import { itemProps } from '../utils';

export default class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortBy: 'rating',
      sorterNames: ['release date', 'rating'],
    };

    this.sorterChanged = this.sorterChanged.bind(this);
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
    const { data, genres, searchBy } = this.props;
    const { sortBy, sorterNames } = this.state;
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
  data: PropTypes.object,
  genres: PropTypes.object,
  searchBy: PropTypes.string
};

Results.defaultProps = {
  data: {},
  genres: {},
  searchBy: ''
};
