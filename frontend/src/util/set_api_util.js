import axios from 'axios';

export const getSets =  () => {
  return axios.get('/api/sets');
};

export const getExerciseSets = (id) => {
  return axios.get(`/api/sets/exercise/${id}/sets`);
};

export const createSet = (data) => {
  return axios.post('/api/sets/newset', data)
}