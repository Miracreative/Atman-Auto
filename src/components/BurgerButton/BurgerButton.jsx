// import styles from './BurgerButton.module.scss';

// const BurgerButton = ({ isActive, toggleMenu }) => {
// 	return (
// 		<button
// 			className={isActive ? `${styles.button} ${styles.active}` : styles.button}
// 			onClick={toggleMenu}
// 		>
// 			<span></span>
// 		</button>
// 	);
// };

// export default BurgerButton;

import styles from './BurgerButton.module.scss';

const BurgerButton = ({ isActive, toggleMenu }) => {
	return (
		<button
			className={isActive ? `${styles.button} ${styles.active}` : styles.button}
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
