const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Exercise = require('../../models/Exercise');
const Workout = require('../../models/Workout');

router.get('/', (req, res) => {
  Exercise.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(404).json({ noexercisesfound: "No Exercises Found"}))
})

router.get('/apple', (req, res) => {
  let exer = Exercise.findById("5e92ad0ef7b97e676d4ed246").then(exers => {
    res.json(exers)
  });
  return exer
})


router.get('/workout/:id/exercises/:workoutname', (req, res) => {
  Exercise.find({ workout: req.params.id })
    .populate('workout')
    .then(exercises => res.json(exercises))
    .catch(err => res.status(404).json({noexercisesfound: "No Exercises Found"}));
});

router.post('/newexercise',
  async function(req, res) {
    const newExercise = new Exercise({
      name: req.body.name,
      description: req.body.description,
      workout: req.body.workout
    });

    newExercise.save((err, exercise) => {
      Workout.findByIdAndUpdate(req.body.workout, { $addToSet: { exercises: exercise } }, { upsert: true }, (workout) => workout);
    })
   }
);


module.exports = router;