'use client';

import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import {
	getAllGoods,
	getFilteredMainParamGoods,
} from '../../../store/goods/goodsSlice.js';

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

	const shouldDisplayMessage =
		!isMobile && (loading || error || products.length === 0);

	useEffect(() => {
		dispatch(getAllGoods());
	}, [dispatch]);

	const handleFilterChange = () => {
		dispatch(getFilteredMainParamGoods(filterMainParam));
	};

	return (
		<section className={styles.section}>
			<GoodsFilter />

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
