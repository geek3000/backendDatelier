const { Schedule } = require("./db.service");


async function getSchedules() {

    return await Schedule.findAll();
}


async function getScheduleById(code) {

    return await Schedule.findOne({ where: { code } });
}

async function createSchedule(data) {

    return await Schedule.create(data);
}

async function updateSchedule(code, data) {

    return await Schedule.update(data, { where: { code } });
}

async function deleteSchedule(code) {
    return await Schedule.destroy({ where: { code } });
}

module.exports = { getSchedules, getScheduleById, createSchedule, updateSchedule, deleteSchedule };