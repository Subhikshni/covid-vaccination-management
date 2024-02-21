const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("./db.js");
const CovidData = sequelize.define("CovidData", {
  Name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  SlotDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  Slot: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  contactNumber: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  centerName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

const CenterData = sequelize.define("CenterData", {
  pincode: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  centerName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  slotSession: {
    type: DataTypes.ENUM("Morning", "Evening"),
    allowNull: false,
  },
  slotsAvailability: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = { CovidData, CenterData };
