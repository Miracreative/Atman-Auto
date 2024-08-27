'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.scss';
import { menuItems } from './../../data/menuItems';
import Dropdown from './../Dropdown/Dropdown';
import BurgerMenu from './../BurgerMenu/BurgerMenu';
import { useState, useEffect, useRef } from 'react';
import logoImage from '/public/logo.svg';

export default function Header() {
	const [activeDropdown, setActiveDropdown] = useState(null);

	const [menuActive, setMenuActive] = useState(false);

	const dropdownRefs = useRef({}); // Для хранения ссылок на Dropdown компоненты

	const toggleDropdown = (name) => {
		setActiveDropdown((prev) => (prev === name ? null : name));
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
			<nav className={styles.nav}>
				<div className={styles.logoContainer}>
					<Link href="/">
						<Image
							src={logoImage}
							alt="Atman Auto logo"
							className={styles.logo}
							// sizes="(max-width: 256px) 50vw, 256px"
							// width={255}
							// height={88}
							priority
						/>
					</Link>
				</div>
				<div className={styles.links}>
					<Dropdown
						ref={(element) => (dropdownRefs.current['about'] = element)}
						title={menuItems.about.title}
						items={menuItems.about.items}
						isOpen={activeDropdown === 'about'}
						toggleOpen={() => toggleDropdown('about')}
					/>
					<Dropdown
						ref={(element) => (dropdownRefs.current['applications'] = element)}
						title={menuItems.applications.title}
						items={menuItems.applications.items}
						isOpen={activeDropdown === 'applications'}
						toggleOpen={() => toggleDropdown('applications')}
					/>
					<Dropdown
						ref={(element) => (dropdownRefs.current['goods'] = element)}
						title={menuItems.goods.title}
						items={menuItems.goods.items}
						isOpen={activeDropdown === 'goods'}
						toggleOpen={() => toggleDropdown('goods')}
					/>
					<Link href="/production" className={styles.link}>
						Производство
					</Link>
					<Link href="/knowledge" className={styles.link}>
						База знаний
					</Link>
					<Link href="/news" className={styles.link}>
						Новости
					</Link>
				</div>
				<Link className={styles.number} href="tel:+78002505526">
					8-800-250-55-26
				</Link>
				<BurgerMenu></BurgerMenu>
			</nav>
		</header>
	);
}
