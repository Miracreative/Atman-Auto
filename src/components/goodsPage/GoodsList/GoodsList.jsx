// import products from '@/data/products';
import GoodsCard from '../GoodsCard/GoodsCard';

import styles from './GoodsList.module.scss';

const GoodsList = ({ products }) => {
	return (
		<ul className={styles.cards}>
			{products.map((product) => (
				<li className={styles.cardContainer} key={product.id}>
					<GoodsCard
						id={product.id}
						title={product.name}
						subtitle={product.type}
						// description={product.description}
						imageUrl={product.imageURL}
					/>
				</li>
			))}
		</ul>
	);
};

export default GoodsList;
