import Link from 'next/link';
import Image from 'next/image';

import styles from './ProductCard.module.scss';

const ProductCard = ({ id, brand, title, subtitle, imageurl }) => {
	return (
		<Link href={`/goods/${id}`} className={styles.card}>
			<div className={styles.content}>
				<h1 className={styles.title}>
					{brand} {title}
				</h1>
				<div className={styles.backgroundContainer}>
					<Image
						src={imageurl}
						alt={title}
						fill={true}
						className={styles.backgroundImage}
					/>
				</div>
				<p className={styles.subtitle}>{subtitle}</p>
			</div>
		</Link>
	);
};

export default ProductCard;
