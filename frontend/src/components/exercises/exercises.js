import React from 'react';
import { withRouter } from 'react-router-dom';
import '../../CSS/exercises.css';

class Exercise extends React.Component {
  constructor(props) {
    super(props);
    debugger
    this.state = {
      exercises: [],
      workoutId: this.props.workoutId
    }
  }

  componentWillMount() {
    // this.props.fetchWorkoutExercises(this.props.currentW.id);
    this.props.fetchWorkoutExercises(this.state.workoutId);
  }

  componentWillReceiveProps(newState) {
    this.setState({ exercises: newState.exercises }); //this is usually the entitiy's name
  }

  render() {
    if (this.state.exercises.length === 0) {
      return (<div>This workout has no exercises</div>)
    } else {
      return (
        <div>
          <h2>All of This workout's exercises</h2>
          {this.state.exercises.map(exercise => (
            <li className="exercise-info">
              <div>{exercise.name}</div>
              <div>{exercise.description}</div>
            </li>
          ))}
        </div>
      );
    }
  }
}
export default withRouter(Exercise);