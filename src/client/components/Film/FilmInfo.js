import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { CenteredWrapper, Div, SpanPink } from '../Styled';
import SearchButton from '../Search/SearchButton';

function FilmInfo({ data }) {
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

const mapStateToProps = state => ({
  data: state.filmData.data,
});

export default connect(mapStateToProps)(FilmInfo);
