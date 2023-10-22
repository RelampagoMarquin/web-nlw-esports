import axios from 'axios';

export const apiAxios =  axios.create({
    baseURL: import.meta.env.VITE_API_URL?? "http://back:3333",
    headers: {
      'Content-Type': 'application/json',
      'Accept': '*/*',
    },
  });