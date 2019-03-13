/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { updateGenres, setSearchBy } from '../../actions';
import { API_KEY } from '../utils/constants';

const Button = styled.button`
  color: white;
  background-color: ${props => (props.inputColor === 'active'
    ? '#f55263' : '#3c3c3c')};
  text-transform: uppercase;
  border: none;
  border-radius: 2px;
  margin-left: 15px;
  padding: 5px 20px;
  :hover {
    cursor: pointer;
    background-color: white;
    color: #3c3c3c;
  }
`;

const Span = styled.span`
  text-transform: uppercase;
  color: white;
  display: inline-block;
`;

class SearchFilter extends React.Component {
  constructor(props) {
    super(props);

    this.filterChanged = this.filterChanged.bind(this);
  }

  filterChanged(event) {
    const { dispatch } = this.props;
    const value = event.target.textContent;
    const url = `/genre/${value}/list?api_key=${API_KEY}&language=en_EN`;
    dispatch(setSearchBy(value));
    dispatch(updateGenres(url));
  }

  render() {
    const { filterNames, searchBy } = this.props;
    return (
      <div>
        <Span>Search by</Span>
        {filterNames.map(name => (
          <Button
            key={name}
            inputColor={searchBy === name ? 'active' : ''}
            type="button"
            onClick={this.filterChanged}
          >
            {name}
          </Button>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  searchBy: state.searchData.searchBy,
  filterNames: state.searchData.filterNames,
});

export default connect(mapStateToProps)(SearchFilter);
