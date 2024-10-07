'use client';

import { useEffect, useState } from 'react';

import MOBILE_WIDTH from '@/constants/width.js';

import useWindowWidth from '@/hooks/useWindowWidth';

import QualityNav from '@/components/qualityPage/QualityNav/QualityNav';
import PolicyDropButton from '@/components/qualityPage/PolicyDropButton/PolicyDropButton';

import styles from './PolicyNavPanel.module.scss';

const PolicyNavPanel = () => {
	const [isMobile, setIsMobile] = useState(false);

	const [isOpenNav, setIsOpenNav] = useState(true);

	const width = useWindowWidth();

	useEffect(() => {
		if (width <= MOBILE_WIDTH) {
			setIsMobile(true);
			setIsOpenNav(false);
		} else {
			setIsMobile(false);
			setIsOpenNav(true);
		}
	}, [width]);

	// console.log('width', width);
	// console.log('isMobile', isMobile);

	return (
		<div className={styles.container}>
			{!isMobile && (
				<div className={styles.navContainer}>
					<QualityNav isOpenNav={isOpenNav} setIsOpenNav={setIsOpenNav} />
				</div>
			)}

			{isMobile && (
				<>
					<div className={styles.dropButtonContainer}>
						<PolicyDropButton
							isOpenNav={isOpenNav}
							setIsOpenNav={setIsOpenNav}
						/>
					</div>
					<div className={styles.navContainer}>
						<QualityNav isOpenNav={isOpenNav} setIsOpenNav={setIsOpenNav} />
					</div>
				</>
			)}
		</div>
	);
};

export default PolicyNavPanel;
