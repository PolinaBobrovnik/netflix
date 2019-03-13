import { PATH } from './constants';

export const fetchMetadata = (query) => {
  const url = `${PATH}${query}`;
  return fetch(url).then(response => response.json());
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
