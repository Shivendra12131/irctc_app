const Booking = require("../models/Booking");
const Train = require("../models/Train");
const sequelize = require("../config/db"); 

exports.bookSeat = async (req, res) => {
    const { train_number, numSeats } = req.body;

    const userId = req.user.id;

    if (!numSeats || numSeats <= 0) {
        return res.status(400).json({ message: "Invalid number of seats requested." });
    }
    try {
        const result = await sequelize.transaction(async (t) => {
            const train = await Train.findByPk(train_number, { transaction: t });

            if (!train) {
                throw new Error("Train not found.");
            }

            if (train.availableSeats < numSeats) {
                throw new Error(`Not enough seats available. Only ${train.availableSeats} seats remaining.`);
            }

            train.availableSeats -= numSeats;
            await train.save({ transaction: t });

            const booking = await Booking.create({
                userId: userId,  
                trainId: train_number,
                numSeats:numSeats,
            }, { transaction: t });


          return { train, booking };
        });

        return res.status(200).json({
            message: `${numSeats} seat(s) successfully booked!`,
            train: result
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: error.message });
    }
};

exports.getBookingDetails = async (req, res) => {
    try {
        const bookings = await Booking.findAll({ where: { userId: req.user.id } });
        res.json({ bookings });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
