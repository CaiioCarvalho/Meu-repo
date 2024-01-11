

export async function POST(req: Request, res:Request) {
  const { name, email, message} = await req.json()
  // console.log(name)
  require('dotenv').config()
  const PASSWORD = process.env.password
  let nodemailer = require('nodemailer')
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: 'generatoremail3@gmail.com',
      pass: 'CDF785c7cc!',
    },
    secure: true,
  })
  const mailData = {
    from: 'demo email',
    to: 'your email',
    subject: `Message From ${name}`,
    text: message + " | Sent from: " + email,
    html: `<div>${message}</div><p>Sent from:
    ${email}</p>`
  }
  transporter.sendMail(mailData, function (err: any, info: any) {
    if(err)
      console.log(err)
    else
      console.log(info)
  })

    return new Response(JSON.stringify({message: 'ok'}))
  }
