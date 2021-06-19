import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

interface mailData {
  text: string;
  userEmail: string;
  subject: string;
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { text, userEmail, subject } = req.body as mailData;

  const transporter = nodemailer.createTransport({
    host: process.env.CONTACT_EMAIL_HOST,
    port: 587,
    secure: false,
    auth: {
      user: process.env.CONTACT_EMAIL_ADRESS,
      pass: process.env.CONTACT_EMAIL_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
  
  try {
    await transporter.sendMail({
      text: `E-mail: ${userEmail}\nDescrição:\n ${text}`,
      subject: subject,
      from: userEmail,
      to: process.env.CONTACT_EMAIL_ADRESS,
    });
  
    return res.status(200).json("OK");
  } catch (error) {
    console.log(error)
    return res.status(400).json("ERROR");
  }  
}