
// Import the User model to interact with the User collection in the database
const User = require('../models/user');

// Define the createUser function to handle creating a new user
const createUser = async (req, res) => {
  try {
    // Extract name, email, and age from the request body
    const { name, email, age } = req.body;

    // Create a new User instance with the extracted data
    const newUser = new User({ name, email, age });

    // Save the new user to the database
    await newUser.save();

    // Respond with a success message and the created user's details
    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    // Handle any errors that occur during user creation
    res.status(400).json({ message: 'Error creating user', error: error.message });
  }
};

// Define the getUsers function to handle fetching all users
const getUsers = async (req, res) => {
  try {
    // Fetch all users from the database
    const users = await User.find();

    // Respond with the list of users
    res.status(200).json(users);
  } catch (error) {
    // Handle any errors that occur during fetching users
    res.status(500).json({ message: 'Error fetching users', error: error.message });
  }
};

// Export both createUser and getUsers functions to make them accessible in other files
module.exports = { createUser, getUsers };
