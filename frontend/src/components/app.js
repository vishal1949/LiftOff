import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import WorkoutsContainer from './workouts/workouts_container';
import NewWorkoutContainer from './workouts/new_workout_container';
import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import FullWorkoutContainer from './workouts/full_workout_container';

const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
      <AuthRoute exact path="/" component={MainPage} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />

      <ProtectedRoute exact path="/profile" component={WorkoutsContainer} />
      <ProtectedRoute exact path="/new_workout" component={NewWorkoutContainer} />
      <ProtectedRoute path="/full_workout/:workoutId/exercises/:workoutname" component={FullWorkoutContainer} />

      
    </Switch>
  </div>
);

export default App;