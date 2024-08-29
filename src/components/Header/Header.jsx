'use client';

import { useState } from 'react';
import Link from 'next/link';
import HeaderNav from '../HeaderNav/HeaderNav';
import BurgerMenu from './../BurgerMenu/BurgerMenu';
import BurgerButton from './../BurgerButton/BurgerButton';
import HeaderLogo from '../HeaderLogo/HeaderLogo';
import styles from './Header.module.scss';

export default function Header() {
	const [activeDropdown, setActiveDropdown] = useState(null);
	const [menuActive, setMenuActive] = useState(false);

	const toggleDropdown = (name) => {
		setActiveDropdown((prevActiveDropdown) =>
			prevActiveDropdown === name ? null : name,
		);
	};

	const toggleMenu = () => {
		setMenuActive((prevMenuActive) => !prevMenuActive);
	};

	return (
		<header className={styles.header}>
			<HeaderLogo />
			<HeaderNav
				toggleDropdown={toggleDropdown}
				activeDropdown={activeDropdown}
			/>
			<Link className={styles.number} href="tel:+78002505526">
				8-800-250-55-26
			</Link>
			<BurgerButton toggleMenu={toggleMenu}></BurgerButton>
			<BurgerMenu
				isActive={menuActive}
				setActive={setMenuActive}
				toggleDropdown={toggleDropdown}
				activeDropdown={activeDropdown}
			></BurgerMenu>
		</header>
	);
}
