import { RECEIVE_EXERCISES, RECEIVE_WORKOUT_EXERCISES, RECEIVE_NEW_EXERCISE } from '../actions/exercise_actions';

const ExercisesReducer = (state = { all: {}, workout: {} }, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_EXERCISES:
      newState.all = action.exercises.data;
      return newState;
    case RECEIVE_WORKOUT_EXERCISES:
      newState.workout = action.exercises.data;
      return newState;
    case RECEIVE_NEW_EXERCISE:
      newState.new = action.exercise.data
      return newState;
    default:
      return state;
  }
};

export default ExercisesReducer;