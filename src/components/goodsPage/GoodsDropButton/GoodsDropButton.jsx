import { TriangleIcon } from '@/components/TriangleIcon/TriangleIcon';

import styles from './GoodsDropButton.module.scss';

const GoodsDropButton = ({ isOpenFilter, setIsOpenFilter }) => {
	const handleOpen = () => setIsOpenFilter(!isOpenFilter);

	return (
		<div className={styles.button} onClick={handleOpen}>
			<p>Фильтр</p>
			<TriangleIcon color="var(--white)" isOpen={isOpenFilter} />
		</div>
	);
};

export default GoodsDropButton;
