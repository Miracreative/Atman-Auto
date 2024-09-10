import styles from './ProductCard.module.scss';

const ProductCard = () => {
	return (
		<div className={styles.card}>
			<div className={styles.content}>
				<h1 className={styles.title}>AFOAM® AF 7711 Black</h1>
				<p className={styles.description}>Двусторонняя монтажная лента</p>
			</div>
		</div>
	);
};

export default ProductCard;
