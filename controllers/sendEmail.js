const nodemailer = require("nodemailer")
const sgMail = require('@sendgrid/mail')

const sendEmailEthereal = async (req, res) => {
    let testAccount = await nodemailer.createTestAccount()

    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'adella.schoen@ethereal.email',
            pass: 'dydqBpMXphD6r2V57E'
        }
    });

    let info = await transporter.sendMail({
        from: '"Test mail" <cowoco8670@vasqa.com>',
        to: "bar@exemple.com",
        subject: "Hello",
        html: "<h2>Sending Emails with NodeJS",
    })

    res.json(info)
}

const sendEmail = async (req, res) => {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)

    const msg = {
        to: 'cowoco8670@vasqa.com', // Change to your recipient
        from: 'adella.schoen@ethereal.email', // Change to your verified sender
        subject: 'Sending with SendGrid is Fun',
        text: 'and easy to do anywhere, even with Node.js',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
      }

      const info = await sgMail.send(msg)
      
      res.json(info)
}

module.exports = sendEmail