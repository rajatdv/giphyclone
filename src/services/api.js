import axios from 'axios';
import CONFIG from './config';

const searchGifs = (callback, oldList, offset, query) => {
  axios
    .get(
      `https://api.giphy.com/v1/gifs/search?api_key=${CONFIG.API_KEY}&limit=${
        CONFIG.LIMIT
      }&offset=${CONFIG.LIMIT * offset}&q=${query}`,
    )
    .then(response => {
      if (offset > 0) {
        callback([...oldList, ...response.data.data]);
      } else {
        callback(response.data.data);
      }
    });
};

const getTrendingGifs = (callback, oldList, offset) => {
  axios
    .get(
      `https://api.giphy.com/v1/gifs/trending?api_key=${CONFIG.API_KEY}&limit=${
        CONFIG.LIMIT
      }&offset=${CONFIG.LIMIT * offset}`,
    )
    .then(response => {
      if (offset > 0) {
        callback([...oldList, ...response.data.data]);
      } else {
        callback(response.data.data);
      }
    });
};

export { searchGifs, getTrendingGifs };
