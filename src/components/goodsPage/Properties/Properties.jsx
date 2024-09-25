import Characteristics from '../Characteristics/Characteristics.jsx';
import Advantages from '../Advantages/Advantages.jsx';

import styles from './Properties.module.scss';

const Properties = ({ product }) => {
	return (
		<section className={styles.section}>
			<div className={styles.container}>
				<div className={styles.wrapper}>
					<div className={styles.characteristicsContainer}>
						<div className={styles.characteristics}>
							<Characteristics product={product} />
						</div>
					</div>
					<div className={styles.advantagesContainer}>
						<div className={styles.advantages}>
							<Advantages product={product} />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Properties;
