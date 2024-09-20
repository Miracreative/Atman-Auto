'use client';

import { useEffect, useState } from 'react';

import useWindowWidth from '@/hooks/useWindowWidth';

import GoodsDropButton from '../GoodsDropButton/GoodsDropButton.jsx';
import GoodsFilterPanel from '../GoodsFilterPanel/GoodsFilterPanel';

import styles from './GoodsFilter.module.scss';

const GoodsFilter = () => {
	const [isMobile, setIsMobile] = useState(false);

	

	const width = useWindowWidth();

	useEffect(() => {
		// console.log('useEffect сработал');

		if (width <= 480) {
			setIsMobile(true);
			// console.log(
			// 	`Мы в мобильном режиме (текущая ширина ${width}px): ${isMobile}`,
			// );
		} else {
			setIsMobile(false);
			// console.log(
			// 	`Мы в десктопном режиме (текущая ширина ${width}px): ${isMobile}`,
			// );
		}
	}, [width]);

	return (
		<>
			{!isMobile && <GoodsFilterPanel />}
			{isMobile && (
				<>
					<GoodsDropButton />
					<GoodsFilterPanel />
				</>
			)}
		</>
	);
};

export default GoodsFilter;
