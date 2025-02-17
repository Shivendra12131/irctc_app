# 🚆 Railway Management System

A full-fledged IRCTC-like railway booking system built using **Node.js, Express.js, and MySQL**. This project provides a seamless experience for users to search, book, and manage train tickets.

## 🛠 Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MySQL
- **Authentication:** JWT
- **Other Tools:** Sequelize (ORM)

## ✨ Features

- User Registration & Authentication (JWT-based)
- Train Search & Availability Check
- Ticket Booking 
- Admin Dashboard for Train addition

## 🚀 Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/railway-management.git
   cd railway-management
## env

- DB_HOST=your_mysql_host
- DB_USER=your_mysql_user
- DB_PASS=your_mysql_password
- DB_NAME=railway_db
- JWT_SECRET=your_secret_key
- Api_key=Your-secrer_Api_key

## 📌 API Endpoints
🧑 User Authentication
- POST /api/auth/register → Register a new user
- POST /api/auth/login → Login & get JWT token

🚆 Train & Ticket Management
- POST /api/trains/add → Add a new train (Admin only)
-  Middleware: verifyAdmin
    Request Body Example:
  
```
{
  "trainName": "Rajdhani Express",
  "source": "Delhi",
  "destination": "Mumbai",
  "departureTime": "10:00 AM",
  "arrivalTime": "06:00 PM",
  "totalSeats": 200
}
```


- GET /api/trains/search → Search available trains
Body: source, destination, date
- GET /api/trains/seats → Get seat availability
Body: trainId, date
```
{
  "trainId": 1,
  "userId": 5,
  "seatNumber": 45,
  "date": "2025-02-20"
}
```
