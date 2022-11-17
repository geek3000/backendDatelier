const schedule = require('../services/schedule.service');

async function get(req, res, next) {
    try {
        res.json(await schedule.getSchedules());
    } catch (err) {
        console.error(`Error while getting schedule`, err.message);
        next(err);
    }
}

async function create(req, res, next) {
    try {
         
        res.json(await schedule.createSchedule(req.body));
    } catch (err) {
        console.error(`Error while creating schedule`, err.message);
        next(err);
    }
}

async function update(req, res, next) {
    try {
        res.json(await schedule.updateSchedule(req.params.code, req.body));
    } catch (err) {
        console.error(`Error while updating schedule`, err.message);
        next(err);
    }
}

async function remove(req, res, next) {
    try {
        res.json(await schedule.deleteSchedule(req.params.code));
    } catch (err) {
        console.error(`Error while deleting schedule`, err.message);
        next(err);
    }
}

module.exports = {
    get,
    create,
    update,
    remove
};
