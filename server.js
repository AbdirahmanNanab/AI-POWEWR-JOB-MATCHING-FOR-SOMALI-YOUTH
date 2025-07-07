require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'src')));

// Routes to HTML files
app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'admin.html'));
});

app.get('/ai', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'ai.html'));
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'auth.html'));
});

app.get('/employer', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'employer.html'));
});

app.get('/seeker', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'seeker.html'));
});


// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/seeker', require('./routes/seeker'));
app.use('/api/employer', require('./routes/employer'));
app.use('/api/admin', require('./routes/admin'));
app.use('/api/ai', require('./routes/ai'));

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));
