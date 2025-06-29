import { createTransport } from "nodemailer";

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;
const recipient = process.env.RECIPIENT;

export const transporter = createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: email,
    pass,
  },
});

export const mailOptions = {
  from: email,
  to: recipient,
};
