import { useRef } from 'react';
import Link from 'next/link';

import { useClickOutside } from '../../../hooks/useClickOutside';

import { dropdownItems } from '@/data/menuItems';

import Dropdown from './../Dropdown/Dropdown';

import styles from './HeaderNav.module.scss';

const HeaderNav = ({ toggleDropdown, activeDropdown }) => {
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

	return (
		<nav className={styles.nav}>
			<div className={styles.links}>
				{dropdownItems.map((item) => (
					<Dropdown
						key={item.key}
						title={item.title}
						items={item.items}
						isOpen={activeDropdown === item.key}
						toggleOpen={() => toggleDropdown(item.key)}
						menuRef={refs.current[item.key]}
					/>
				))}
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
		</nav>
	);
};

export default HeaderNav;
