const { DataTypes } = require("sequelize");


const ScheduleModel = {
    code: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        //  autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
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
        defaultValue: "pending",
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
        type: DataTypes.DATE,
        allowNull: false,
    },
};


module.exports = { ScheduleModel };