// Import mongoose
const mongoose = require('mongoose');

// Define the schema for a User
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // This makes 'name' a mandatory field
  },
  email: {
    type: String,
    required: true, // This makes 'email' a mandatory field
    unique: true    // Ensures email values are unique across all documents
  },
  age: {
    type: Number,
    required: true  // This makes 'age' a mandatory field
  }
});

// Create a model based on the schema
const User = mongoose.model('User', userSchema);

// Export the model so it can be used in other files
module.exports = User;
