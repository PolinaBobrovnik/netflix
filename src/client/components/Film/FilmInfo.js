import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { CenteredWrapper, Div, SpanPink } from '../Styled';
import SearchButton from '../Search/SearchButton';

export default function FilmInfo(props) {
  const { data } = props;
  return (
    <CenteredWrapper>
      <Div>
        <SpanPink>netflixroulette</SpanPink>
        <Link to="/"><SearchButton /></Link>
      </Div>
    </CenteredWrapper>
  );
}

FilmInfo.propTypes = {
  data: PropTypes.object,
};

FilmInfo.defaultProps = {
  data: {},
};
