import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

interface mailData {
  text: string;
  subject: string;
  userEmail: string;
  userName: string;
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { text, subject, userEmail, userName } = req.body as mailData;

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
      text: `Alguem deseja entrar em contato!\n\nNome: ${userName}\nE-mail: ${userEmail}\nTexto: ${text}`,
      subject,
      from: 'Contato',
      to: process.env.CONTACT_EMAIL_ADRESS,
    });
  
    return res.status(200).json("OK");
  } catch (error) {
    return res.status(400).json("ERROR");
  }  
}