const express = require("express");
const dotenv = require("dotenv");
const sequelize = require("./config/db");

dotenv.config();
const app = express();
app.use(express.json());

const authRoutes = require("./routes/authRoutes");
const trainRoutes = require("./routes/trainRoutes");
const bookingRoutes = require("./routes/bookingRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/trains", trainRoutes);
app.use("/api/bookings", bookingRoutes);

sequelize.sync({ force: false }).then(() => console.log("DB Synced"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
