'use client';

import { useEffect, useState } from 'react';

import useWindowWidth from '@/hooks/useWindowWidth';

import MOBILE_WIDTH from '@/constants/width.js';

import { LOADING_INFO } from '@/utils/informMessages.js';

import GoodsDropButton from '../GoodsDropButton/GoodsDropButton.jsx';
import GoodsFilterPanel from '../GoodsFilterPanel/GoodsFilterPanel.jsx';

import styles from './GoodsFilter.module.scss';

const GoodsFilter = ({
	filter,
	setFilter,
	onFilterChange,
	onFetchProducts,
	loading,
	setLoading,
}) => {
	const [isMobile, setIsMobile] = useState(false);
	// const [isMobile, setIsMobile] = useState(true);

	const [isOpenFilter, setIsOpenFilter] = useState(true);

	const width = useWindowWidth();

	useEffect(() => {
		if (width <= MOBILE_WIDTH) {
			setIsMobile(true);
			setIsOpenFilter(false);
		} else {
			setIsMobile(false);
			setIsOpenFilter(true);
		}
	}, [width]);

	return (
		<>
			{!isMobile && !loading && (
				<GoodsFilterPanel
					isOpenFilter={isOpenFilter}
					setIsOpenFilter={setIsOpenFilter}
					filter={filter}
					setFilter={setFilter}
					onFilterChange={onFilterChange}
					onFetchProducts={onFetchProducts}
				/>
			)}

			{/* {isMobile && loading && <p className={styles.info}>{LOADING_INFO}</p>} */}

			{isMobile && (
				<div className={styles.filterContainer}>
					<GoodsDropButton
						isOpenFilter={isOpenFilter}
						setIsOpenFilter={setIsOpenFilter}
					/>
					<GoodsFilterPanel
						isOpenFilter={isOpenFilter}
						setIsOpenFilter={setIsOpenFilter}
						filter={filter}
						setFilter={setFilter}
						onFilterChange={onFilterChange}
						onFetchProducts={onFetchProducts}
					/>
				</div>
			)}
		</>
	);
};

export default GoodsFilter;
