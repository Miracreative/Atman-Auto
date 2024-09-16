import { useEffect } from 'react';
import Image from 'next/image';

import img from '/public/burger-menu/burger-menu-background.png';
import Accordion from '../Accordion/Accordion';

import styles from './BurgerMenu.module.scss';

const BurgerMenu = ({ isActive, setActive }) => {
	useEffect(() => {
		if (isActive) {
			document.body.classList.add('no-scroll');
		} else {
			document.body.classList.remove('no-scroll');
		}
	}, [isActive]);

	return (
		<div className={`${styles.menu} ${isActive ? styles.active : ''}`}>
			<Image
				onClick={() => setActive(false)}
				src={img}
				alt="Atman Auto logo"
				className={styles.image}
				style={{ objectFit: 'cover' }}
				priority
			/>
			<Accordion setActive={setActive} />
		</div>
	);
};

export default BurgerMenu;