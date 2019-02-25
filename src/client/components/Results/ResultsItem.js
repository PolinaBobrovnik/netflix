import React from 'react';
import PropTypes from 'prop-types';
import {
  ResultsItemWrapper, ResultsItemDescription, Box, Title, Genres, A
} from '../Styled';

export default function ResultsItem(props) {
  const { data } = props;
  const {
    image, title, date, genres
  } = data;
  const src = image
    ? `https://image.tmdb.org/t/p/w500${image}`
    : '../../../../public/placeholder.jpg';
  //  https://api.themoviedb.org/3/movie/199951?api_key=e1b5752947f72bf59d881b313cb84177
  return (
    <A href="public/example.html">
      <ResultsItemWrapper>
        <img src={src} alt={title} height="400" />
        <ResultsItemDescription>
          <div>
            <Title>{title}</Title>
            <Genres>{genres}</Genres>
          </div>
          <div>
            <Box>{date}</Box>
          </div>
        </ResultsItemDescription>
      </ResultsItemWrapper>

    </A>

  );
}

ResultsItem.propTypes = {
  data: PropTypes.object
};

ResultsItem.defaultProps = {
  data: {}
};
