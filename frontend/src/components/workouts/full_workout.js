import React from 'react'
import { withRouter } from 'react-router-dom';

class FullWorkout extends React.Component{
  constructor(props){
    super(props)
    debugger
    this.state = {
      exercises: [],
      workoutId: this.props.match.params.workoutId,
      workoutName: this.props.match.params.workoutname,
      newExerciseName: "",
      newExerciseDescription: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.headerInformation = this.headerInformation.bind(this);
  }

  componentWillMount() {
    this.props.fetchWorkoutExercises({
      id: this.state.workoutId,
      workoutname: this.state.workoutName
    });
  }

  componentWillReceiveProps(newState) {
    if(newState.exercises.length > 0){
      let workoutName = (newState.exercises) ? newState.exercises[0].workout.name : ''
      this.setState({ exercises: newState.exercises, workoutName: workoutName });
    }else{
      this.setState({ exercises: newState.exercises })
    }
  }

  async handleSubmit(e) {
    e.preventDefault();
    let exercise = {
      name: this.state.newExerciseName,
      description: this.state.newExerciseDescription,
      workout: this.state.workoutId
    }
    this.props.newExercise(exercise);
    await this.props.fetchWorkoutExercises({
      id: this.state.workoutId,
      workoutname: this.state.workoutName
    });
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

  headerInformation() {
    return(
      <div>
        <div>{this.sumbitForm()}</div>
        <div>{this.state.workoutName}</div>
      </div>
    )
  }

  render(){
    if(this.state.exercises.length < 1)
      return (
        <div>
          {this.headerInformation()}
          No Exercises          
        </div>
      )


    return(
      <div>
        {this.headerInformation()}

        {this.state.exercises.map(exercise => (
          <li>Name is -------> {exercise.name}&nbsp and Desc is --------> {exercise.description}
          </li>
        ))}
      </div>
    )
  }
}

export default withRouter(FullWorkout);