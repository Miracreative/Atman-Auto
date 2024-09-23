'use client';

import { useEffect, useState } from 'react';

import axios from 'axios';

import URL from '@/constants/url.js';

import Showcase from '@/components/goodsPage/Showcase/Showcase.jsx';
import Properties from '@/components/goodsPage/Properties/Properties.jsx';

import styles from './page.module.scss';

const ProductPage = () => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

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

	if (loading) {
		return (
			<div className={styles.loading}>
				<h2>Загрузка информации, подождите...</h2>;
			</div>
		);
	}

	if (error) {
		return <p>Ошибка: {error}</p>;
	}

	return (
		<>
			<Showcase products={products} />
			<Properties products={products} />
		</>
	);
};

export default ProductPage;
