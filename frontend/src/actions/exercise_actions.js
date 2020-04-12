import { getExercises, getWorkoutExercises, createExercise } from '../util/exercise_api_util';

export const RECEIVE_EXERCISES = "RECEIVE_EXERCISES";
export const RECEIVE_WORKOUT_EXERCISES = "RECEIVE_WORKOUT_EXERCISES";
export const RECEIVE_NEW_EXERCISE = "RECEIVE_NEW_EXERCISE";

export const receiveExercises = exercises => ({
  type: RECEIVE_EXERCISES,
  exercises
});

export const receiveWorkoutExercises = exercises => ({
  type: RECEIVE_WORKOUT_EXERCISES,
  exercises
});

export const receiveNewExercise = exercise => ({
  type: RECEIVE_NEW_EXERCISE,
  exercise
})

export const fetchExercises = () => dispatch => (
  getExercises()
    .then(exercises => dispatch(receiveExercises(exercises)))
    .catch(err => console.log(err))
);

export const fetchWorkoutExercises = id => dispatch => (
  getWorkoutExercises(id)
    .then(exercises => dispatch(receiveWorkoutExercises(exercises)))
    .catch(err => console.log(err))
);

export const newExercise = data => dispatch => (
  createExercise(data)
    .then(exercise => dispatch(receiveNewExercise(exercise)))
    .catch(err => console.log(err))
);