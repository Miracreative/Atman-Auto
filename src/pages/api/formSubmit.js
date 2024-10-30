//* Проверка работоспособности (вбить в браузере http://localhost:3000/api/formSubmit) *//

// export default function handler(req, res) {
// 	res.send('Ваше письмо успешно отправлено. Спасибо и пока.');
// 	console.log(req.body);
// }

import {
	EMAIL_USER,
	MAIL_SUCCESSED,
	MAIL_SUBMISSION_ERROR,
	UNKNOWN_ERROR,
} from '@/constants/url.js';

import sendEmail from '@/utils/mail.js';
import { METHOD_NOT_ALLOWED } from '@/utils/informMessages.js';

export default async function handler(req, res) {
	if (req.method !== 'POST') {
		return res.status(405).send(METHOD_NOT_ALLOWED);
	}

	const { firstName, lastName, phoneNumber, email, comment } = req.body;

	const message = {
		to: EMAIL_USER, // куда
		subject: `Письмо с сайта Atman Auto от ${firstName} ${lastName}`,
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
	};

	try {
		await sendEmail(message);
		console.log(message);
		res.status(200).send(MAIL_SUCCESSED);
	} catch (error) {
		console.error(`${MAIL_SUBMISSION_ERROR}:`, error);
		res.status(500).send(UNKNOWN_ERROR);
	}
}
