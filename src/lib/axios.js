import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_APP_API_URL || `http://${process.env.IP_CONFIG}:${process.env.API_ROUTE}`,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.TOKEN || ''}`,
  },
});

export default axiosInstance;
