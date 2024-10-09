'use client';

import { useEffect, useState } from 'react';

import { fetchAllProducts, fetchFilteredProducts } from '@/api/goodsService';

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

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				setLoading(true);
				const allProducts = await fetchAllProducts();
				setProducts(allProducts);
			} catch (err) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};
		fetchProducts();
	}, []);

	const handleFilterChange = async () => {
		try {
			setLoading(true);
			const filteredProducts = await fetchFilteredProducts(filterMainParam);
			setProducts(filteredProducts);
		} catch (err) {
			setError(err.message);
		} finally {
			setLoading(false);
		}
	};

	if (error) {
		return <p>Ошибка: {error}</p>;
	}

	return loading ? (
		<div className={styles.loading}>
			<h2>Загрузка информации, подождите...</h2>
		</div>
	) : (
		<section className={styles.section}>
			<GoodsFilter
				filter={filterMainParam}
				setFilter={setFilterMainParam}
				onFilterChange={handleFilterChange}
			/>
			<GoodsList products={products} />
		</section>
	);
};

export default GoodsContent;
