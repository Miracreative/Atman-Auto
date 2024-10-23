import Image from 'next/image';
import styles from './ProductCard.module.scss';

import image from '/public/test-image.png';

const ProductCard = ({ title, subtitle, imageurl }) => {
	return (
		<div className={styles.card}>
			<Image
				src={image}
				alt={title}
				layout="fill"
				objectFit="cover"
				className={styles.backgroundImage}
				// priority

				// id={product.id}
				// brand={product.brand}
				// title={product.name}
				// subtitle={product.type}
				// imageurl={'file://nanalit/' + product.imageurl}
			/>

			<div className={styles.content}>
				<h1 className={styles.title}>{title}</h1>
				<p className={styles.subtitle}>{subtitle}</p>
			</div>
		</div>
	);
};

export default ProductCard;
