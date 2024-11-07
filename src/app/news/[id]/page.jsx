'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import NewsTitle from '@/components/newsPage/SingleNews/NewsTitle/NewsTitle.jsx';
import NewsSliderAndContent from '@/components/newsPage/SingleNews/NewsSliderAndContent/NewsSliderAndContent.jsx';
// import { URL_NEWS } from '@/constants/url.js';

import { useParams } from 'next/navigation';

import { HOST } from '@/constants/url';

const NewsPage = () => {
	const [news, setNews] = useState([]);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	const params = useParams();
	const id = params.id;

	useEffect(() => {
		const fetchNews = async () => {
			try {
				const response = await axios.get(`${HOST}/api/news/${id}`);
				setNews(response.data);
			} catch (err) {
				setError(err.message || 'Неизвестная ошибка');
			} finally {
				setLoading(false);
			}
		};

		fetchNews();
	}, [id]);

	const title = news.title;
	const descr = news.descr;
	const content = news.content;
	const imagessrc = news.imagessrc;

	return (
		<>
			<NewsTitle title={title} descr={descr}></NewsTitle>

			<NewsSliderAndContent
				imagessrc={imagessrc}
				content={content}
			></NewsSliderAndContent>
		</>
	);
};

export default NewsPage;
