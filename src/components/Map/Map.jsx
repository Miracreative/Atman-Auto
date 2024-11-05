import styles from './Map.module.scss';
import Image from 'next/image';

export default function Map() {
	return (
		<section className={styles.wrap}>
			<Image
				src="/map2х.jpg"
				alt="map"
				className={styles.mapImg}
				width={1880}
				height={1062}
				loading="lazy"
			/>
		</section>
	);
}
