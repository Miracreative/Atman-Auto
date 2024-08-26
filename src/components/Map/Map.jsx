import styles from './Map.module.scss';
import Image from 'next/image';


export default function Map() {
	return <div className={styles.wrap}>
		<Image
			src="/map.svg"
			alt="map"
			className={styles.mapImg}
			width={1920}
			height={1102}
		/>

	</div>;
}
