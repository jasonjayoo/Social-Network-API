const router = require('express').Router();
const { route } = require('./user-routes');

const {
  addThought,
  getAllThoughts,
  getThoughtById,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction
} = require('../../controllers/thought-controller');

// /api/thoughts
router.route('/').get(getAllThoughts).post(addThought);

// /api/<thoughtId>/update thoughts/delete thoughts
router.route('/:id').get(getThoughtById).put(updateThought).delete(deleteThought);

// /api/<thoughtId>/reactions
router.route('/:id/reactions').post(addReaction);

// /api/<thoughtId>/reactions/<reactionId>
router.route('/:id/reactions/:reactionId').delete(removeReaction);

module.exports = router;
