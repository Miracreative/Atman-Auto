import Image from 'next/image';
import Link from 'next/link';

// import URL from '@/constants/url.js';

import styles from './GoodsCard.module.scss';

const GoodsCard = ({ id, brand, title, subtitle, imageURL }) => {
	return (
		<Link href={`/goods/${id}`} className={styles.card}>
			<Image
				src={imageURL}
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

export default GoodsCard;
