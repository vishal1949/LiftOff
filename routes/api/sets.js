const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Set = require('../../models/Sets');
const Exercise = require('../../models/Exercise');
mongoose.set('useFindAndModify', false);

router.get('/', (req, res) => {
  Set.find()
    .then(sets => res.json(sets))
    .catch(err => res.status(404).json({noSetsFounds: "No Sets Found"}))
})

router.get('/sample', (req, res) => {
  return res.json("HELLO");
})

router.get('/exercise/:id/sets', (req, res) => {
  Sets.find({ exercise: req.params.id })
    .then(sets => res.json(sets))
    .catch(err => res.status(404).json({ noSetsFounds: "No Sets Found" }))
})

router.post('/newset',
  function(req, res){
    const newSet = new Set({
      reps: req.body.reps,
      weight: req.body.weight,
      isBodyWeight: req.body.isBodyWeight,
      exercise: req.body.exercise
    });

    newSet.save((err, set) => {
      Exercise.findByIdAndUpdate(req.body.exercise, { $addToSet: { sets: set } }, { upsert: true }, (exercise) => exercise);
    })
  })

module.exports = router;