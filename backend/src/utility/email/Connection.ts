import { ENV } from "@/config/env";
import nodemailer from "nodemailer";

const MAIL_HOST = ENV.MAIL_HOST;
const MAIL_PORT = ENV.MAIL_PORT;
const MAIL_USER = ENV.MAIL_USER;
const MAIL_PASS = ENV.MAIL_PASS;

const transporter = nodemailer.createTransport({
  host: MAIL_HOST,
  port: MAIL_PORT,
  auth: {
    user: MAIL_USER,
    pass: MAIL_PASS,
  },
});

async function SendEmail({
  to,
  bcc,
  subject,
  text = "Something went wrong! Update Mail Application this email is for loi request",
  html,
  attachments,
}) {
  try {
    const mailResponse = await transporter.sendMail({
      from: `"Astha Trip" <${MAIL_USER}>`,
      to,
      bcc,
      subject,
      text,
      html,
      attachments,
    });

    console.log("🚀 ~ mailResponse:", mailResponse);
    return { send: mailResponse.messageId };
  } catch (error) {
    console.log("🚀 ~ SendEmail ~ error:", error);
    return { send: false, err: error, message: error.message };
  }
}
export default SendEmail;
