//* HOST *//
// export const HOST = process.env.HOST;
export const HOST = 'http://83.147.246.205:5000';

console.log('Текущий HOST', HOST);

//* DOMAIN *//
export const DOMAIN = process.env.DONAIN;

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
export const EMAIL_HOST = process.env.EMAIL_HOST;
export const EMAIL_PORT = process.env.EMAIL_PORT;
export const EMAIL_USER = process.env.EMAIL_USER;
export const EMAIL_PASS = process.env.EMAIL_PASS;
export const DESTINATION_EMAIL = process.env.DESTINATION_EMAIL;
