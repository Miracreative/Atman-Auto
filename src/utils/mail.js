import mailer from 'nodemailer';

const smtpTransport = mailer.createTransport(
	{
		host: 'smtp.yandex.ru',
		port: 465,
		secure: true,
		auth: {
			user: 'radicall004@yandex.ru',
			pass: 'gdwemxtnbfrgyabd',
		},
		tls: { rejectUnauthorized: false },
	},
	{
		from: 'Atman Auto test <radicall004@yandex.ru>', // от кого
	},
);

const sendEmail = (message) => {
	smtpTransport.sendMail(message, function (error, info) {
		if (error) {
			console.log(error);
		} else {
			console.log('Письмо успешно отъехало', info);
		}
		smtpTransport.close();
	});
};

export default sendEmail;

// import nodemailer from 'nodemailer';

// export default async function handler(req, res) {
// 	if (req.method === 'POST') {
// 		const { firstName, lastName, phoneNumber, email, comment } = req.body;

// 		// Создание транспортера Nodemailer
// 		const transporter = nodemailer.createTransport({
// 			host: process.env.EMAIL_HOST,
// 			port: parseInt(process.env.EMAIL_PORT, 10),
// 			auth: {
// 				user: process.env.EMAIL_USER,
// 				pass: process.env.EMAIL_PASS,
// 			},
// 		});

// 		const mailOptions = {
// 			from: process.env.EMAIL_USER,
// 			to: process.env.DESTINATION_EMAIL,
// 			subject: 'Новая форма обратной связи',
// 			text: `Имя: ${firstName}\nФамилия: ${lastName}\nТелефон: ${phoneNumber}\nEmail: ${email}\nКомментарий: ${comment}`,
// 		};

// 		try {
// 			await transporter.sendMail(mailOptions);
// 			res.status(200).json({ message: 'Форма успешно отправлена' });
// 		} catch (error) {
// 			console.error('Ошибка отправки:', error);
// 			res.status(500).json({ error: 'Ошибка отправки формы' });
// 		}
// 	} else {
// 		res.setHeader('Allow', ['POST']);
// 		res.status(405).end(`Метод ${req.method} не разрешен`);
// 	}
// }

// const nodemailer = require('nodemailer');

// const transporter = nodemailer.createTransport({
// 	host: 'smtp.yandex.ru',
// 	port: 465,
// 	secure: true,
// 	auth: {
// 		user: 'radicall004@yandex.ru',
// 		pass: 'gdwemxtnbfrgyabd',
// 	},
// });

// // async..await is not allowed in global scope, must use a wrapper
// async function main() {
// 	// send mail with defined transport object
// 	const info = await transporter.sendMail({
// 		from: '"Maddison Foo Koch 👻" <radicall004@yandex.ru>', // sender address
// 		// to: 'bar@example.com, baz@example.com',
// 		subject: 'Hello ✔', // Subject line
// 		text: 'Hello world?', // plain text body
// 		html: '<b>Hello world?</b>', // html body
// 	});

// 	console.log('Message sent: %s', info.messageId);
// 	// Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
// }

// const mailer = (message) => {
// 	transporter.sendMail(message, (err, info) => {
// 		if (err) return console.log(err);
// 		console.log('Email sent: ', info);
// 	});
// };

// main().catch(console.error);

// module.exports = mailer;
