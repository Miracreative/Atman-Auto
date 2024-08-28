'use client';

import {
	useState,
	// useEffect,
	// useRef,
} from 'react';
import Link from 'next/link';
import HeaderNav from '../HeaderNav/HeaderNav';
import BurgerMenu from './../BurgerMenu/BurgerMenu';
import BurgerButton from './../BurgerButton/BurgerButton';
import HeaderLogo from '../HeaderLogo/HeaderLogo';
import styles from './Header.module.scss';

export default function Header() {
	const [activeDropdown, setActiveDropdown] = useState(null);
	const [menuActive, setMenuActive] = useState(false);

	// const dropdownRefs = useRef({});
	// Для хранения ссылок на Dropdown компоненты

	const toggleDropdown = (name) => {
		setActiveDropdown((prevActiveDropdown) =>
			prevActiveDropdown === name ? null : name,
		);
	};

	const toggleMenu = () => {
		setMenuActive((prevMenuActive) => !prevMenuActive);
	};

	// const handleClickOutside = (event) => {
	// 	console.log('Clicked element:', event.target);
	// 	console.log('Dropdown refs:', dropdownRefs.current);
	// 	if (
	// 		Object.values(dropdownRefs.current).some((dropdown) =>
	// 			dropdown?.contains(event.target),
	// 		)
	// 	) {
	// 		console.log('Click inside dropdown');
	// 		return;
	// 	}
	// 	console.log('Click outside dropdown');
	// 	setActiveDropdown(null);
	// };

	// const handleClickOutside = (event) => {
	// 	// Логируем кликнутый элемент и текущие рефы
	// 	console.log('Clicked element:', event.target);
	// 	console.log('Dropdown refs:', dropdownRefs.current);

	// 	// Проверяем, находится ли клик внутри любого из рефов
	// 	const isClickInsideDropdown = Object.values(dropdownRefs.current).some(
	// 		(dropdown) => dropdown && dropdown.contains(event.target),
	// 	);

	// 	if (!isClickInsideDropdown) {
	// 		console.log('Click outside dropdown');
	// 		setActiveDropdown(null); // Иначе закрываем все дропдауны
	// 	} else {
	// 		console.log('Click inside dropdown');
	// 	}
	// };

	// useEffect(() => {
	// 	document.addEventListener('mousedown', handleClickOutside);
	// 	return () => {
	// 		document.removeEventListener('mousedown', handleClickOutside);
	// 	};
	// }, []);

	return (
		<header className={styles.header}>
			<HeaderLogo />
			<HeaderNav
				// toggleMenu={toggleMenu}
				toggleDropdown={toggleDropdown}
				activeDropdown={activeDropdown}
				// dropdownRefs={dropdownRefs}
			/>
			<Link className={styles.number} href="tel:+78002505526">
				8-800-250-55-26
			</Link>
			<BurgerButton toggleMenu={toggleMenu}></BurgerButton>
			<BurgerMenu
				isActive={menuActive}
				// toggleMenu={toggleMenu}
				toggleDropdown={toggleDropdown}
				activeDropdown={activeDropdown}
				// dropdownRefs={dropdownRefs}
			></BurgerMenu>
		</header>
	);
}
