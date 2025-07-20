const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

const User = require('../models/user');

module.exports = () => {

  router.post('/register', async (req, res) => {
    try{
      const { email, password } = req.body;

      const existingUser = await User.findOne({ email });

      if (existingUser) {
        return res.status(400).json({ error: 'User already exists' });
      }

      const hash = await bcrypt.hash(password, 10);

      const user = new User({ email, password: hash });
      const savedUser = await user.save();

      res.status(201).json({ message: 'User registered', id: savedUser._id });
    }catch(e){
      console.log(e);
      res.status(500).json({ message: 'Server error' });
    }
  });

  return router;
};
