const mongoose = require('mongoose');

const uri = process.env.MONGO_URI;

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB Connection failed::', err);
    process.exit(1);
  }
}

module.exports = connectDB;
