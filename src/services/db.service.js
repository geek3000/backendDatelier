const Sequelize = require("sequelize");
const { ScheduleModel } = require("../models/schedule.model");
const config = require("../configs/db.configs")

const sequelize = new Sequelize(
    config.database,
    config.user,
    config.password,
    {
        host: config.host,
        port: config.port,
        dialect: 'mysql',
        dialectOptions: {
            ssl: config.ssl
        }
    }
);


const Schedule = sequelize.define("schedules", ScheduleModel);


sequelize.sync().then(()=>console.log("success")).catch((e)=>{console.log(e)})

sequelize.authenticate().then(()=>console.log("success auth")).catch((e)=>{console.log(e)})

module.exports= {sequelize, Schedule};