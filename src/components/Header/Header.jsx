'use client';

import { useState, useEffect, useRef } from 'react';
import HeaderNav from '../HeaderNav/HeaderNav';
import BurgerMenu from './../BurgerMenu/BurgerMenu';
import styles from './Header.module.scss';

export default function Header() {
	const [activeDropdown, setActiveDropdown] = useState(null);

	const [menuActive, setMenuActive] = useState(false);

	const dropdownRefs = useRef({}); // Для хранения ссылок на Dropdown компоненты

	const toggleDropdown = (name) => {
		setActiveDropdown((prevActiveDropdown) =>
			prevActiveDropdown === name ? null : name,
		);
	};

	const toggleMenu = () => {
		setMenuActive((prevMenuActive) => !prevMenuActive);
	};

	const handleClickOutside = (event) => {
		const isClickInside = Object.values(dropdownRefs.current).some(
			(dropdown) => dropdown && dropdown.contains(event.target),
		);

		if (!isClickInside) {
			setActiveDropdown(null);
		}
	};

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	return (
		<header className={styles.header}>
			<HeaderNav
				toggleMenu={toggleMenu}
				toggleDropdown={toggleDropdown}
				activeDropdown={activeDropdown}
				dropdownRefs={dropdownRefs}
			/>
			{/*!! Вынести из HeaderNav в Header логотип, телефон и бургер-кнопку !!*/}
			<BurgerMenu
				isActive={menuActive}
				toggleMenu={toggleMenu}
				toggleDropdown={toggleDropdown}
				activeDropdown={activeDropdown}
				dropdownRefs={dropdownRefs}
			></BurgerMenu>
		</header>
	);
}
