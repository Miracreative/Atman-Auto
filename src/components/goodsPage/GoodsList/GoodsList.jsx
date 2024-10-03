import GoodsCard from '../GoodsCard/GoodsCard';

import styles from './GoodsList.module.scss';

const GoodsList = ({ products }) => {
	// console.log(products.imageurl);
	// console.log(products.type);
	// console.log('Тестируемое поле:', products[0].imageurl);

	return (
		<ul className={styles.cards}>
			{products.map((product) => (
				<li className={styles.cardContainer} key={product.id}>
					<GoodsCard
						id={product.id}
						brand={product.brand}
						title={product.name}
						subtitle={product.type}
						// imageURL={product.imageURL[0]}
						imageurl={'file://nanalit/' + `${product.imageurl}`}
					/>
				</li>
			))}
		</ul>
	);
};

export default GoodsList;
