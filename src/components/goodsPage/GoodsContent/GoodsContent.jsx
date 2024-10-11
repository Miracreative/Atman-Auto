'use client';

import { useEffect, useState } from 'react';

import { fetchAllGoods, fetchFilteredMainParamGoods } from '@/api/goodsService';

import { LOADING_INFO_TEXT, LOADING_GOODS_ERROR } from '@/utils/informMessages';

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

	const handleFetchProducts = async () => {
		try {
			setLoading(true);
			const allProducts = await fetchAllGoods();
			setProducts(allProducts || []);
		} catch (err) {
			setError(err.message);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		handleFetchProducts();
	}, []);

	const handleFilterChange = async (e) => {
		try {
			setLoading(true);
			const filteredProducts = await fetchFilteredMainParamGoods(
				filterMainParam,
			);
			setProducts(filteredProducts || []);
		} catch (err) {
			setError(err.message || { LOADING_GOODS_ERROR });
		} finally {
			setLoading(false);
		}
	};

	if (error) {
		return <p>Ошибка: {error}</p>;
	}

	return loading ? (
		<div className={styles.loading}>
			<h2>{LOADING_INFO_TEXT}</h2>
		</div>
	) : (
		<section className={styles.section}>
			<GoodsFilter
				filter={filterMainParam}
				setFilter={setFilterMainParam}
				onFilterChange={handleFilterChange}
				onFetchProducts={handleFetchProducts}
			/>

			{products.length === 0 ? (
				<p>{LOADING_GOODS_ERROR}</p>
			) : (
				<GoodsList products={products} />
			)}
		</section>
	);
};

export default GoodsContent;
