import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Div = styled.div`
  color: #4a4a4a;
  display: flex;
  justify-content: space-between;
  width: 200px;
`;

const SortDiv = styled.div`
  color: ${props => (props.inputColor === 'active'
    ? '#f55263' : '#4a4a4a')};
    :hover {
      cursor: pointer;
      text-decoration: underline;
    }
`;

export default class ResultsFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: props.value };

    this.sorterChanged = this.sorterChanged.bind(this);
  }

  sorterChanged(event) {
    const value = event.target.textContent;
    const { sorterChanged } = this.props;

    this.setState({ value });
    sorterChanged(value);
  }

  render() {
    const { sorterNames } = this.props;
    const { value } = this.state;
    return (
      <Div>
        <div>Sort by</div>
        {sorterNames.map(name => (
          <SortDiv
            key={name}
            inputColor={value === name ? 'active' : ''}
            onClick={this.sorterChanged}
          >
            {name}
          </SortDiv>
        ))}
      </Div>
    );
  }
}

ResultsFilter.propTypes = {
  sorterChanged: PropTypes.func,
  sorterNames: PropTypes.array,
  value: PropTypes.string
};

ResultsFilter.defaultProps = {
  sorterChanged: () => {},
  sorterNames: ['anchor1', 'anchor2'],
  value: ''
};
