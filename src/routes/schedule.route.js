const express = require('express');
const router = express.Router();
const scheduleController = require('../controllers/schedule.controller');

/* GET schedule. */
router.get('/', scheduleController.get);
  
/* POST schedule */
router.post('/', scheduleController.create);

/* PUT schedule */
router.put('/:id', scheduleController.update);

/* DELETE schedule */
router.delete('/:id', scheduleController.remove);

module.exports = router;