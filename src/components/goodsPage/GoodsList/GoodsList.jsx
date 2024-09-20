import styles from './GoodsList.module.scss';

import products from '../../../data/products';
import GoodsCard from '../GoodsCard/GoodsCard';

const GoodsList = () => {
	return (
		<ul className={styles.cards}>
			{products.map((product) => (
				<li key={product.id}>
					<GoodsCard
						id={product.id}
						title={product.title}
						subtitle={product.subtitle}
						description={product.description}
						imageUrl={product.image}
					/>
				</li>
			))}
		</ul>
	);
};

export default GoodsList;
