const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  workout: {
    type: Schema.Types.ObjectId,
    ref: 'workouts'
  },

  name: {
    type: String,
    required: true
  },

  description: {
    type: String,
    required: true
  },

  sets: [{
    type: Schema.Types.ObjectId,
    ref: 'sets'
  }]
  
})

module.exports = Exercise = mongoose.model('exercises', ExerciseSchema);
