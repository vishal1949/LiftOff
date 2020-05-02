const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SetSchema = new Schema({
  exercise: {
    type: Schema.Types.ObjectId,
    ref: 'sets'
  },
  reps: {
    type: Number,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  isBodyWeight: {
    type: Boolean,
    required: true,
  }
});

module.exports = Sets = mongoose.model('sets', SetSchema);