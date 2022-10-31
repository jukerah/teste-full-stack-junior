import axios from 'axios';

export function setupAPIClient() {

  const api = axios.create({
    baseURL: 'https://teste-full-stack-junior.herokuapp.com'
  });

  return api;
}