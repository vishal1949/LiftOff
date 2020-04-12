import { RECEIVE_WORKOUTS, RECEIVE_WORKOUT, RECEIVE_NEW_WORKOUT, RECEIVE_USER_WORKOUTS } from '../actions/workout_actions';

const WorkoutsReducer = (state = { all: {}, user: {}, new: undefined }, action) => {
   
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_WORKOUTS:
      newState.all = action.workouts.data;
      return newState;
    case RECEIVE_WORKOUT:
      newState.user = action.workout.data;
      return newState;
    case RECEIVE_USER_WORKOUTS:
      newState.user = action.workouts.data;
      return newState;  
    case RECEIVE_NEW_WORKOUT:
      newState.new = action.workout.data
      return newState;
    default:
      return state;
  }
};

export default WorkoutsReducer;