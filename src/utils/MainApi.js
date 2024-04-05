import { MAIN_API_ADDRESS } from './constants';
import { MOVIES_API_ADDRESS } from './constants';

class MainApi {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  loadUserInfo() {
    const token = localStorage.getItem('jwt');
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${token}`,
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

  patchUserInfo({ name, email, _id }) {
    const token = localStorage.getItem('jwt');
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        _id,
      })
    })
    .then((res) => {
      if(res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
  }

  getSavedMovies() {
    const token = localStorage.getItem('jwt');
    return fetch(`${this._baseUrl}/movies`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${token}`,
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

  addMovie(movie) {
    const token = localStorage.getItem('jwt');
    return fetch(`${this._baseUrl}/movies`, {
      method: 'POST',
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        description: movie.description,
        year: movie.year,
        image: MOVIES_API_ADDRESS + movie.image.url,
        trailerLink: movie.trailerLink,
        thumbnail: MOVIES_API_ADDRESS + movie.image.formats.thumbnail.url,
        movieId: movie.id,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
      })
    })
    .then((res) => {
      if(res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
  }

  deleteMovie(movieID) {
    const token = localStorage.getItem('jwt');
    return fetch(`${this._baseUrl}/movies/${movieID}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${token}`,
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

const mainApi = new MainApi({
  baseUrl: MAIN_API_ADDRESS,
})

export default mainApi;