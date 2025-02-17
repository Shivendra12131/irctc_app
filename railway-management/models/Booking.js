const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const User = require("./User");
const Train = require("./Train");

const Booking = sequelize.define("Booking", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    userId: { type: DataTypes.INTEGER, allowNull: false, references: { model: User, key: "id" } },
    trainId: { type: DataTypes.INTEGER, allowNull: false, references: { model: Train, key: "train_number" } },
    numSeats: { type: DataTypes.INTEGER},
});

module.exports = Booking;
