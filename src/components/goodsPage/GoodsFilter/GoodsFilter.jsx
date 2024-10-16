'use client';

import { useEffect, useState } from 'react';

import useWindowWidth from '@/hooks/useWindowWidth';

import MOBILE_WIDTH from '@/constants/width.js';

import GoodsDropButton from '../GoodsDropButton/GoodsDropButton.jsx';
import GoodsFilterPanel from '../GoodsFilterPanel/GoodsFilterPanel.jsx';

import styles from './GoodsFilter.module.scss';

const GoodsFilter = ({
	filter,
	setFilter,
	onFilterChange,
	onFetchProducts,
	loading,
	isMobile,
	setIsMobile,
}) => {
	const width = useWindowWidth();
	const [isOpenFilter, setIsOpenFilter] = useState(false);

	useEffect(() => {
		if (width <= MOBILE_WIDTH) {
			setIsMobile(true);
		} else {
			setIsMobile(false);
		}
	}, [width]);

	useEffect(() => {
		if (isMobile) {
			setIsOpenFilter(false);
		} else {
			setIsOpenFilter(true);
		}
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
					filter={filter}
					setFilter={setFilter}
					onFilterChange={onFilterChange}
					onFetchProducts={onFetchProducts}
					isMobile={isMobile}
					loading={loading}
				/>
			</div>
		</>
	);
};

export default GoodsFilter;
