import axios from 'axios';

import {
	ALL_GOODS_URL,
	FILTERED_MAIN_PARAM_GOODS_URL,
	FILTERED_ALL_PARAM_GOODS_URL,
} from '../constants/url.js';

//* Функция для получения всех продуктов *//
export const fetchAllGoods = async () => {
	const response = await axios.get(ALL_GOODS_URL);

	console.log('Получение всех продуктов:', response.data);

	console.log('Текущий адрес ALL_GOODS_URL', ALL_GOODS_URL);

	return response.data;
};

//* Функция для получения отфильтрованных продуктов в Товарах (фильтрация по главным параметрам) *//
export const fetchFilteredMainParamGoods = async (filterMainParam) => {
	const response = await axios.get(
		`${FILTERED_MAIN_PARAM_GOODS_URL}/${filterMainParam}`,
	);

	// console.log('Получение отфильтрованных продуктов в Товарах:', response.data);

	return response.data;
};

//* Функция для получения отфильтрованных продуктов в Опросе (фильтрация по всем параметрам) *//
export const fetchFilteredAllParamGoods = async (filterAllParam) => {
	const response = await axios.get(
		`${FILTERED_ALL_PARAM_GOODS_URL}/${filterAllParam}`,
	);

	// console.log('Получение отфильтрованных продуктов в Опросе:', response.data);

	return response.data;
};
