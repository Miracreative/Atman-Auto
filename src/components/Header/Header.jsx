'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

import HeaderLogo from '../HeaderLogo/HeaderLogo';
import HeaderNav from '../HeaderNav/HeaderNav';
import BurgerButton from './../BurgerButton/BurgerButton';
import BurgerMenu from './../BurgerMenu/BurgerMenu';

import { contacts } from '../../data/contacts';

import styles from './Header.module.scss';

export default function Header() {
	const [activeDropdown, setActiveDropdown] = useState(null);
	const [menuActive, setMenuActive] = useState(false);

	// Smart Header states
	const [isVisible, setIsVisible] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);

	const toggleDropdown = (name) => {
		setActiveDropdown((prevActiveDropdown) =>
			prevActiveDropdown === name ? null : name,
		);
	};

	const toggleMenu = () => {
		setMenuActive((prevMenuActive) => !prevMenuActive);
	};

	const handleScroll = () => {
		const currentScrollY = window.scrollY;

		if (currentScrollY > 200) {
			if (currentScrollY > lastScrollY) {
				setIsVisible(false);
			} else {
				setIsVisible(true);
			}
		} else {
			setIsVisible(true);
		}

		setLastScrollY(currentScrollY);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [lastScrollY]);

	return (
		<header className={`${styles.header} ${!isVisible ? styles.hidden : ''}`}>
			<HeaderLogo />
			<HeaderNav
				toggleDropdown={toggleDropdown}
				activeDropdown={activeDropdown}
			/>
			<Link className={styles.number} href={`tel:${contacts.phone}`}>
				{contacts.phone}
			</Link>
			<BurgerButton
				isActive={menuActive}
				toggleMenu={toggleMenu}
			></BurgerButton>
			<BurgerMenu
				isActive={menuActive}
				setActive={setMenuActive}
				toggleDropdown={toggleDropdown}
				activeDropdown={activeDropdown}
			></BurgerMenu>
		</header>
	);
}
