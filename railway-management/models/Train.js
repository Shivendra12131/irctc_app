const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Train = sequelize.define("Train", {
    train_number: { type: DataTypes.INTEGER, primaryKey: true,autoIncrement:true},
    name: { type: DataTypes.STRING, allowNull: false },
    source: { type: DataTypes.STRING, allowNull: false },
    destination: { type: DataTypes.STRING, allowNull: false },
    totalSeats: { type: DataTypes.INTEGER, allowNull: false },
    availableSeats: { type: DataTypes.INTEGER, allowNull: false }
});

module.exports = Train;
