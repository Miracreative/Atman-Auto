import Advantage from '../Advantage/Advantage.jsx';
import RedDot from '../../RedDot/RedDot.jsx';

import styles from './Advantages.module.scss';

const Advantages = () => {
	return (
		<div className={styles.container}>
			<h2 className={styles.title}>Преимущества</h2>
			<ul className={styles.list}>
				<li className={styles.item}>
					<div className={styles.redDot}>
						<RedDot />
					</div>
					<p className={styles.itemText}>
						Водонепроницаемость и термостойкость
					</p>
				</li>
				<li className={styles.item}>
					<div className={styles.redDot}>
						<RedDot />
					</div>
					<p className={styles.itemText}>Гашение вибрации</p>
				</li>
				<li className={styles.item}>
					<div className={styles.redDot}>
						<RedDot />
					</div>
					<p className={styles.itemText}>
						Мягкость и гибкость, подходит для адгезии к криволинейным
						поверхностям
					</p>
				</li>
				<li className={styles.item}>
					<div className={styles.redDot}>
						<RedDot />
					</div>
					<p className={styles.itemText}>Высокая прочность на растяжение</p>
				</li>
				<li className={styles.item}>
					<div className={styles.redDot}>
						<RedDot />
					</div>
					<p className={styles.itemText}>
						Высокая адгезия к большинству поверхностей автомобиля
					</p>
				</li>
				<li className={styles.item}>
					<div className={styles.redDot}>
						<RedDot />
					</div>
					<p className={styles.itemText}>Легкоудаляемый защитный слой</p>
				</li>
				<li className={styles.item}>
					<div className={styles.redDot}>
						<RedDot />
					</div>
					<p className={styles.itemText}>Легко принимает форму поверхности</p>
				</li>
				<li className={styles.item}>
					<div className={styles.redDot}>
						<RedDot />
					</div>
					<p className={styles.itemText}>
						Высокая прочность и долговечность соединения
					</p>
				</li>
			</ul>
		</div>
	);
};

export default Advantages;
