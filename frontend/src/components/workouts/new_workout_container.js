import { connect } from 'react-redux';
import { newWorkout } from '../../actions/workout_actions';
import NewWorkout from './new_workout';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    newWorkout: data => dispatch(newWorkout(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewWorkout);