'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import useScrollVisibility from '@/hooks/useScrollVisibility';

import contacts from '@/data/contacts';

import HeaderLogo from './../HeaderLogo/HeaderLogo';
import HeaderNav from './../HeaderNav/HeaderNav';
import BurgerButton from './../BurgerButton/BurgerButton';
import BurgerMenu from './../BurgerMenu/BurgerMenu';

import styles from './Header.module.scss';

export default function Header() {
	const isVisibleHeader = useScrollVisibility();

	const pathname = usePathname();

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

	// const isActiveLink = (items) => {
	// 	return items.some((item) => pathname === item.href);
	// };
	const isActiveLink = (items) => {
		return items.some(
			(item) => pathname === item.href || pathname.startsWith(item.href + '/'),
		);
	};

	return (
		<header
			className={`${styles.header} ${!isVisibleHeader ? styles.hidden : ''}`}
		>
			<HeaderLogo setActive={setMenuActive} />
			<HeaderNav
				toggleDropdown={toggleDropdown}
				activeDropdown={activeDropdown}
				isActiveLink={isActiveLink}
			/>
			<Link className={styles.number} href={`tel:${contacts.phone}`}>
				{contacts.phone}
			</Link>
			<BurgerButton isActive={menuActive} toggleMenu={toggleMenu} />
			<BurgerMenu
				isActive={menuActive}
				setActive={setMenuActive}
				isActiveLink={isActiveLink}
			/>
		</header>
	);
}
