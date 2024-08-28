import Link from 'next/link';
import styles from './HeaderNav.module.scss';
import { menuItems } from './../../data/menuItems';
import Dropdown from './../Dropdown/Dropdown';

const HeaderNav = ({
	// toggleMenu,
	toggleDropdown,
	activeDropdown,
	// dropdownRefs,
}) => {
	return (
		<nav className={styles.nav}>
			<div className={styles.links}>
				<Dropdown
					// ref={(element) => (dropdownRefs.current['about'] = element)}
					title={menuItems.about.title}
					items={menuItems.about.items}
					isOpen={activeDropdown === 'about'}
					toggleOpen={() => toggleDropdown('about')}
				/>
				<Dropdown
					// ref={(element) => (dropdownRefs.current['applications'] = element)}
					title={menuItems.applications.title}
					items={menuItems.applications.items}
					isOpen={activeDropdown === 'applications'}
					toggleOpen={() => toggleDropdown('applications')}
				/>
				<Dropdown
					// ref={(element) => (dropdownRefs.current['goods'] = element)}
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
		</nav>
	);
};

export default HeaderNav;
