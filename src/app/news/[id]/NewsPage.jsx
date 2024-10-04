'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { URL_NEWS } from '@/constants/URL_NEWS.js';


import styles from './NewsPage.module.scss';

const NewsPage = ({ params: { id } }) => {
	const [news, setNews] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchNews = async () => {
			try {
				const response = await axios.get(URL_NEWS);
				setNews(response.data);
			} catch (err) {
				setError(err.message || 'Неизвестная ошибка');
			}
		};

		fetchNews();
	}, []);

	if (error) {
		return <p>Ошибка: {error}</p>;
	}

	const product = news.find((item) => item.id.toString() === id);

	if (!product) {
		return <p>Товар не найден.</p>;
	}

	return (
		<>
			<div >hi BOB</div>
		</>
	);
};

export default NewsPage;