'use client';

import { useEffect, useRef } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { useClickOutside } from '@/hooks/useClickOutside';
import useWindowWidth from '@/hooks/useWindowWidth';

import MOBILE_WIDTH from '@/constants/width.js';

import {
	// links,
	setIsMobile,
	setIsOpenNav,
	// getFilteredMainParamGoods,
} from '@/store/policyNav/polivyNavSlice.js';

import PolicyNav from '@/components/policyPages/PolicyNav/PolicyNav';
import PolicyDropMenu from '@/components/policyPages/PolicyDropMenu/PolicyDropMenu';

import styles from './PolicyNavPanel.module.scss';

const PolicyNavPanel = () => {
	const modalRef = useRef();

	const handleOutsideClick = () => {
		// setIsOpenNav(false);
		dispatch(setIsOpenNav(false));
		// console.log('Click outside, isOpenNav:', isOpenNav);
	};

	const dispatch = useDispatch();

	const { loading, error, isMobile, isOpenNav } = useSelector(
		(state) => state.policyNav,
	);

	useClickOutside(modalRef, handleOutsideClick);

	// const [isMobile, setIsMobile] = useState(false);

	// const [isOpenNav, setIsOpenNav] = useState(true);

	const width = useWindowWidth();

	useEffect(() => {
		if (width <= MOBILE_WIDTH) {
			dispatch(setIsMobile(true));
			// setIsMobile(true);
			dispatch(setIsOpenNav(false));
			// setIsOpenNav(false);
		} else {
			// setIsMobile(false);
			dispatch(setIsMobile(false));
			// setIsOpenNav(true);
			dispatch(setIsOpenNav(true));
		}
	}, [width]);

	return (
		<div className={styles.container}>
			{!isMobile && (
				<div className={styles.navContainer}>
					<PolicyNav />
				</div>
			)}

			{isMobile && <PolicyDropMenu ref={modalRef} />}
		</div>
	);
};

export default PolicyNavPanel;
