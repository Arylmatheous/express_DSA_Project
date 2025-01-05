const express = require("express");
const router = express.Router();
const Orders = require("../Models/MenuSystem"); //Import the Mongoose model

// POST route to handle from submissions
router.post("/", async(req, res) => {
    const {orders, totalAmount} = req.body;

    try {
        // Create a new document in the database
        const ordersEntry = new Orders({ orders, totalAmount});
        const savedEntry = await ordersEntry.save(); // Save to MongoDB

        console.log("Saved Data: ", savedEntry);
        res.status(201).json({ message: "Orders Submitted Successfully", data: savedEntry});
    } 
    catch (error) {
        console.error("Error saving order data:", error);
    }
});

module.exports = router;

// const express = require("express");
// const router = express.Router();

// router.post("/", (req, res) => {
//     const {orders, totalAmount} = req.body;

//     console.log("Received Data: ", {orders, totalAmount});

//     res.status(200).json({message: "Order submitted successfully!"});

// });

// module.exports = router;