const express = require('express');
const router = express.Router();
const scheduleController = require('../controllers/schedule.controller');

/* GET schedule. */
router.get('/', scheduleController.get);

/* POST schedule */
router.post('/', scheduleController.create);

/* PUT schedule */
router.put('/:code', scheduleController.update);

/* DELETE schedule */
router.delete('/:code', scheduleController.remove);

module.exports = router;