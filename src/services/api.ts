import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://eco-rota-backend.vercel.app/',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'true',
  },
});
