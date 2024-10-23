import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Log request body for debugging
    console.log('Received request:', req.body);

    // Email configuration using Nodemailer
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com', // Use Gmail's SMTP server
      port: 465, // Secure SMTP port
      secure: true, // Use SSL
      auth: {
        user: process.env.EMAIL, // Email from environment variables
        pass: process.env.EMAIL_PASSWORD, // Password from environment variables (or App Password)
      },
    });

    const mailOptions = {
      from: email, // The sender's email
      to: process.env.EMAIL, // Your email address to receive messages
      subject: `Message from ${name}`,
      text: `You have a new message from ${name} (${email}):\n\n${message}`,
    };

    try {
      // Send the email
      await transporter.sendMail(mailOptions);
      console.log('Email sent successfully');
      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      // Log detailed error
      console.error('Error sending email:', error);

      // Send appropriate response to the client
      res.status(500).json({ error: 'Failed to send email. Please try again later.' });
    }
  } else {
    // Handle wrong HTTP method
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
