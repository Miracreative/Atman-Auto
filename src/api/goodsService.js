import axios from 'axios';

import {
	ALL_GOODS_URL,
	FILTERED_MAIN_PARAM_GOODS_URL,
} from '../constants/url.js';

// Функция для получения всех продуктов //
export const fetchAllProducts = async () => {
	const response = await axios.get(ALL_GOODS_URL);
	return response.data;
};

// Функция для получения отфильтрованных продуктов //
export const fetchFilteredProducts = async (filterMainParam) => {
	const response = await axios.get(FILTERED_MAIN_PARAM_GOODS_URL, {
		params: { main: filterMainParam },
	});
	return response.data;
};
