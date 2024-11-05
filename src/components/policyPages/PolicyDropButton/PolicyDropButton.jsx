import { usePathname } from 'next/navigation';

import { useSelector, useDispatch } from 'react-redux';

import { setIsMobile, setIsOpenNav } from '@/store/policyNav/polivyNavSlice.js';

import { TriangleIcon } from '@/components/TriangleIcon/TriangleIcon';

import styles from './PolicyDropButton.module.scss';

const PolicyDropButton = () => {
	const dispatch = useDispatch();

	const { links, loading, error, isMobile, isOpenNav } = useSelector(
		(state) => state.policyNav,
	);

	const handleOpen = () => dispatch(setIsOpenNav(!isOpenNav));

	const pathname = usePathname();

	const getMenuText = () => {
		const items = links.about.items;
		const foundItem = items.find((item) => item.href === pathname);

		return foundItem ? foundItem.text : 'Раздел не определен';
	};

	return (
		<div className={styles.button} onClick={handleOpen}>
			<p>{getMenuText()}</p>
			<TriangleIcon color="var(--white)" isOpen={isOpenNav} />
		</div>
	);
};

export default PolicyDropButton;
