import { MAIN_API_ADDRESS} from './constants';

const baseUrl = MAIN_API_ADDRESS;

function sendRequestData(url, options) {
  return fetch(url, options)
  .then((res) => {
    if(res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  })
}

export function register(name, email, password) {
  return sendRequestData(`${baseUrl}/signup`, {
    method: 'POST',
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      name: name,
      password: password,
      email: email,
    })
  })
}

export function authorize(email, password) {
  return sendRequestData(`${baseUrl}/signin`, {
    method: 'POST',
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      password: password,
      email: email,
    })
  })
}

export function checkToken(token) {
  return sendRequestData(`${baseUrl}/users/me`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "Authorization" : `Bearer ${token}`
    }
  })
}
