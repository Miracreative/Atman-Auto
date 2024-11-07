import Link from 'next/link';
import Image from 'next/image';

import image from '/public/test-image.png';

import styles from './GoodsCardFavourite.module.scss';

import { HOST } from '@/constants/url';

const GoodsCardFavourite = ({ id, name, description, imageurl }) => {
	return (
		<Link href={`/goods/${id}`} className={styles.card}>
			<div className={styles.content}>
				<h1 className={styles.name}>{name}</h1>
				<p className={styles.description}>{description}</p>
			</div>

			<div className={styles.imgWrap}>
				<Image
					src={`${HOST}/${imageurl}`}
					// src={image}
					alt="img"
					// layout="fill"
					// objectFit="cover"
					width={400}
					height={300}
					className={styles.img}
				/>
			</div>
		</Link>
	);
};

export default GoodsCardFavourite;
