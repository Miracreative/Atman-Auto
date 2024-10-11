'use client';

import { useEffect, useState } from 'react';

import { fetchAllGoods, fetchFilteredMainParamGoods } from '@/api/goodsService';

import { LOADING_INFO, LOADING_DATA_ERROR } from '@/utils/informMessages';

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
			setError(err.message || { LOADING_DATA_ERROR });
		} finally {
			setLoading(false);
		}
	};

	return (
		<section className={styles.section}>
			<GoodsFilter
				filter={filterMainParam}
				setFilter={setFilterMainParam}
				onFilterChange={handleFilterChange}
				onFetchProducts={handleFetchProducts}
			/>

			<div className={styles.messageContainer}>
				{loading && <p>{LOADING_INFO}</p>}
				{error && !loading && <p>{LOADING_DATA_ERROR}</p>}
				{!loading &&
					!error &&
					Array.isArray(products) &&
					products.length === 0 && <p>{NOT_FOUND_INFO}</p>}
			</div>

			{!loading && !error && products.length > 0 && (
				<GoodsList products={products} />
			)}
		</section>
	);
};

export default GoodsContent;
