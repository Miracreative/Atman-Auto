'use client';

import { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import {
	getAllGoods,
	getFilteredMainParamGoods,
	setFilterMainParam,
	setIsMobile,
} from '../../../store/goods/goodsSlice';

import useWindowWidth from '@/hooks/useWindowWidth';

import MOBILE_WIDTH from '@/constants/width.js';

import GoodsDropButton from '../GoodsDropButton/GoodsDropButton.jsx';
import GoodsFilterPanel from '../GoodsFilterPanel/GoodsFilterPanel.jsx';

import styles from './GoodsFilter.module.scss';

const GoodsFilter = (
	{
		// setFilter,
		// filter,
		// onFilterChange,
		// onFetchProducts,
		// loading,
		// isMobile,
		// setIsMobile,
	},
) => {
	const width = useWindowWidth();
	const [isOpenFilter, setIsOpenFilter] = useState(false);

	const dispatch = useDispatch();

	const { products, loading, error, filterMainParam, isMobile } = useSelector(
		(state) => state.goods,
	);

	// useEffect(() => {
	// 	if (width <= MOBILE_WIDTH) {
	// 		setIsMobile(true);
	// 	} else {
	// 		setIsMobile(false);
	// 	}
	// }, [width]);

	// console.log('isMobile', isMobile);

	useEffect(() => {
		// if (isMobile) {
		if (width <= MOBILE_WIDTH) {
			dispatch(setIsMobile(true));
			setIsOpenFilter(false);
		} else {
			dispatch(setIsMobile(false));
			setIsOpenFilter(true);
		}
		// }, [isMobile]);
	}, [isMobile]);

	return (
		<>
			<div className={styles.filterContainer}>
				{isMobile && (
					<GoodsDropButton
						isOpenFilter={isOpenFilter}
						setIsOpenFilter={setIsOpenFilter}
					/>
				)}

				<GoodsFilterPanel
					isOpenFilter={isOpenFilter}
					setIsOpenFilter={setIsOpenFilter}
					// filter={filter}
					// setFilter={setFilter}
					// onFilterChange={onFilterChange}
					// onFetchProducts={onFetchProducts}
					// isMobile={isMobile}
					// loading={loading}
				/>
			</div>
		</>
	);
};

export default GoodsFilter;
