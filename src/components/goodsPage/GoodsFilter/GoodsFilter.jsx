'use client';

import { useEffect, useState } from 'react';

import useWindowWidth from '@/hooks/useWindowWidth';

import GoodsDropButton from '../GoodsDropButton/GoodsDropButton.jsx';
import GoodsFilterPanel from '../GoodsFilterPanel/GoodsFilterPanel.jsx';

import styles from './GoodsFilter.module.scss';

const GoodsFilter = () => {
	const [isMobile, setIsMobile] = useState(false);

	const [isOpenFilter, setIsOpenFilter] = useState(true);

	const width = useWindowWidth();

	useEffect(() => {
		if (width <= 480) {
			setIsMobile(true);
			setIsOpenFilter(false);
		} else {
			setIsMobile(false);
			setIsOpenFilter(true);
		}
	}, [width]);

	return (
		<>
			{!isMobile && (
				<GoodsFilterPanel
					isOpenFilter={isOpenFilter}
					setIsOpenFilter={setIsOpenFilter}
				/>
			)}

			{isMobile && (
				<div className={styles.filterContainer}>
					<GoodsDropButton
						isOpenFilter={isOpenFilter}
						setIsOpenFilter={setIsOpenFilter}
					/>
					<GoodsFilterPanel
						isOpenFilter={isOpenFilter}
						setIsOpenFilter={setIsOpenFilter}
					/>
				</div>
			)}
		</>
	);
};

export default GoodsFilter;
