import { connect } from 'react-redux';
import { fetchWorkoutExercises, newExercise  } from '../../actions/exercise_actions';
import FullWorkout from './full_workout'

const mapStateToProps = (state) => {
  return {
    // workout,
    exercises: state.exercise.workout 
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchWorkoutExercises: (id) => dispatch(fetchWorkoutExercises(id)),
    newExercise: data => dispatch(newExercise(data))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FullWorkout);