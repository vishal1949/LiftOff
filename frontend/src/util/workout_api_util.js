import axios from 'axios';

export const getWorkouts = () => {
  return axios.get('/api/workouts/') //nochange
};

export const getUserWorkouts = id => {
  return axios.get(`/api/workouts/user/${id}/workouts`)
};

export const getWorkout = id => { //TODO
  return axios.get(`/api/workouts/${id}`)
};

export const createWorkout = data => {
  return axios.post('/api/workouts/createworkout', data)
}

