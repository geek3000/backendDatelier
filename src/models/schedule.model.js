const { DataTypes } = require("sequelize");


const ScheduleModel = {
    code: {
        type: DataTypes.STRING,
        primaryKey: true,
        //  autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    gender: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: true
    },
    address: {
        type: DataTypes.STRING,
        allowNull: true
    },
    city: {
        type: DataTypes.STRING,
        allowNull: true
    },
    noteBefore: {
        type: DataTypes.STRING,
        allowNull: true
    },
    noteAfter: {
        type: DataTypes.STRING,
        allowNull: true
    },
    status: {
        type: DataTypes.STRING,
        defaultValue: "passed",
        allowNull: true
    },
    appointmentDate: {
        type: DataTypes.DATEONLY,
        allowNull: true
    },
    appointmentTime: {
        type: DataTypes.TIME,
        allowNull: true
    },
    isFirstTime: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    requestDate: {
        type: DataTypes.DATEONLY,
        allowNull: true,
    },
};


module.exports = { ScheduleModel };