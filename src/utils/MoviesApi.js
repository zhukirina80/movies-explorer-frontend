import { MOVIES_API_ADDRESS } from './constants';

class MoviesApi {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  getMovies() {
    return fetch(`${this._baseUrl}/beatfilm-movies`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then((res) => {
      if(res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
  }
}

const moviesApi = new MoviesApi({
  baseUrl: MOVIES_API_ADDRESS,
})

export default moviesApi;