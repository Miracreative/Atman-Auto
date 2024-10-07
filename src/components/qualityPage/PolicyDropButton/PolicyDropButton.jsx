import { TriangleIcon } from '@/components/TriangleIcon/TriangleIcon';

import styles from './PolicyDropButton.module.scss';

const PolicyDropButton = ({ isOpenNav, setIsOpenNav }) => {
	const handleOpen = () => setIsOpenNav(!isOpenNav);

	console.log('Button click, isOpenNav before:', isOpenNav);

	return (
		<div className={styles.button} onClick={handleOpen}>
			<p>Обработка данных</p>
			<TriangleIcon color="var(--white)" isOpen={isOpenNav} />
		</div>
	);
};

export default PolicyDropButton;
