import { PATH } from './constants';

export const getMetadata = (query, callback) => {
  const url = `${PATH}${query}`;
  fetch(url).then(response => response.json()).then((results) => {
    callback(results);
  });
};

// fetch(`${path}${searchBy === "title" ? "movie" : "tv"}/${id}?${key}`)

export const itemProps = {
  tv: {
    title: 'name',
    date: 'first_air_date'
  },
  movie: {
    title: 'title',
    date: 'release_date'
  }
};
