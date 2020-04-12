import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import workout from './workout_reducer';
import exercise from './exercise_reducer';

const RootReducer = combineReducers({
  session,
  workout,
  exercise,
  errors
});

export default RootReducer;