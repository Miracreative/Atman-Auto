import styles from './BurgerButton.module.scss';

const BurgerButton = ({ isActive, toggleMenu }) => {
	return (
		<button
			className={`${styles.button} ${isActive ? styles.active : ''}`}
			onClick={toggleMenu}
		>
			<div className={styles.lineWrapper}>
				<span className={styles.line}></span>
			</div>
			<div className={styles.lineWrapper}>
				<span className={styles.line}></span>
			</div>
			<div className={styles.lineWrapper}>
				<span className={styles.line}></span>
			</div>
		</button>
	);
};

export default BurgerButton;
