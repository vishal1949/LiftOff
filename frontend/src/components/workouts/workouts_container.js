import { connect } from 'react-redux';
import { fetchUserWorkouts } from '../../actions/workout_actions';
import Workouts from './workouts';

const mapStateToProps = (state) => {
    return {
      workouts: Object.values(state.workout.user),
      currentUser: state.session.user
    };
    

};

const mapDispatchToProps = dispatch => {
  return {
    fetchUserWorkouts: (id) => dispatch(fetchUserWorkouts(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Workouts);