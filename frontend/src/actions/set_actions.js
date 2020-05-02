import {getSets, getExerciseSets, createSet} from '../util/set_api_util';

export const RECEIVE_SETS = "RECEIVE_SETS";
export const RECEIVE_EXERCISE_SETS = "RECEIVE_EXERCISE_SETS";
export const RECEIVE_NEW_SET = "RECEIVE_NEW_SET";

export const receiveSets = set => ({
  type: RECEIVE_SETS,
  set
})

export const receiveExerciseSets = sets => ({
  type: RECEIVE_EXERCISE_SETS,
  sets
})

export const receiveNewSet = set => ({
  type: RECEIVE_NEW_SET,
  set
})

export const fetchSets = () => dispatch => {
  getSets()
    .then(sets => dispatch(receiveSets(sets)))
    .catch(err => console.log(err))
}

export const fetchExerciseSets = id => dispatch => {
  getExerciseSets()
    .then(sets => dispatch(receiveExerciseSets(sets)))
    .catch(err => console.log(err))
}

export const newSet = data => dispatch => {
  createSet()
    .then(set => dispatch(receiveNewSet(set)))
    .catch(err => console.log(err))
}
≈