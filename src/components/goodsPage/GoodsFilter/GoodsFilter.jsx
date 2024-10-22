'use client';

import { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { setIsMobile } from '@/store/goods/goodsSlice';

import useWindowWidth from '@/hooks/useWindowWidth';

import MOBILE_WIDTH from '@/constants/width.js';

import GoodsDropButton from '../GoodsDropButton/GoodsDropButton.jsx';
import GoodsFilterPanel from '../GoodsFilterPanel/GoodsFilterPanel.jsx';

import styles from './GoodsFilter.module.scss';

const GoodsFilter = ({}) => {
	const width = useWindowWidth();
	const [isOpenFilter, setIsOpenFilter] = useState(false);

	const dispatch = useDispatch();

	const { isMobile } = useSelector((state) => state.goods);

	useEffect(() => {
		if (width <= MOBILE_WIDTH) {
			dispatch(setIsMobile(true));
			setIsOpenFilter(false);
		} else {
			dispatch(setIsMobile(false));
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
				/>
			</div>
		</>
	);
};

export default GoodsFilter;
