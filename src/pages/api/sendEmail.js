import nodemailer from 'nodemailer';

import {
	EMAIL_HOST,
	EMAIL_PORT,
	EMAIL_USER,
	EMAIL_PASS,
	DESTINATION_EMAIL,
} from '@/constants/url.js';

export default async function handler(req, res) {
	if (req.method !== 'POST') {
		res.status(405).send('Method Not Allowed');
		return;
	}

	const { firstName, lastName, phoneNumber, email, comment, file } = req.body;

	// Configure Nodemailer
	const transporter = nodemailer.createTransport({
		host: EMAIL_HOST,
		port: EMAIL_PORT,
		secure: true,
		auth: {
			user: EMAIL_USER,
			pass: EMAIL_PASS,
		},
		tls: { rejectUnauthorized: false },
	});

	// Configuration for the email
	const message = {
		from: EMAIL_USER,
		to: DESTINATION_EMAIL,
		subject: `Письмо с сайта от ${firstName} ${lastName}`,
		text: `
		Имя: ${firstName}
		Фамилия: ${lastName}
		Телефон: ${phoneNumber}
		E-mail: ${email}
		Сообщение:
		${comment}
		
		Письмо сформировано системой автоматически, на него не нужно отвечать.
	`,
		html: `
		<p><strong>Имя:</strong> ${firstName}</p>
		<p><strong>Фамилия:</strong> ${lastName}</p>
		<p><strong>Телефон:</strong> ${phoneNumber}</p>
		<p><strong>E-mail:</strong> ${email}</p>
		<p><strong>Сообщение:</strong></p>
		<p>${comment}</p>
		<br>
		<p><em>Письмо сформировано системой автоматически, на него не нужно отвечать.</em></p>
	`,
		attachments: file
			? [{ filename: file.name, content: file.content, encoding: 'base64' }]
			: [],
	};

	try {
		await transporter.sendMail(message);
		res.status(200).send({ message: 'Email sent successfully' });
	} catch (error) {
		console.error('Error sending mail:', error);
		res.status(500).send({ error: 'Failed to send email' });
	} finally {
		transporter.close();
	}
}
