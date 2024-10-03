'use client';

import { useEffect, useState } from 'react';

import axios from 'axios';

import URL from '@/constants/url.js';

import GoodsList from '../GoodsList/GoodsList.jsx';
import GoodsFilter from '../GoodsFilter/GoodsFilter.jsx';

import styles from './GoodsContent.module.scss';

const GoodsContent = () => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const [filterMainParam, setFilterMainParam] = useState([
		0, 0, 0, 0, 0, 0, 0, 0,
	]);

	console.log(filterMainParam);

	const fetchProducts = async (filter) => {
		setLoading(true);
		try {
			const params = filter ? { filter: filter.join(',') } : {}; // Если фильтр пуст, отправляем пустые параметры

			const response = await axios.get(URL, { params });

			setProducts(response.data);
			console.log('Полученные продукты:', response.data);
		} catch (err) {
			setError(err.message);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchProducts();
	}, []);

	if (error) {
		return <p>Ошибка: {error}</p>;
	}

	// console.log('Тестируемое поле:', products[0].imageurl);

	// console.log('Товары с бекенда: ', products);

	// console.log(`URL: ${URL}, Params: ${params}`);

	return loading ? (
		<div className={styles.loading}>
			<h2>Загрузка информации, подождите...</h2>;
		</div>
	) : (
		<section className={styles.section}>
			<GoodsFilter
				filter={filterMainParam}
				setFilter={setFilterMainParam}
				fetchProducts={fetchProducts}
			/>
			<GoodsList products={products} />
		</section>
	);
};

export default GoodsContent;
