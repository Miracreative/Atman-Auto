import Link from 'next/link';
import Image from 'next/image';

import styles from './ProductCard.module.scss';

const ProductCard = ({ id, brand, title, subtitle, imageurl }) => {
	return (
		<Link href={`/goods/${id}`} className={styles.card}>
			<Image
				src={imageurl}
				alt={title}
				layout="fill"
				objectFit="cover"
				className={styles.backgroundImage}
				// priority
			/>

			<div className={styles.content}>
				<h1 className={styles.title}>
					{brand} {title}
				</h1>
				<p className={styles.subtitle}>{subtitle}</p>
			</div>
		</Link>
	);
};

export default ProductCard;
