import axios from 'axios';

export const getExercises = () => {
  return axios.get('/api/exercises')
};

export const getWorkoutExercises = ({id, workoutname}) => {
  return axios.get(`/api/exercises/workout/${id}/exercises/${workoutname}`);
}

export const createExercise = data => {
  return axios.post('/api/exercises/newexercise', data)
}