import axios from 'axios';

import { SOUT_URL } from '../constants/url.js';

//* Функция для получения всех СОУТ *//
export const fetchAllSout = async () => {
	const response = await axios.get(SOUT_URL);

	// console.log('Получение всех СОУТ:', response.data);

	return response.data;
};
