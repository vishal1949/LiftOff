import React from 'react';
import { withRouter } from 'react-router-dom';
import '../../CSS/workout_box.css';

class WorkoutBox extends React.Component {
  constructor(props) {
    super(props)

  }

  openWorkout = (e) => {
    this.props.history.push(`/full_workout/${this.props.workoutId}`)
  }

  render() {
    return (
      <div className="workout-box" onClick={this.openWorkout}>
        <h2>Name:{this.props.name}</h2>
        <a>Desc:{this.props.desc}</a>
      </div>
    );
  }
}

export default withRouter(WorkoutBox);