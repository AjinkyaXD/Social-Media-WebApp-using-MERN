import API from './index.js';

export const logIn = (formData) => {
  console.log("Login API called");
  return API.post('/auth/login', formData);
};

export const signUp = (formData) => API.post('/auth/register', formData);