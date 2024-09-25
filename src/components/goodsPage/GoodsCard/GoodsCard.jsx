import Image from 'next/image';
import styles from './GoodsCard.module.scss';
import Link from 'next/link';

const GoodsCard = ({ id, title, subtitle, imageUrl }) => {
	return (
		// <div className={styles.card}>
		<Link href={`/goods/${id}`} className={styles.card}>
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
		</Link>
		// </div>
	);
};

export default GoodsCard;
