import Image from 'next/image';
import styles from './ProductCard.module.scss';

const ProductCard = ({ title, subtitle, imageUrl }) => {
	return (
		<div className={styles.card}>
			<Image
				src={imageUrl}
				alt={title}
				layout="fill"
				objectFit="cover"
				className={styles.backgroundImage}
				// priority
			/>

			<div className={styles.content}>
				<h1 className={styles.title}>{title}</h1>
				<p className={styles.subtitle}>{subtitle}</p>
			</div>
		</div>
	);
};

export default ProductCard;
