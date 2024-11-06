//* HOST *//
export const HOST = process.env.NEXT_PUBLIC_HOST;
// export const HOST = 'http://83.147.246.205:5000';
// export const HOST = 'http://83.147.246.205:5000';

console.log('Текущий HOST', HOST);
console.log('Текущий HOST из process.env', process.env.HOST);

console.log('Текущий NEXT_PUBLIC_HOST', NEXT_PUBLIC_HOST);
console.log(
	'Текущий NEXT_PUBLIC_HOST из process.env',
	process.env.NEXT_PUBLIC_HOST,
);

console.log('Текущий DOMAIN из process.env', process.env.DONAIN);
console.log(
	'Текущий NEXT_PUBLIC_DOMAIN из process.env',
	process.env.NEXT_PUBLIC_DOMAIN,
);

console.log('Текущий EMAIL_HOST из process.env', process.env.EMAIL_HOST);
console.log(
	'Текущий NEXT_PUBLIC_EMAIL_HOST из process.env',
	process.env.NEXT_PUBLIC_EMAIL_HOST,
);

console.log('Текущий EMAIL_PORT из process.env', process.env.EMAIL_PORT);
console.log(
	'Текущий NEXT_PUBLIC_EMAIL_PORT из process.env',
	process.env.NEXT_PUBLIC_EMAIL_PORT,
);

console.log('Текущий EMAIL_USER из process.env', process.env.EMAIL_USER);
console.log(
	'Текущий NEXT_PUBLIC_EMAIL_USER из process.env',
	process.env.NEXT_PUBLIC_EMAIL_USER,
);

console.log('Текущий EMAIL_PASS из process.env', process.env.EMAIL_PASS);
console.log(
	'Текущий NEXT_PUBLIC_EMAIL_PASS из process.env',
	process.env.NEXT_PUBLIC_EMAIL_PASS,
);

console.log(
	'Текущий DESTINATION_EMAIL из process.env',
	process.env.DESTINATION_EMAIL,
);
console.log(
	'Текущий NEXT_PUBLIC_DESTINATION_EMAIL из process.env',
	process.env.NEXT_PUBLIC_DESTINATION_EMAIL,
);

//* DOMAIN *//
// export const DOMAIN = process.env.DONAIN;
export const DOMAIN = process.env.NEXT_PUBLIC_DESTINATION_EMAIL;

//* Базовый URL *//
const BASE_URL = `${HOST}/api`;

//* URL товаров/продукции *//
export const ALL_GOODS_URL = `${BASE_URL}/goods`;

// Сортировка по всем параметрам
export const FILTERED_ALL_PARAM_GOODS_URL = `${BASE_URL}/goods-parameters`;

// console.log('FILTERED_ALL_PARAM_GOODS_URL', FILTERED_ALL_PARAM_GOODS_URL);

// Сортировка по главным параметрам
export const FILTERED_MAIN_PARAM_GOODS_URL = `${BASE_URL}/goods-main`;

//* URL новостей *//
export const URL_NEWS = `${BASE_URL}/news`;

//* URL СОУТ *//
export const SOUT_URL = `${BASE_URL}/sout`;

//* Nodemailer *//
// export const EMAIL_HOST = process.env.EMAIL_HOST;
export const EMAIL_HOST = process.env.NEXT_PUBLIC_EMAIL_HOST;

// export const EMAIL_PORT = process.env.EMAIL_PORT;
export const EMAIL_PORT = process.env.NEXT_PUBLIC_EMAIL_PORT;

// export const EMAIL_USER = process.env.EMAIL_USER;
export const EMAIL_USER = process.env.NEXT_PUBLIC_EMAIL_USER;

// export const EMAIL_PASS = process.env.EMAIL_PASS;
export const EMAIL_PASS = process.env.NEXT_PUBLIC_EMAIL_PASS;

// export const DESTINATION_EMAIL = process.env.DESTINATION_EMAIL;
export const DESTINATION_EMAIL = process.env.NEXT_PUBLIC_DESTINATION_EMAIL;
