import mailer from 'nodemailer';

import {
	EMAIL_HOST,
	EMAIL_PORT,
	EMAIL_USER,
	EMAIL_PASS,
	DESTINATION_EMAIL,
} from '@/constants/url.js';

const smtpTransport = mailer.createTransport(
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

const sendEmail = async (message) => {
	try {
		const info = await smtpTransport.sendMail(message);
		console.log('Nodemailer: Письмо успешно отправлено!', info);
	} catch (error) {
		console.log(error);
	} finally {
		smtpTransport.close();
	}
};

export default sendEmail;
