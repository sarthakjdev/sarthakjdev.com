import emailjs from '@emailjs/browser';
import config from '../configs/config.js'

export default async function sendMail(values) {

    const toVisitorsOptions = {
        name: values.name,
        visitorsEmail: values.email,
        message: values.description,
        title: values.title
    }

    await emailjs.init(config.EMAILJS_USER_ID)
    const mailed =  await emailjs.send(config.EMAILJS_SERVICE_ID, config.EMAILJS_TEMPLATE_ID, toVisitorsOptions)

    return mailed
}
