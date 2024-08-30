const express = require('express');
const app = express();
require('dotenv').config(); 
const connectDB = require('./utility/db'); 
const routes = require('./routes/indexRouter'); 

const port = 3000; // Define the port on which the server will run

// Middleware to parse JSON request bodies
app.use(express.json());

// Connect to MongoDB
connectDB();

// Use the imported routes for handling requests
app.use(routes);

// Default route to check if the server is running
app.get('/', (req, res) => {
    res.send("Server is ready !!!");
});

// Start the server and listen on the defined port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
