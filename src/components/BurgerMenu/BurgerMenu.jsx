import styles from './BurgerMenu.module.scss';
import BurgerButton from '../BurgerButton/BurgerButton';
const BurgerMenu = () => {
	return (
		<div className={styles.menu}>
			<BurgerButton />
		</div>
	);
};

export default BurgerMenu;
