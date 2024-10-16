'use client';

import { useEffect, useState } from 'react';

import { fetchAllGoods, fetchFilteredMainParamGoods } from '@/api/goodsService';

import {
	LOADING_INFO,
	LOADING_DATA_ERROR,
	NOT_FOUND_INFO,
} from '@/utils/informMessages';

import GoodsList from '../GoodsList/GoodsList.jsx';
import GoodsFilter from '../GoodsFilter/GoodsFilter.jsx';

import styles from './GoodsContent.module.scss';

const GoodsContent = () => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [isMobile, setIsMobile] = useState(false);

	const [error, setError] = useState(null);
	const [filterMainParam, setFilterMainParam] = useState([
		0, 0, 0, 0, 0, 0, 0, 0,
	]);

	const shouldDisplayMessage =
		!isMobile && (loading || error || products.length === 0);

	const handleFetchProducts = async () => {
		try {
			setLoading(true);
			const allProducts = await fetchAllGoods();
			setProducts(allProducts || []);
		} catch (err) {
			setError(err.message || LOADING_DATA_ERROR);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		handleFetchProducts();
	}, []);

	const handleFilterChange = async () => {
		try {
			setLoading(true);
			const filteredProducts = await fetchFilteredMainParamGoods(
				filterMainParam,
			);
			setProducts(filteredProducts || []);
		} catch (err) {
			setError(err.message || LOADING_DATA_ERROR);
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
				loading={loading}
				isMobile={isMobile}
				setIsMobile={setIsMobile}
				error={error}
			/>

			{shouldDisplayMessage && (
				<div className={styles.messageContainer}>
					{loading && <p>{LOADING_INFO}</p>}
					{!loading && error && <p>{LOADING_DATA_ERROR}</p>}
					{!loading && !error && products.length === 0 && (
						<p>{NOT_FOUND_INFO}</p>
					)}
				</div>
			)}

			{isMobile && products.length === 0 && (
				<div className={styles.messageContainer}>
					{loading && <p>{LOADING_INFO}</p>}
					{!loading && error && <p>{LOADING_DATA_ERROR}</p>}
					{!loading && !error && products.length === 0 && (
						<p>{NOT_FOUND_INFO}</p>
					)}
				</div>
			)}

			{!loading && !error && products.length > 0 && (
				<GoodsList products={products} />
			)}
		</section>
	);
};

export default GoodsContent;
