'use client';

import { usePathname, useRouter } from 'next/navigation';

import { menuItems as links } from '@/data/menuItems';

import PolicyFilterItem from '@/components/qualityPage/PolicyFilter/PolicyFilterItem';

import styles from './QualityNav.module.scss';

const QualityNav = () => {
	const pathname = usePathname();
	const router = useRouter();

	console.log(pathname);

	console.log(links.about.items[1].href);
	console.log(links.about.items[1].text);

	return (
		<nav className={styles.qualityNav}>
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
