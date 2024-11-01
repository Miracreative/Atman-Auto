import Link from 'next/link';
import Image from 'next/image';

import image from '/public/test-image.png';

import styles from './GoodsCardFavourite.module.scss';

const GoodsCardFavourite = ({ id, name, description }) => {



	return (
		<Link href={`/goods/${id}`} className={styles.card}>


			<div className={styles.content}>
				<h1 className={styles.name}>
					{name}
				</h1>
				<p className={styles.description}>{description}</p>
			</div>


			<Image
				// src={imageurl}
				src={image}
				alt='img'
				// layout="fill"
				// objectFit="cover"
				className={styles.img}

			/>
		</Link>

	);
};

export default GoodsCardFavourite;
