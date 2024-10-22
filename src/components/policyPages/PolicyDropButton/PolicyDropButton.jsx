import { usePathname } from 'next/navigation';

// import { menuItems } from '@/data/menuItems';

import { useSelector, useDispatch } from 'react-redux';

import {
	// links,
	setIsMobile,
	setIsOpenNav,
	// getFilteredMainParamGoods,
} from '@/store/policyNav/polivyNavSlice.js';

import { TriangleIcon } from '@/components/TriangleIcon/TriangleIcon';

import styles from './PolicyDropButton.module.scss';

const PolicyDropButton = () => {
	const dispatch = useDispatch();

	const { links, loading, error, isMobile, isOpenNav } = useSelector(
		(state) => state.policyNav,
	);

	// const handleOpen = () => setIsOpenNav(!isOpenNav);
	const handleOpen = () => dispatch(setIsOpenNav(!isOpenNav));

	const pathname = usePathname();

	const getMenuText = () => {
		const items = links.about.items;
		const foundItem = items.find((item) => item.href === pathname);

		return foundItem ? foundItem.text : 'Раздел не определен';
	};

	// console.log('pathname:', pathname);

	return (
		<div className={styles.button} onClick={handleOpen}>
			<p>{getMenuText()}</p>
			<TriangleIcon color="var(--white)" isOpen={isOpenNav} />
		</div>
	);
};

export default PolicyDropButton;
