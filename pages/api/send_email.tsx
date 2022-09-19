import type { NextApiRequest, NextApiResponse } from 'next'
const nodemailer = require('nodemailer')
import axios from 'axios'

export default async function Mailer(req: NextApiRequest, res: NextApiResponse) {
    
    let transporter = nodemailer.createTransport({
        host: "smtp.zoho.com",
        port: 465,
        auth: {
            user: "secretaria@cidvillaallende.com.ar",
            pass: process.env.CID_MAILS_KEY
        }
    })

    try {
        
        let mail = await transporter.sendMail({
            from: 'secretaria@cidvillaallende.com.ar', // sender address
            to: `secretaria@cidvillaallende.com.ar`, // list of receivers
            subject: `Alerta desde el Sitio Web: cidvillaallende.com.ar`, // Subject line
            html: `
                <div>
                    <h1>Nombre:</h1>
                    <h6>${req.body.name}</h6>
                    <h1>Teléfono:</h1>
                    <h6>${req.body.tel}</h6>
                    <h1>Consulta:</h1>
                    <h6>${req.body.text}</h6>
                </div>
            `
        })

        return res.json({ status: 'Email Sent'})
    }

    catch (error) {
        console.log(error)
        return res.status(500).json({ error })
    }

}

