import { connect } from 'react-redux';
import { fetchWorkoutExercises, fetchExercises } from '../../actions/exercise_actions';
import Exercises from './exercises';

const mapStateToProps = (state) => {
  return {
    exercises: Object.values(state.exercise.workout),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchWorkoutExercises: (id) => dispatch(fetchWorkoutExercises(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Exercises);