import axios from 'axios';

const API = axios.create({ baseURL: 'https://social-media-webapp-using-mern.onrender.com/' });

export const logIn = (formData) => {
  console.log("Login API called");
  return API.post('/auth/login', formData);
};

export const signUp = (formData) => API.post('/auth/register', formData);