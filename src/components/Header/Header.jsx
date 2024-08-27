'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.scss';
import { menuItems } from './../../data/menuItems';
import Dropdown from './../Dropdown/Dropdown';
import { useState, useEffect, useRef } from 'react';

export default function Header() {
	const [activeDropdown, setActiveDropdown] = useState(null);
	const dropdownRefs = useRef({}); // Для хранения ссылок на Dropdown компоненты

	const toggleDropdown = (name) => {
		setActiveDropdown((prev) => (prev === name ? null : name));
	};

	// Обработчик клика вне Dropdown
	const handleClickOutside = (event) => {
		const isClickInside = Object.values(dropdownRefs.current).some(
			(dropdown) => dropdown && dropdown.contains(event.target),
		);

		if (!isClickInside) {
			setActiveDropdown(null); // Закрывает все Dropdown если клик вне
		}
	};

	useEffect(() => {
		// Добавляет обработчик события клика
		document.addEventListener('mousedown', handleClickOutside);

		return () => {
			// Убирает обработчик при размонтировании компонента
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	return (
		<header className={styles.header}>
			<nav className={styles.nav}>
				<div className={styles.logoContainer}>
					<Link href="/">
						<Image
							src="/logo.svg"
							alt="Atman Auto logo"
							className={styles.logo}
							width={255}
							height={88}
							priority
						/>
					</Link>
				</div>
				<div className={styles.links}>
					<Dropdown
						ref={(el) => (dropdownRefs.current['about'] = el)} // Сохраняем ссылку на Dropdown
						title={menuItems.about.title}
						items={menuItems.about.items}
						isOpen={activeDropdown === 'about'}
						toggleOpen={() => toggleDropdown('about')}
					/>
					<Dropdown
						ref={(el) => (dropdownRefs.current['applications'] = el)} // Сохраняем ссылку на Dropdown
						title={menuItems.applications.title}
						items={menuItems.applications.items}
						isOpen={activeDropdown === 'applications'}
						toggleOpen={() => toggleDropdown('applications')}
					/>
					<Dropdown
						ref={(el) => (dropdownRefs.current['goods'] = el)} // Сохраняем ссылку на Dropdown
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
			</nav>
		</header>
	);
}
