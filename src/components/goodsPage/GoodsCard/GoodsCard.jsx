import Image from 'next/image';
import Link from 'next/link';

import image from '/public/test-image.png';

import styles from './GoodsCard.module.scss';

const GoodsCard = ({ id, brand, title, subtitle, imageurl }) => {
	// const GoodsCard = ({ id, brand, title, subtitle, imageURL }) => {
	return (
		<Link href={`/goods/${id}`} className={styles.card}>
			<div className={styles.content}>
				<h1 className={styles.title}>
					{brand} {title}
				</h1>
				<div className={styles.backgroundContainer}>
					<Image
						// src={imageurl}
						// src={imageURL}
						src={image}
						alt={title}
						// width="100%"
						layout="fill"
						objectFit="cover"
						// className={styles.backgroundImage}
						// priority
					/>
				</div>
				<p className={styles.subtitle}>{subtitle}</p>
			</div>
		</Link>
	);
};

export default GoodsCard;
