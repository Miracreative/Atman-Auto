import mailer from 'nodemailer';

import {
	EMAIL_HOST,
	EMAIL_PORT,
	EMAIL_USER,
	EMAIL_PASS,
	DESTINATION_EMAIL,
} from '@/constants/url.js';

export default async function handler(req, res) {
	if (req.method === 'POST') {
		const { file } = req.body;

		// Конфигурация Nodemailer
		const transporter = mailer.createTransport(
			{
				host: EMAIL_HOST,
				port: EMAIL_PORT,
				secure: true,
				auth: {
					user: EMAIL_USER,
					pass: EMAIL_PASS,
				},
				tls: { rejectUnauthorized: false },
			},
			{
				from: `Запрос на обратную связь <${DESTINATION_EMAIL}>`, // от кого
			},
		);

		// Конфигурация письма
		const mailOptions = {
			from: EMAIL_USER,
			to: NEXT_PUBLIC_DESTINATION_EMAIL,
			attachments: [
				{
					filename: file.name, // Имя файла
					content: file.content, // Содержимое файла в base64
					encoding: 'base64',
				},
			],
		};

		try {
			const info = await transporter.sendMail(mailOptions);
			console.log('Nodemailer: Письмо успешно отправлено!', info);
		} catch (error) {
			console.log(error);
		} finally {
			transporter.close();
		}
	} else {
		res.status(405).json({ error: 'Method not allowed' });
	}
}
