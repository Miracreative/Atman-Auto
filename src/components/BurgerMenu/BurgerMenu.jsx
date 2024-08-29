import Image from 'next/image';
import img from '/public/burger-menu/burger-menu-background.png';
import Accordion from '../Accordion/Accordion';
import styles from './BurgerMenu.module.scss';

const BurgerMenu = ({ isActive }) => {
	return (
		<div className={`${styles.menu} ${isActive ? styles.active : ''}`}>
			<Image
				src={img}
				alt="Atman Auto logo"
				className={styles.image}
				style={{ objectFit: 'cover' }}
				priority
			/>
			<Accordion />
		</div>
	);
};

export default BurgerMenu;
