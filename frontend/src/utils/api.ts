import axios from 'axios';

export const getOrderCountByHour = async () => {
  const response = await axios.get('http://localhost:8000/order-count-by-hour/');
  return response.data;
};
