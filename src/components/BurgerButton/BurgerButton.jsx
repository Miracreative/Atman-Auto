import styles from './BurgerButton.module.scss';

const BurgerButton = ({ toggleMenu }) => {
	return (
		<button className={styles.button} onClick={toggleMenu}>
			<span></span>
		</button>
	);
};

export default BurgerButton;
