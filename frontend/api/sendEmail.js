import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Email configuration using Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL, // Email from environment variables
        pass: process.env.EMAIL_PASSWORD,  // Password from environment variables
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL, // Your email address to receive messages
      subject: `Message from ${name}`,
      text: `You have a new message from ${name} (${email}):\n\n${message}`,
    };

    try {
      // Send the email
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Failed to send email' });
    }
  } else {
    // Handle wrong HTTP method
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
