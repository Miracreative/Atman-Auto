//*
//*
//* Основные переменные *//
//*
//*

//* HOST *//
export const HOST = process.env.HOST;
// export const HOST = 'http://83.147.246.205:5000';

//* DOMAIN *//
export const DOMAIN = process.env.DOMAIN;

//* Базовый URL *//
const BASE_URL = `${HOST}/api`;

//* URL товаров/продукции *//
export const ALL_GOODS_URL = `${BASE_URL}/goods`;

// Сортировка по всем параметрам
export const FILTERED_ALL_PARAM_GOODS_URL = `${BASE_URL}/goods-parameters`;

// Сортировка по главным параметрам
export const FILTERED_MAIN_PARAM_GOODS_URL = `${BASE_URL}/goods-main`;

//* URL новостей *//
export const URL_NEWS = `${BASE_URL}/news`;

//* URL СОУТ *//
export const SOUT_URL = `${BASE_URL}/sout`;

//* Прибавочный URL для формы обратной связи *//
export const FORM_SUBMIT_URL = '/api/formSubmit';

//* Nodemailer *//
export const EMAIL_HOST = process.env.EMAIL_HOST;
export const EMAIL_PORT = process.env.EMAIL_PORT;
export const EMAIL_USER = process.env.EMAIL_USER;
export const EMAIL_PASS = process.env.EMAIL_PASS;
export const DESTINATION_EMAIL = process.env.DESTINATION_EMAIL;

/////////////////////////////////////////////////////////////////////

//*
//*
//* NEXT_PUBLIC переменные *//
//*
//*

//* NEXT_PUBLIC_HOST *//
// export const HOST = process.env.NEXT_PUBLIC_HOST;

//* NEXT_PUBLIC_DOMAIN *//
// export const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN;

//* Nodemailer *//
// export const EMAIL_HOST = process.env.NEXT_PUBLIC_EMAIL_HOST;
// export const EMAIL_PORT = process.env.NEXT_PUBLIC_EMAIL_PORT;
// export const EMAIL_USER = process.env.NEXT_PUBLIC_EMAIL_USER;
// export const EMAIL_PASS = process.env.NEXT_PUBLIC_EMAIL_PASS;
// export const DESTINATION_EMAIL = process.env.NEXT_PUBLIC_DESTINATION_EMAIL;

/////////////////////////////////////////////////////////////////////

//*
//*
//* Тестовые сообщения *//
//*
//*

//* TESTING HOST *//

console.log('Текущий HOST', HOST);
console.log('Текущий HOST из process.env', process.env);

// console.log('Текущий NEXT_PUBLIC_HOST', NEXT_PUBLIC_HOST);
// console.log(
// 	'Текущий NEXT_PUBLIC_HOST из process.env',
// 	process.env.NEXT_PUBLIC_HOST,
// );

//* TESTING HOST *//

//* TESTING DOMAIN *//

console.log('Текущий DOMAIN из process.env', process.env.DOMAIN);
// console.log(
// 	'Текущий NEXT_PUBLIC_DOMAIN из process.env',
// 	process.env.NEXT_PUBLIC_DOMAIN,
// );

//* TESTING DOMAIN *//

//* TESTING EMAIL_HOST *//

console.log('Текущий EMAIL_HOST из process.env', process.env.EMAIL_HOST);
// console.log(
// 	'Текущий NEXT_PUBLIC_EMAIL_HOST из process.env',
// 	process.env.NEXT_PUBLIC_EMAIL_HOST,
// );

//* TESTING EMAIL_HOST *//

//* TESTING EMAIL_PORT *//

console.log('Текущий EMAIL_PORT из process.env', process.env.EMAIL_PORT);
// console.log(
// 	'Текущий NEXT_PUBLIC_EMAIL_PORT из process.env',
// 	process.env.NEXT_PUBLIC_EMAIL_PORT,
// );

//* TESTING EMAIL_PORT *//

//* TESTING EMAIL_USER *//

console.log('Текущий EMAIL_USER из process.env', process.env.EMAIL_USER);
// console.log(
// 	'Текущий NEXT_PUBLIC_EMAIL_USER из process.env',
// 	process.env.NEXT_PUBLIC_EMAIL_USER,
// );

//* TESTING EMAIL_USER *//

//* TESTING EMAIL_PASS *//

console.log('Текущий EMAIL_PASS из process.env', process.env.EMAIL_PASS);
// console.log(
// 	'Текущий NEXT_PUBLIC_EMAIL_PASS из process.env',
// 	process.env.NEXT_PUBLIC_EMAIL_PASS,
// );

//* TESTING EMAIL_PASS *//

//* TESTING DESTINATION_EMAIL *//

console.log(
	'Текущий DESTINATION_EMAIL из process.env',
	process.env.DESTINATION_EMAIL,
);
// console.log(
// 	'Текущий NEXT_PUBLIC_DESTINATION_EMAIL из process.env',
// 	process.env.NEXT_PUBLIC_DESTINATION_EMAIL,
// );

//* TESTING DESTINATION_EMAIL *//
