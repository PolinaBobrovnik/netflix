import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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

export default class SearchFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: props.value };

    this.filterChanged = this.filterChanged.bind(this);
  }

  filterChanged(event) {
    const value = event.target.textContent;
    const { filterChanged } = this.props;

    this.setState({ value });
    filterChanged(value);
  }

  render() {
    const { filterNames } = this.props;
    const { value } = this.state;
    return (
      <div>
        <Span>Search by</Span>
        {filterNames.map(name => (
          <Button
            key={name}
            inputColor={value === name ? 'active' : ''}
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

SearchFilter.propTypes = {
  filterChanged: PropTypes.func,
  filterNames: PropTypes.array,
  value: PropTypes.string
};

SearchFilter.defaultProps = {
  filterChanged: () => {},
  filterNames: ['button1', 'button2'],
  value: ''
};
