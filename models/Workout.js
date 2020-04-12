const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  date: {
    type: Date,
    default: Date.now
  },
  exercises: [{
    type: Schema.Types.ObjectId,
    ref: 'exercises'
  }]
})

module.exports = Workout = mongoose.model('workouts', WorkoutSchema);
