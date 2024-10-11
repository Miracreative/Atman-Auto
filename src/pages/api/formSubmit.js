import nodemailer from 'nodemailer';

export default async function handler(req, res) {
	if (req.method === 'POST') {
		const { firstName, lastName, phoneNumber, email, comment } = req.body;

		// Создание транспортера Nodemailer
		const transporter = nodemailer.createTransport({
			host: process.env.EMAIL_HOST,
			port: parseInt(process.env.EMAIL_PORT, 10),
			auth: {
				user: process.env.EMAIL_USER,
				pass: process.env.EMAIL_PASS,
			},
		});

		const mailOptions = {
			from: process.env.EMAIL_USER,
			to: process.env.DESTINATION_EMAIL,
			subject: 'Новая форма обратной связи',
			text: `Имя: ${firstName}\nФамилия: ${lastName}\nТелефон: ${phoneNumber}\nEmail: ${email}\nКомментарий: ${comment}`,
		};

		try {
			await transporter.sendMail(mailOptions);
			res.status(200).json({ message: 'Форма успешно отправлена' });
		} catch (error) {
			console.error('Ошибка отправки:', error);
			res.status(500).json({ error: 'Ошибка отправки формы' });
		}
	} else {
		res.setHeader('Allow', ['POST']);
		res.status(405).end(`Метод ${req.method} не разрешен`);
	}
}
