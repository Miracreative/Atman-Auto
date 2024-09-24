'use client';

import { useEffect, useState } from 'react';

import useWindowWidth from '@/hooks/useWindowWidth';

import GoodsDropButton from '../GoodsDropButton/GoodsDropButton.jsx';
import GoodsFilterPanel from '../GoodsFilterPanel/GoodsFilterPanel.jsx';

// import styles from './GoodsFilter.module.scss';

const GoodsFilter = () => {
	const [isMobile, setIsMobile] = useState(false);

	const width = useWindowWidth();

	useEffect(() => {
		if (width <= 480) {
			setIsMobile(true);
		} else {
			setIsMobile(false);
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
