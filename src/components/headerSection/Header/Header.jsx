'use client';

import { useState } from 'react';
import Link from 'next/link';

import useScrollVisibility from '@/hooks/useScrollVisibility';
import contacts from '@/data/contacts';

import HeaderLogo from './../HeaderLogo/HeaderLogo';
import HeaderNav from './../HeaderNav/HeaderNav';
import BurgerButton from './../BurgerButton/BurgerButton';
import BurgerMenu from './../BurgerMenu/BurgerMenu';

import styles from './Header.module.scss';

export default function Header() {
	const isVisibleHeader = useScrollVisibility();

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
		<header
			className={`${styles.header} ${!isVisibleHeader ? styles.hidden : ''}`}
		>
			<HeaderLogo setActive={setMenuActive} />
			<HeaderNav
				toggleDropdown={toggleDropdown}
				activeDropdown={activeDropdown}
			/>
			<Link className={styles.number} href={`tel:${contacts.phone}`}>
				{contacts.phone}
			</Link>
			<BurgerButton isActive={menuActive} toggleMenu={toggleMenu} />
			<BurgerMenu
				isActive={menuActive}
				setActive={setMenuActive}
				toggleDropdown={toggleDropdown}
				activeDropdown={activeDropdown}
			/>
		</header>
	);
}