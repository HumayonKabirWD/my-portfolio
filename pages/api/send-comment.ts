import nodemailer from 'nodemailer';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, comment } = req.body;

  // Create a transporter with the correct type configuration
  const transporter = nodemailer.createTransport({
    service: 'gmail',  // Using predefined service instead of host/port
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