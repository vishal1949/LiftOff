import React from 'react';
import { withRouter } from 'react-router-dom';
import WorkoutBox from './workout_box';
  
class Workout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      workouts: []
    }
  }

  componentWillMount() {
    console.log(this.props.currentUser.id)
    this.props.fetchUserWorkouts(this.props.currentUser.id);
  }

  componentWillReceiveProps(newState) {
    this.setState({ workouts: newState.workouts });
  }

  render() {
    if (this.state.workouts.length === 0) {
      return (<div>This user has no workouts</div>)
    } else {
      return (
        <div>
          <h2>All of This User's workouts</h2>
          {this.state.workouts.map(workout => (
            <WorkoutBox key={workout._id} workoutId={workout._id} name={workout.name} desc={workout.description} />
          ))}
        </div>
      );
    }
  }
}

export default withRouter(Workout);