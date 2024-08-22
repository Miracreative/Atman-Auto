import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
	return (
		<header className={styles.header}>
			<div className="container">
				<nav className={styles.nav}>
					<div className={styles['logo-container']}>
						<Image
							src="/logo.svg"
							alt="Atman Auto logo"
							className={styles.logo}
							width={255}
							height={88}
							priority
						/>
					</div>
					<div className={styles.navLinks}>
						<Link href="/about" className={styles.navLink}>
							О нас
						</Link>
						<Link href="/applications" className={styles.navLink}>
							Применения
						</Link>
						<Link href="/goods" className={styles.navLink}>
							Товары
						</Link>
						<Link href="/production" className={styles.navLink}>
							Производство
						</Link>
						<Link href="/knowledge" className={styles.navLink}>
							База знаний
						</Link>
						<Link href="/news" className={styles.navLink}>
							Новости
						</Link>
					</div>
					<p>8-800-250-55-26</p>
				</nav>
			</div>
		</header>
	);
}
