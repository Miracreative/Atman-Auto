import Characteristics from '../Characteristics/Characteristics.jsx';
import Advantages from '../Advantages/Advantages.jsx';

import styles from './Properties.module.scss';

const Properties = ({ products }) => {
	return (
		<section className={styles.section}>
			<div className="container">
				<div className={styles.wrapper}>
					<div className={styles.characteristics}>
						<Characteristics products={products} />
					</div>
					<div className={styles.advantages}>
						<Advantages products={products} />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Properties;
