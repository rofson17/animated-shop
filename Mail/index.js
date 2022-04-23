import nodemailer from 'nodemailer';
import mailBody from './MailBody';


export default async (firstName, lastName, email, subject, message) => {

    const transporter = nodemailer.createTransport({
        // host: 'smtp.gmail.com',
        // port: 465,
        service: 'gmail',
        auth: {
            user: process.env.SMPT_EMAIL,
            pass: process.env.SMTP_EMALI_PASSWORD
        }
    });
    const messageOptions = {
        from: process.env.SMPT_EMAIL,
        to: process.env.ADMIN_EMAIL,
        subject: `Mail✉ from Shop about -${subject}`,
        html: mailBody(firstName, lastName, email, subject, message)
    }
    await transporter.sendMail(messageOptions, function (error, data) {
        if (error) {
            console.log(error.message);
        }
    })
}
