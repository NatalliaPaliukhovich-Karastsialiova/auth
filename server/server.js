const express = require('express');
const cors = require('cors');
require('dotenv').config();

const connectDB = require('./db');
const authRoutes = require('./routes/auth');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (_, res) => res.send('API is ready'));

connectDB();

app.use('/api/auth', authRoutes());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running http://localhost:${PORT}`));

