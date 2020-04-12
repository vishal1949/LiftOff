const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Workout = require('../../models/Workout');
const validateWorkoutInput = require('../../validation/workouts');

router.get('/', (req, res) => {
  Workout.find()
    .sort({ date: -1 })
    .then(workouts => res.json(workouts))
    .catch(err => res.status(404).json({ noworkoutsfound: "No Workouts Found" }));
});


router.get('/user/:id/workouts', (req, res) => {
  Workout.find({ user: req.params.id })
    .sort({date: -1})
    .then(workouts => res.json(workouts))
    .catch(err => res.status(404).json({noworkoutsfound: "No Workouts Found"}));
});

router.get('/workouts/:workoutId', (req, res) => {
  Workout.find({ workout: req.params.workoutId })
    .then(workout => res.json(workout))
    .catch(err => res.status(404).json({workoutnotfound: "Workout Not Found"}));
});

router.get('/:workoutId', (req, res) => {
  Workout.findById(req.params.workoutId)
    .then(workout => res.json(workout))
    .catch(err => res.status(404).json({workoutnoutfound: "Workout Not Found"}));
});

router.post('/createworkout',
  (req, res) => {
    const newWorkout = new Workout({
      name: req.body.name,
      description: req.body.description,
      user: req.body.user,
      date: req.body.date
    });
     
    newWorkout.save().then(workout => res.json(workout)).catch(err => res.status(404).json({ workoutnoutfound: "what the?" }));
  }
);

module.exports = router;
