import React from 'react';
import WorkoutBox from './workout_box';

class NewWorkout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      description: "",
      user: this.props.currentUser
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ name: nextProps.name, description: nextProps.description });
  }

  handleSubmit(e) {
    e.preventDefault();
    let workout = {
      name: this.state.name,
      description: this.state.description,
      user: this.state.user.id,
      date: new Date(),
    };
    this.props.newWorkout(workout);
    this.setState({ name: '', description: '' })
  }

  update(field) {
    return e => this.setState({
    [field]: e.currentTarget.value
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input type="textarea"
              value={this.state.name}
              onChange={this.update('name')}
              placeholder="Name"
            />
            <br />
            <input type="textarea"
              value={this.state.description}
              onChange={this.update('description')}
              placeholder="Description"
            />
            <input type="submit" value="Submit" />
          </div>
        </form>
        <br />
        <WorkoutBox name={this.state.name} description={this.state.description}/>
      </div>
    )
  }
}

export default NewWorkout;