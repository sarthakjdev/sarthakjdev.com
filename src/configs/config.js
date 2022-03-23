
const dev = {
    email: process.env.EMAIL,
    email_password: process.env.EMAIL_PASSWORD
}

const prod = {
    email: process.env.EMAIL,
    email_password: process.env.EMAIL_PASSWORD
}

const configs = process.env.NODE_ENV === 'production' ?  { ...prod} : {...dev}

export default configs