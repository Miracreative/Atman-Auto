//* Проверка работоспособности (вбить в браузере http://localhost:3000/api/formSubmit) *//

// export default function handler(req, res) {
// 	res.send('Ваше письмо успешно отправлено. Спасибо и пока.');
// 	console.log(req.body);
// }

import sendEmail from './../../utils/mail.js';

export default async function handler(req, res) {
	const message = {
		to: 'radicall004@yandex.ru', // куда
		subject: `Письмо с сайта Atman Auto от ${req.body.firstName}`,
		text: `
      Имя: ${req.body.firstName},
      Фамилия: ${req.body.lastName},
      Телефон: ${req.body.phoneNumber},
      E-mail: ${req.body.email},
      Сообщение:
      
      ${req.body.comment}



      Письмо сформировано системой автоматически, на него не нужно отвечать.
        `,
	};
	sendEmail(message);
	console.log(message);
	res.send(`Спасибо за заявку, ${req.body.firstName}! Мы вам перезвоним...`);
}
