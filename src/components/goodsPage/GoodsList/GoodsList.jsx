import GoodsCard from '../GoodsCard/GoodsCard';

import styles from './GoodsList.module.scss';

const GoodsList = ({ products }) => {
	return (
		<ul className={styles.cards}>
			{products.map((product) => (
				<li className={styles.cardContainer} key={product.id}>
					<GoodsCard
						id={product.id}
						brand={product.brand}
						title={product.name}
						subtitle={product.type}
						imageUrl={product.imageURL}
					/>
				</li>
			))}
		</ul>
	);
};

export default GoodsList;
