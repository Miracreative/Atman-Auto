'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import NewsTitle from '@/components/newsPage/SingleNews/NewsTitle/NewsTitle.jsx';
import NewsSliderAndContent from '@/components/newsPage/SingleNews/NewsSliderAndContent/NewsSliderAndContent.jsx';
import { URL_NEWS } from '@/constants/url.js';

import { useRouter } from 'next/router';
// import { useParams } from 'next/router';
import { useParams } from 'next/navigation'
import { useSearchParams } from 'next/navigation';


const NewsPage = () => {


	const [news, setNews] = useState([]);
	const [error, setError] = useState(null);
	// const [loading, setLoading] = useState(true);
	// const router = useRouter();
	// const { id } = router.query;


	const params = useParams();
	const id = params.id;

	// const searchParams = useSearchParams();
	// const id = searchParams.get('id');



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



	if (error) {
		return <p>Ошибка: {error}</p>;
	}

	const singleNews = news.find((item) => {
		return item.id.toString() === id;
	});
	// const titleProp = singleNews.title;


	const title = singleNews?.title;
	const descr = singleNews?.descr;
	const content = singleNews?.content;
	const imagessrc = singleNews?.imagessrc;



	// if (!singleNews) {
	// 	return <p>Товар не найден.</p>;
	// }

	return (
		<>
			{/* <NewsTitle title={singleNews.title} descr={singleNews.descr}></NewsTitle> */}
			<NewsTitle title={title} descr={descr}  ></NewsTitle>

			<NewsSliderAndContent imagessrc={imagessrc} content={content}></NewsSliderAndContent>
		</>
	);
};

export default NewsPage;