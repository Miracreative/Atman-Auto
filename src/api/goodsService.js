import axios from 'axios';

import {
	ALL_GOODS_URL,
	FILTERED_MAIN_PARAM_GOODS_URL,
} from '../constants/url.js';

// Функция для получения всех продуктов //
export const fetchAllGoods = async () => {
	const response = await axios.get(ALL_GOODS_URL);
	console.log('Получение продуктов:', response.data);

	return response.data;
};

// Функция для получения отфильтрованных продуктов //
export const fetchFilteredGoods = async (filterMainParam) => {
	const response = await axios.get(
		`${FILTERED_MAIN_PARAM_GOODS_URL}/${filterMainParam}`,
	);
	console.log(response.data);

	return response.data;
};

// data: { main: { filterMainParam } },
