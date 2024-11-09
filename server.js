// Import required packages
const express = require('express'); // Express framework for building web applications
const mongoose = require('mongoose'); // Mongoose for MongoDB object modeling
const userController = require('./controller/userController'); // Importing user controller

// Initialize the Express application
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Define the port number
const PORT = 3000;

// Connect to MongoDB database
mongoose.connect('mongodb+srv://vadlakondasrikanth136:<srikanth123>@cluster0.zewpw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB successfully');
})
.catch(err => {
  console.error('Error connecting to MongoDB:', err.message);
});

// Set up the root endpoint to respond with a welcome message
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Set up a POST endpoint for creating a new user
app.post('/users', userController.createUser);

// Set up a GET endpoint for fetching all users
app.get('/users', userController.getUsers);

// Start the server and listen for incoming requests
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
