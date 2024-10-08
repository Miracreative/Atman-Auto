import { usePathname } from 'next/navigation';

import { menuItems } from '@/data/menuItems';

import { TriangleIcon } from '@/components/TriangleIcon/TriangleIcon';

import styles from './PolicyDropButton.module.scss';

const PolicyDropButton = ({ isOpenNav, setIsOpenNav }) => {
	const handleOpen = () => setIsOpenNav(!isOpenNav);

	const pathname = usePathname();

	const getMenuText = () => {
		const items = menuItems.about.items;
		const foundItem = items.find((item) => item.href === pathname);

		return foundItem ? foundItem.text : 'Тема не определена';
	};

	console.log('pathname:', pathname);

	return (
		<div className={styles.button} onClick={handleOpen}>
			<p>{getMenuText()}</p>
			<TriangleIcon color="var(--white)" isOpen={isOpenNav} />
		</div>
	);
};

export default PolicyDropButton;
