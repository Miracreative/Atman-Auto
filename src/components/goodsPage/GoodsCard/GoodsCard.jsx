import Image from 'next/image';
import Link from 'next/link';

import image from '/public/test-image.png';

import styles from './GoodsCard.module.scss';

const GoodsCard = ({ id, brand, title, subtitle, imageurl }) => {
	return (
		<Link href={`/goods/${id}`} className={styles.card}>
			<div className={styles.content}>
				<h1 className={styles.title}>
					{brand} {title}
				</h1>
				<div className={styles.backgroundContainer}>
					<Image
						src={image}
						alt={title}
						layout="fill"
						objectFit="cover"
						// priority
					/>
				</div>
				<p className={styles.subtitle}>{subtitle}</p>
			</div>
		</Link>
	);
};

export default GoodsCard;
