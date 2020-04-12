import axios from 'axios';

export const getExercises = () => {
  return axios.get('/api/exercises')
};

export const getWorkoutExercises = id => {
  return axios.get(`/api/exercises/workout/${id}/exercises`);
}

export const createExercise = data => {
  return axios.post('/api/exercises/newexercise', data)
}