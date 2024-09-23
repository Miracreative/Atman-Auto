import Characteristics from '../Characteristics/Characteristics.jsx';
import Advantages from '../Advantages/Advantages.jsx';

import styles from './Properties.module.scss';

const Properties = () => {
	return (
		<section className={styles.section}>
			<div className="container">
				<div className={styles.wrapper}>
					<div className={styles.characteristics}>
						<Characteristics />
					</div>
					<div className={styles.advantages}>
						<Advantages />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Properties;
