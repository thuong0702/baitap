import axios from "axios";

const BASE_URL =
  "https://my-json-server.typicode.com/codegym-vn/mock-api-books/books";

export const getBooks = async () => {
  return await axios.get(BASE_URL);
};

export const getBookById = async (id) => {
  return await axios.get(`${BASE_URL}/${id}`);
};

export const addBook = async (book) => {
  return await axios.post(BASE_URL, book);
};

export const updateBook = async (id, book) => {
  return await axios.put(`${BASE_URL}/${id}`, book);
};

export const deleteBook = async (id) => {
  return await axios.delete(`${BASE_URL}/${id}`);
};
