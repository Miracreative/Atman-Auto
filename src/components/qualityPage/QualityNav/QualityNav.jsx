import styles from './QualityNav.module.scss';

const QualityNav = () => {
	return (
		<div className={styles.qualityNav}>
			<ul>
				<li>Политика в области качества</li>
				<li>Кодекс корпоративной этики</li>
				<li>Политика в области охраны труда</li>
				<li>Ведомости СОУТ</li>
				<li>Политика обработка персональных данных</li>
			</ul>
		</div>
	);
};

export default QualityNav;
