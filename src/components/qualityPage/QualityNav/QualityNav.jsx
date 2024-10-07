'use client';

import { usePathname, useRouter } from 'next/navigation';

import { menuItems as links } from '@/data/menuItems';

import { useClickOutside } from '@/hooks/useClickOutside.js';

import PolicyFilterItem from '@/components/qualityPage/PolicyFilterItem/PolicyFilterItem';

import styles from './QualityNav.module.scss';
import { useEffect, useRef } from 'react';

const QualityNav = ({ isOpenNav, setIsOpenNav }) => {
	const pathname = usePathname();
	const router = useRouter();
	const modalRef = useRef();

	// console.log(pathname);

	// console.log(links.about.items[1].href);
	// console.log(links.about.items[1].text);

	const handleClickOutside = (event) => {
		if (modalRef.current && !modalRef.current.contains(event.target)) {
			setIsOpenNav(false);
		}
	};

	useEffect(() => {
		if (isOpenNav) {
			document.addEventListener('mousedown', handleClickOutside);
		} else {
			document.removeEventListener('mousedown', handleClickOutside);
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [isOpenNav]);

	return (
		<nav
			className={`${styles.qualityNav} ${
				isOpenNav ? styles.visibleMenu : styles.hiddenMenu
			}`}
			ref={modalRef}
		>
			<ul className={styles.links}>
				{links.about.items.slice(1).map((link) => (
					<li className={styles.link} key={link.href}>
						<PolicyFilterItem
							link={link.href}
							text={link.text}
							checked={pathname === link.href}
							onChange={() => {
								router.push(link.href);
							}}
						/>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default QualityNav;
