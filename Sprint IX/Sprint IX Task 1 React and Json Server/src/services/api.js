import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Users API
export const usersAPI = {
  getAll: () => api.get('/users'),
  getById: (id) => api.get(`/users/${id}`),
  create: (user) => api.post('/users', user),
  update: (id, user) => api.put(`/users/${id}`, user),
  delete: (id) => api.delete(`/users/${id}`),
  getPaginated: (page, limit) => api.get(`/users?_page=${page}&_limit=${limit}`),
};

// Products API
export const productsAPI = {
  getAll: () => api.get('/products'),
  search: (query) => api.get(`/products?q=${query}`),
  filterByCategory: (category) => api.get(`/products?category=${category}`),
  searchAndFilter: (query, category) => {
    let url = '/products?';
    if (query) url += `q=${query}&`;
    if (category) url += `category=${category}`;
    return api.get(url);
  },
};

// Posts API
export const postsAPI = {
  getAll: () => api.get('/posts'),
  getById: (id) => api.get(`/posts/${id}`),
  create: (post) => api.post('/posts', post),
  update: (id, post) => api.put(`/posts/${id}`, post),
  delete: (id) => api.delete(`/posts/${id}`),
};

// Comments API
export const commentsAPI = {
  getAll: () => api.get('/comments'),
  getByPostId: (postId) => api.get(`/comments?postId=${postId}`),
  create: (comment) => api.post('/comments', comment),
  delete: (id) => api.delete(`/comments/${id}`),
};