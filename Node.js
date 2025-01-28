const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');  // Optional: Use if you want to email submissions
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// Create a POST route to handle form submissions
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'All fields are required.' });
  }

  // Store the data in a database (Optional)
  // Example: Using MongoDB, MySQL, etc.
  
  // If you want to send an email:
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your-email@gmail.com', // Use your email
      pass: 'your-email-password',  // Use your email password or OAuth2
    },
  });

  const mailOptions = {
    from: 'your-email@gmail.com', // Sender's email address
    to: 'contactwisdomroots@gmail.com', // Receiver's email address
    subject: 'New Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    // Send email
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ success: false, message: 'Error sending message.' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});