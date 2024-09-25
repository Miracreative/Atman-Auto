'use client';

import { useEffect, useState } from 'react';
import GoodsFilter from '../GoodsFilter/GoodsFilter.jsx';
import GoodsList from '../GoodsList/GoodsList.jsx';

import axios from 'axios';

import URL from '@/constants/url.js';

import styles from './GoodsContent.module.scss';

const GoodsContent = () => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	// console.log(products.id);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await axios.get(URL);
				setProducts(response.data);
			} catch (err) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};

		fetchProducts();
	}, []);

	// if (loading) {
	// 	return (
	// 		<div className={styles.loading}>
	// 			<h2>Загрузка информации, подождите...</h2>;
	// 		</div>
	// 	);
	// }

	if (error) {
		return <p>Ошибка: {error}</p>;
	}

	return loading ? (
		<div className={styles.loading}>
			<h2>Загрузка информации, подождите...</h2>;
		</div>
	) : (
		<section className={styles.section}>
			<GoodsFilter />
			<GoodsList products={products} />
		</section>
	);
};

export default GoodsContent;
