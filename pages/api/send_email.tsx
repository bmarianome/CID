import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

export default async function Mailer(req: NextApiRequest, res: NextApiResponse) {

    try {

        const mail = await axios.post('http://localhost:3001/api/send_mail', {
            receiver: 'bmariano.me@gmail.com',
            siteUrl: 'cidvillaallende.com.ar',
            data: {
                type: 'Consulta',
                name: req.body.name,
                phone: req.body.phone,
                message: req.body.text
            },
            branding: {
                logoUrl: "https://www.cidvillaallende.com.ar/icons/CID_WHITE_EMAIL.png",
                mainColor: "#ef6a34",
                bgColor: "rgba(239, 106, 52, .1)"
            }
        }, {
            headers: {
                'authorization': process.env.BMARIANO_API_KEY as string,
                'referer': 'cidvillaallende.com.ar'
            }
        })

        return res.json({ status: "Email sent"})
    }

    catch (error) {
        console.log(error)
        return res.status(500).json({ error })
    }

}

