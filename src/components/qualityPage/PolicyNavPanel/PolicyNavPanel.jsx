'use client';

import { useEffect, useState, useRef } from 'react';
// import {  } from 'react';

import { useClickOutside } from '@/hooks/useClickOutside';
import useWindowWidth from '@/hooks/useWindowWidth';
import MOBILE_WIDTH from '@/constants/width.js';

import QualityNav from '@/components/qualityPage/QualityNav/QualityNav';
import PolicyDropMenu from '@/components/qualityPage/PolicyDropMenu/PolicyDropMenu';

import styles from './PolicyNavPanel.module.scss';

const PolicyNavPanel = () => {
	const modalRef = useRef();

	const handleOutsideClick = () => {
		setIsOpenNav(false);
		console.log('Click outside, isOpenNav:', isOpenNav);
	};

	useClickOutside(modalRef, handleOutsideClick);

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

	return (
		<div className={styles.container}>
			{!isMobile && (
				<div className={styles.navContainer}>
					<QualityNav isOpenNav={isOpenNav} setIsOpenNav={setIsOpenNav} />
				</div>
			)}

			{isMobile && (
				<PolicyDropMenu
					isOpenNav={isOpenNav}
					setIsOpenNav={setIsOpenNav}
					ref={modalRef}
				/>
			)}
		</div>
	);
};

export default PolicyNavPanel;
