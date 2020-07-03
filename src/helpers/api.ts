const API_URL = 'https://data_for_test.json';

export const getPlanets = () => {
  return fetch(API_URL)
    .then(response => response.json());
};
