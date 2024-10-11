import { REQUEST_ERROR } from '@/utils/informMessages';

import GoodsCard from '../GoodsCard/GoodsCard';

import styles from './GoodsList.module.scss';

const GoodsList = ({ products }) => {
	if (!Array.isArray(products)) {
		return <p className={styles.noData}>{REQUEST_ERROR}</p>;
	}

	return (
		<ul className={styles.cards}>
			{products.map((product) => (
				<li className={styles.cardContainer} key={product.id}>
					<GoodsCard
						id={product.id}
						brand={product.brand}
						title={product.name}
						subtitle={product.type}
						// imageurl={'file://nanalit/' + `${product.imageurl}`}
						imageurl={'file://nanalit/' + product.imageurl}
					/>
				</li>
			))}
		</ul>
	);
};

export default GoodsList;
