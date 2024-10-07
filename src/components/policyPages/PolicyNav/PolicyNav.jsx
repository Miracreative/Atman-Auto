'use client';

import { usePathname, useRouter } from 'next/navigation';

import { menuItems as links } from '@/data/menuItems';

import PolicyFilterItem from '@/components/policyPages/PolicyFilterItem/PolicyFilterItem';
import styles from './PolicyNav.module.scss';

const PolicyNav = ({ isOpenNav, setIsOpenNav }) => {
	const pathname = usePathname();
	const router = useRouter();

	console.log('isOpenNav', isOpenNav);

	return (
		<nav
			className={`${styles.policyNav} ${
				isOpenNav ? styles.visibleMenu : styles.hiddenMenu
			}`}
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

export default PolicyNav;
