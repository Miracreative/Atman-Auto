import { useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useClickOutside } from '@/hooks/useClickOutside.js';

import { dropdownItems } from '@/data/menuItems';

import Dropdown from './../Dropdown/Dropdown';

import styles from './HeaderNav.module.scss';

const HeaderNav = ({ toggleDropdown, activeDropdown, isActiveLink }) => {
	// const [filterMainParam, setFilterMainParam] = useState([
	// 	0, 0, 0, 0, 0, 0, 0, 0,
	// ]);
	// const [loading, setLoading] = useState(true);

	const refs = useRef(
		dropdownItems.reduce((acc, item) => {
			acc[item.key] = useRef(null);
			return acc;
		}, {}),
	);

	dropdownItems.forEach((item) => {
		useClickOutside(refs.current[item.key], () => {
			if (activeDropdown === item.key) {
				toggleDropdown(item.key);
			}
		});
	});

	const pathname = usePathname();

	// console.log('dropdownItems', dropdownItems);

	return (
		<nav className={styles.nav}>
			<div className={styles.links}>
				{dropdownItems.map((item) => (
					<Dropdown
						key={item.key}
						title={item.title}
						items={item.items}
						isActiveLink={isActiveLink(item.items)}
						isOpen={activeDropdown === item.key}
						toggleOpen={() => toggleDropdown(item.key)}
						menuRef={refs.current[item.key]}
						// setFilterMainParam={setFilterMainParam}
					/>
				))}
				<Link
					href="/production"
					className={`${styles.link} ${
						pathname === '/production' ? styles.linkActive : ''
					}`}
				>
					Производство
				</Link>
				<Link
					href="/knowledge"
					className={`${styles.link} ${
						pathname === '/knowledge' ? styles.linkActive : ''
					}`}
				>
					База знаний
				</Link>
				<Link
					href="/news"
					className={`${styles.link} ${
						pathname === '/news' ? styles.linkActive : ''
					}`}
				>
					Новости
				</Link>
			</div>
		</nav>
	);
};

export default HeaderNav;
