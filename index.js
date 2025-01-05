const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const http = require("http");
const server = http.createServer(app);

app.get('/', (req, res) => {
    res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Server Status</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color: #f0f8ff;
        }

        .status {
            text-align: center;
            padding: 20px;
            border: 2px solid #4caf50;
            border-radius: 10px;
            background-color: #dff0d8;
            color: #3c763d;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .status h1 {
            margin: 0;
            font-size: 2.5rem;
        }

        .status p {
            margin-top: 10px;
            font-size: 1.2rem;
        }
    </style>
</head>
<body>
    <div class="status">
        <h1>Server is Running</h1>
        <p>The server is operating normally.</p>
    </div>
</body>
</html>
`);
});

//Connection to MongoDB
mongoose
    .connect("mongodb+srv://arylmatheous22:Lorraine09193042925@express-dsa-project.vxybs.mongodb.net/", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB Connected"))
    .catch((error) => {
        console.error("MongoDB Connection Error:", error.message);
        process.exit(1); //Exit if the database connection fails
    });

//Middleware
app.use(cors());
app.use(express.json());

//Import API folder 
const submitMenuSystem = require('./API/AddOrder');

//Use API
app.use("/AddOrder", submitMenuSystem);

//Start the server
// const PORT = 5000;

// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`)
// });

// // Start the server Microsoft Azure
const PORT = process.env.PORT || 3000;

server .listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}); 

