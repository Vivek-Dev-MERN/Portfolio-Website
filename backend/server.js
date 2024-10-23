const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();  // Load environment variables from .env

const app = express();

// Middleware
app.use(express.json());  // To parse JSON request body
app.use(cors());  // To allow cross-origin requests

// Email configuration (using Nodemailer)
const transporter = nodemailer.createTransport({
  service: 'gmail', // You can use other services like Outlook, Yahoo, etc.
  auth: {
    user: process.env.EMAIL, // Use email from .env
    pass: process.env.EMAIL_PASSWORD,  // Use password from .env
  },
});

// API route to handle contact form submissions
app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: process.env.EMAIL, // Your email address to receive messages
    subject: `Message from ${name}`,
    text: `You have a new message from ${name} (${email}):\n\n${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      return res.status(500).send('Failed to send email');
    }
    res.status(200).send('Email sent successfully!');
  });
});

// Start the server on port 5000 (or any port you prefer)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
