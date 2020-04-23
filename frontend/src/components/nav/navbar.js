import React from 'react';
import { Link } from 'react-router-dom'
import '../../CSS/navbar.css'


class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  // Selectively render links dependent on whether the user is logged in
  getLinks() {
    if (this.props.loggedIn) {
      return (
        <div className='navbar-container'>
          <Link className='navbar-links' to={'/profile'}>Workouts</Link>
          <br />
          <Link to={'/new_workout'}>New Workout</Link>
          <div className='navbar-login navbar-right-side' onClick={this.logoutUser}>Logout</div>
        </div>
      );
    } else {
      return (
        <div>
          <Link className='navbar-login navbar-right-side' to={'/signup'}>Signup</Link>
          <Link className='navbar-login navbar-right-side' to={'/login'}>Login</Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <h1>Lift Off</h1>
        {this.getLinks()}
      </div>
    );
  }
}

export default NavBar;