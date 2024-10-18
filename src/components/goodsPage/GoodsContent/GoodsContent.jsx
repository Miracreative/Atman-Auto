'use client';

import { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import {
	getAllGoods,
	getFilteredMainParamGoods,
	setFilterMainParam,
	setIsMobile,
} from '../../../store/goods/goodsSlice';

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
	const dispatch = useDispatch();

	const { products, loading, error, filterMainParam, isMobile } = useSelector(
		(state) => state.goods,
	);

	// const [products, setProducts] = useState([]);
	// const [loading, setLoading] = useState(true);
	// const [isMobile, setIsMobile] = useState(false);
	// const [error, setError] = useState(null);
	// const [filterMainParam, setFilterMainParam] = useState([
	// 	0, 0, 0, 0, 0, 0, 0, 0,
	// ]);

	const shouldDisplayMessage =
		!isMobile && (loading || error || products.length === 0);

	// const handleFetchProducts = async () => {
	// 	setLoading(true);
	// 	setError(null);
	// 	try {
	// 		const allProducts = await fetchAllGoods();
	// 		setProducts(allProducts || []);
	// 	} catch (err) {
	// 		setError(err.message || LOADING_DATA_ERROR);
	// 	} finally {
	// 		setLoading(false);
	// 	}
	// };

	useEffect(() => {
		dispatch(getAllGoods());
		// console.log('filterMainParam', filterMainParam);
	}, [dispatch]);

	const handleFilterChange = () => {
		dispatch(getFilteredMainParamGoods(filterMainParam));
	};

	// const handleFilterChangeLocal = (newFilter) => {
	// 	dispatch(setFilterMainParam(newFilter));
	// 	handleFilterChange();
	// };

	// const handleFilterChange = async () => {
	// 	setLoading(true);
	// 	setError(null);
	// 	try {
	// 		const filteredProducts = await fetchFilteredMainParamGoods(
	// 			filterMainParam,
	// 		);
	// 		setProducts(filteredProducts || []);
	// 	} catch (err) {
	// 		setError(err.message || LOADING_DATA_ERROR);
	// 	} finally {
	// 		setLoading(false);
	// 	}
	// };

	return (
		<section className={styles.section}>
			<GoodsFilter
			// filter={filterMainParam}
			// setFilter={handleFilterChangeLocal}
			// onFilterChange={handleFilterChange}
			// onFetchProducts={handleFetchProducts}
			// isMobile={isMobile}
			// setIsMobile={setIsMobile}
			// loading={loading}
			// error={error}
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
