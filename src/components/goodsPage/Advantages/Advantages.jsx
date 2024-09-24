'use client';

// import Advantage from '../Advantage/Advantage.jsx';
import RedDot from '@/components/RedDot/RedDot.jsx';

import styles from './Advantages.module.scss';

const Advantages = ({ products }) => {
	const product = products[2]; // Предположим, что мы работаем с третьим продуктом

	return (
		<div className={styles.container}>
			<h2 className={styles.title}>Преимущества</h2>
			<ul className={styles.list}>
				{product.advantages &&
					product.advantages.map((itemText, index) => (
						<li key={index} className={styles.item}>
							<div className={styles.redDot}>
								<RedDot />
							</div>
							<p className={styles.itemText}>{itemText}</p>
						</li>
					))}
			</ul>
		</div>
	);
};

export default Advantages;