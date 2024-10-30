import nodemailer from 'nodemailer';

export default async function handler(req:any, res:any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, comment } = req.body;

  // Create a transporter (you'll need to set these values in your .env file)
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: 'your-email@example.com', // Replace with your email
      subject: `New Comment from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Comment: ${comment}
      `,
    });

    res.status(200).json({ message: 'Comment sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error sending comment' });
  }
}