import nodemailer from 'nodemailer'
import config from '../../configs/config.js'

export default async function sendMail(recipient) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: config.EMAIL,
            pass: config.EMAIL_PASSWORD,
        },
    })

    const mailOptions = {
        from: config.EMAIL,
        to: recipient,
        subject: 'SENDING EMAIL FROM NODEJS ',
        text: `  Thanks for reaching out to me! I will contact you back soon. `,
    }

    const mailed = await transporter.sendMail(mailOptions)

    return mailed
}
