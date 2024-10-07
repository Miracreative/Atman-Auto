'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import NewsTitle from '@/components/newsPage/SingleNews/NewsTitle/NewsTitle.jsx';
import NewsSliderAndContent from '@/components/newsPage/SingleNews/NewsSliderAndContent/NewsSliderAndContent.jsx';
import { URL_NEWS } from '@/constants/url.js';

import { useRouter } from 'next/router';
import { useParams } from 'next/router';

import styles from './NewsPage.module.scss';

const NewsPage = () => {
	const [news, setNews] = useState([]);
	const [error, setError] = useState(null);
	// const [loading, setLoading] = useState(true);
	// const params = useParams();
	// const id = params.id;

	useEffect(() => {
		const fetchNews = async () => {
			try {
				const response = await axios.get(`${process.env.HOST}/api/news`);
				setNews(response.data);
			} catch (err) {
				setError(err.message || 'Неизвестная ошибка');
			}
		};

		fetchNews();
	}, []);
	console.log(news);


	if (error) {
		return <p>Ошибка: {error}</p>;
	}

	// const singleNews = news.find((item) => {
	// 	console.log(typeof item.id);
	// 	return item.id.toString() === id;
	// });

	// if (singleNews === undefined) {
	// 	console.log('Элемент не найден');
	// } else {
	// 	console.log(singleNews);
	// }
	// console.log(typeof id);
	// console.log(id);



	// if (!singleNews) {
	// 	return <p>Товар не найден.</p>;
	// }

	return (
		<>
			<NewsTitle ></NewsTitle>

			<NewsSliderAndContent></NewsSliderAndContent>
		</>
	);
};

export default NewsPage;