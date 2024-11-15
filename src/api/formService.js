import axios from 'axios';

import { FORM_SUBMIT_URL } from '../constants/url.js';

//* Функция для отправки формы *//
export const submitFormData = async (data) => {
	const response = await axios.post(
		FORM_SUBMIT_URL,
		{
			firstName: data.firstName,
			lastName: data.lastName,
			phoneNumber: data.phoneNumber,
			email: data.email,
			comment: data.comment,
		},
		{
			headers: {
				'Content-Type': 'application/json',
			},
		},
	);

	return response.data;
};
