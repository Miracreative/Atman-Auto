import Image from 'next/image';
import img from '/public/burger-menu/burger-menu-background.png';
import HeaderNav from '../HeaderNav/HeaderNav';
import styles from './BurgerMenu.module.scss';

const BurgerMenu = ({
	isActive,
	// toggleMenu,
	toggleDropdown,
	activeDropdown,
	// dropdownRefs,
}) => {
	return (
		<div className={`${styles.menu} ${isActive ? styles.active : ''}`}>
			{/* <div className={styles.image}></div> */}
			<Image
				src={img}
				alt="Atman Auto logo"
				className={styles.image}
				style={{ objectFit: 'cover' }}
				priority
			/>{' '}
			<nav className={styles.nav}>
				<HeaderNav
					// toggleMenu={toggleMenu}
					toggleDropdown={toggleDropdown}
					activeDropdown={activeDropdown}
					// dropdownRefs={dropdownRefs}
				/>
			</nav>
		</div>
	);
};

export default BurgerMenu;
