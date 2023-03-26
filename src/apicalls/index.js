import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://guvi-hackathon-2-vaishak.onrender.com/',
  headers: {
    'Content-Type': 'application/json',
    authorization: `Bearer ${localStorage.getItem('token')}`
  }
});