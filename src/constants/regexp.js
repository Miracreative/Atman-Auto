export const EMAIL_REGEXP = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const PHONE_REGEXP =
	/^(?:\+7|7|8)?[\s-]?(\(?\d{3}\)?)[\s-]?(\d{3})[-\s]?(\d{2})[-\s]?(\d{2})$|^(?:\+7|7|8)?[\s-]?(\d{3})(\d{7})$|^8\s*(\d{3})\s*(\d{3})[-\s]?(\d{2})[-\s]?(\d{2})$/;

// // Массив тестовых телефонных номеров
// const testNumbers = [
// 	'+7 912 345-67-89',
// 	'8 (495) 123-45-67',
// 	'7 123 456 78 90',
// 	'+7-123-456-78-90',
// 	'8 800 555 35 35',
// ];

// // Функция валидации для проверки телефонных номеров
// testNumbers.forEach((number) => {
// 	console.log(`${number} is valid: ${PHONE_REGEXP.test(number)}`);
// });

// // Массив тестовых адресов почты
// const testEmail = [
// 	'example@mail.ru',
// 	'user@example.com',
// 	'name.surname@domain.kz',
// 	'user_name@example.com',
// 	'user-name@example.ru',
// 	'user+tag@example.by',
// 	'my.email@domain.com',
// 	'first.last@domain.org',
// 	'contact.me@domain.net',
// 	'user123@mail.ru',
// 	'юзер@пример.рф', // false
// 	'имяподписчика@к примеру.рф', // false
// 	'user123456@domain.com',
// 	'123user@domain.net',
// 	'"user name"@example.com', // false
// 	'user_name_surname@example.com',
// 	'first_name_last_name@domain.org',
// 	'user@example.pro',
// 	'contact@domain.jobs',
// 	'example@mailinator.com',
// 	'temp@mail.com',
// 	'user@google.com',
// 	'worker@yahoo.com',
// ];

// // Функция валидации для проверки почты
// testEmail.forEach((email) => {
// 	console.log(`${email} is valid: ${EMAIL_REGEXP.test(email)}`);
// });
