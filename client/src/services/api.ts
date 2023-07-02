import axios, { AxiosError } from 'axios';
import { API_URL } from './config';

export let instance = axios.create({
  baseURL: API_URL,
  timeout: 1000,
});

export const setHeader = (token: string) => {
  instance = axios.create({
    baseURL: API_URL,
    timeout: 1000,
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
};

const get = async (endpoint: string) => {
  try {
    const response = await instance.get(endpoint);
    const data: { data: any; message: string; error: boolean } =
      await response.data;
    return data;
  } catch (error: AxiosError | any) {
    console.log('get error', error.response.data);
    return { data: null, message: 'An unexpected error occured!', error: true };
  }
};

const post = async (endpoint: string, payload?: Object) => {
  try {
    const response = await instance.post(endpoint, payload);
    const data: { data: any; message: string; error: boolean } =
      await response.data;
    return data;
  } catch (error: AxiosError | any) {
    console.log('post error', error.response);
    return { data: null, message: 'An unexpected error occured!', error: true };
  }
};

const put = async (endpoint: string, payload?: Object) => {
  try {
    const response = await instance.put(endpoint, payload);
    const data: { data: any; message: string; error: boolean } =
      await response.data;
    return data;
  } catch (error: AxiosError | any) {
    console.log('put error', error.response);
    return { data: null, message: 'An unexpected error occured!', error: true };
  }
};

const books = {
  get: async (offset: number, limit: number) =>
    await get(`/books?offset=${offset}&limit=${limit}`),
};

const comments = {
  get: async () => await get('/comments'),
};

const replies = {
  get: async (commentId: string) => await get('/replies/' + commentId),
};

export const api = {
  books,
  comments,
  replies,
};
