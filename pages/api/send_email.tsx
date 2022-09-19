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
            subject: `Nueva consulta desde el Sitio Web: cidvillaallende.com.ar`, // Subject line
            html: `
                <div style="padding: 10px 50px; background-color: rgba(239, 106, 52, .1); width: max-content; border: 2px solid #ef6a34;">
                    <h2 style="color: #ef6a34;">Nombre: <span style="color: black; font-weight: 500;">${req.body.name}</span></h1>
                    <h2 style="color: #ef6a34;">Teléfono: <span style="color: black; font-weight: 500;">${req.body.phone}</span></h2>
                    <h2 style="color: #ef6a34;">Mensaje: <span style="color: black; font-weight: 500;">${req.body.text}</span></h2>
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

