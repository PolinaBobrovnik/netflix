import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Flex, EmptyResult } from '../Styled';
import ResultsItem from './ResultsItem';
import { itemProps } from '../utils';

export default function MainResults(props) {
  const { data, genres, searchBy } = props;

  const getGenres = (genreIds) => {
    const itemGenres = genres.genres.filter(genre => genreIds.includes(genre.id))
      .map(genre => genre.name).join(', ');
    return itemGenres;
  };

  const getYear = date => moment(date).year();

  return data.length
    ? (
      <Flex>
        {data.map((item) => {
          const itemData = {
            image: item.poster_path,
            title: item[itemProps[searchBy].title],
            date: getYear(item[itemProps[searchBy].date]),
            genres: getGenres(item.genre_ids),
            id: item.id,
          };
          return (
            <ResultsItem
              key={item.id}
              data={itemData}
            />
          );
        })}
      </Flex>
    )
    : (
      <EmptyResult>
        No films found
      </EmptyResult>
    );
}

MainResults.propTypes = {
  data: PropTypes.array,
  genres: PropTypes.object,
  searchBy: PropTypes.string,
};

MainResults.defaultProps = {
  data: [],
  genres: {},
  searchBy: ''
};
