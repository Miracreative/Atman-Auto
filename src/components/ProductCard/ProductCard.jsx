import Link from 'next/link';
import Image from 'next/image';

import image from '/public/test-image.png';

import styles from './ProductCard.module.scss';

const ProductCard = ({ id, brand, title, subtitle, imageurl }) => {
	return (
		// <div className={styles.card}>
		<Link href={`/goods/${id}`} className={styles.card}>
			<Image
				// src={imageurl}
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
				<h1 className={styles.title}>
					{brand} {title}
				</h1>
				<p className={styles.subtitle}>{subtitle}</p>
			</div>
		</Link>

		// </div>
	);
};

export default ProductCard;
