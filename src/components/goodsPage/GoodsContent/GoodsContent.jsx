import GoodsFilter from '../GoodsFilter/GoodsFilter.jsx';
import GoodsList from '../GoodsList/GoodsList.jsx';

import styles from './GoodsContent.module.scss';

const GoodsContent = () => {
	return (
		<section className={styles.section}>
			<GoodsFilter />
			<GoodsList />
		</section>
	);
};

export default GoodsContent;
