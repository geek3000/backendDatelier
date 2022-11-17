const { Schedule } = require("./db.service");


async function getSchedules() {

    return await Schedule.findAll();
}


async function getScheduleById(id) {

    return await Schedule.findOne({where:{id}});
}

async function createSchedule(data) {

    return await Schedule.create(data);
}

async function updateSchedule(id, {data}) {

    return await Schedule.update(data, {where:{id}});
}

async function deleteSchedule(id) {
    return await Schedule.destroy({where:{id}});
}

module.exports = {getSchedules, getScheduleById, createSchedule, updateSchedule, deleteSchedule};