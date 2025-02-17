const Train = require("../models/Train");

exports.addTrain = async (req, res) => {
    try {
        const { train_number, name, source, destination, totalSeats } = req.body;
        if (!train_number) {
            return res.status(400).json({ error: "Train number is required" });
        }

        const train = await Train.create({
            train_number, 
            name,
            source,
            destination,
            totalSeats,
            availableSeats: totalSeats
        });

        res.status(201).json({ message: "Train added successfully", train });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getTrains = async (req, res) => {
    try {
        const { source, destination } = req.body;
        const trains = await Train.findAll({
            where: { source, destination }
        });

        res.json({ trains });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getSeatAvailability = async (req, res) => {
    try {
        const { train_number } = req.body;
        const train = await Train.findByPk(train_number);
        console.log(train , "aman")

        if (!train) return res.status(404).json({ message: "Train not found" });

        res.json({ availableSeats: train.availableSeats });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
