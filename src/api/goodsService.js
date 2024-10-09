// import axios from 'axios';

import {
	ALL_GOODS_URL,
	FILTERED_MAIN_PARAM_GOODS_URL,
} from '../constants/url.js';

// Функция для получения всех продуктов //
export const fetchAllProducts = async () => {
	const response = await fetch(ALL_GOODS_URL);
	if (!response.ok) {
		throw new Error(`Ошибка сети: ${response.status}`);
	}
	const data = await response.json();
	console.log('data: ', data);

	return data;
};

// Функция для получения отфильтрованных продуктов //
export const fetchFilteredProducts = async (filterMainParam) => {
	const params = new URLSearchParams();
	params.append('main', JSON.stringify(filterMainParam)); // Преобразуем массив в строку JSON

	const response = await fetch(FILTERED_MAIN_PARAM_GOODS_URL, { params });
	console.log('response: ', response);

	if (!response.ok) {
		throw new Error(`Ошибка сети: ${response.status}`);
	}
	const data = await response.json();
	return data;
};

// import {
// 	ALL_GOODS_URL,
// 	FILTERED_MAIN_PARAM_GOODS_URL,
// } from '../constants/url.js';

// // Функция для получения всех продуктов //
// export const fetchAllProducts = async () => {
// 	const response = await axios.get(ALL_GOODS_URL);
// 	return response.data;
// };

// // Функция для получения отфильтрованных продуктов //
// export const fetchFilteredProducts = async (filterMainParam) => {
// 	const response = await axios.get(FILTERED_MAIN_PARAM_GOODS_URL, {
// 		params: { main: filterMainParam },
// 	});
// 	return response.data;
// };
