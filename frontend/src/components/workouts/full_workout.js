import React from 'react'
import { withRouter } from 'react-router-dom';

class FullWorkout extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      exercises: [],
      workoutId: this.props.match.params.workoutId,
      workoutName: "",
      newExerciseName: "",
      newExerciseDescription: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.props.fetchWorkoutExercises(this.state.workoutId);
  }

  componentWillReceiveProps(newState) {
    let workoutName = (newState.exercises) ? newState.exercises[0].workout.name : ''
    this.setState({ exercises: newState.exercises, workoutName: workoutName });
  }

  async handleSubmit(e) {
    e.preventDefault();
    let exercise = {
      name: this.state.newExerciseName,
      description: this.state.newExerciseDescription,
      workout: this.state.workoutId
    }
    this.props.newExercise(exercise);
    await this.props.fetchWorkoutExercises(this.state.workoutId);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    })
  }

  sumbitForm = () => {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input type="text"
            value={this.state.exerciseName}
            onChange={this.update('newExerciseName')}
            placeholder="Exercise Name"
          />
          <br />
          <input type="text"
            value={this.state.newExerciseDescription}
            onChange={this.update('newExerciseDescription')}
            placeholder="Exercise Description"
          />
          <br />
          <input type="submit"
            value="Submit"
          />
        </div>
      </form>
    )
  }

  render(){
    if(this.state.exercises.length < 1)
      return (
        <div>
          {this.sumbitForm()}
          No Exercises          
        </div>
      )


    return(
      <div>
        {this.sumbitForm()}
        <div>{this.state.workoutName}</div>
        {this.state.exercises.map(exercise => (
          <li>Name is -------> {exercise.name}&nbsp and Desc is --------> {exercise.description}
          </li>
        ))}
      </div>
    )
  }
}

export default withRouter(FullWorkout);