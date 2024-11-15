'use client';

import { useEffect, useState } from 'react';

import axios from 'axios';


import NewsContent from '../NewsContent/NewsContent.jsx';


import styles from './NewsWrapContent.module.scss';

const NewsWrapContent = () => {
	const [news, setNews] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const fetchNews = async () => {
		setLoading(true);
		try {
			const response = await axios.get(`${process.env.HOST}/api/news`);
			setNews(response.data);
		} catch (err) {
			setError(err.message);
		} finally {
			setLoading(false);
		}

	};

	useEffect(() => {
		fetchNews();
	}, []);




	return loading ? (
		<div className={styles.loading}>
		</div>
	) : (
		<section className={styles.section}>
			<NewsContent news={news}></NewsContent>
		</section>
	);
};

export default NewsWrapContent;
