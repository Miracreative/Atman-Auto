import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.scss';

export default function Header() {
	return (
		<header className={styles.header}>
			{/* <div className="container"> */}
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
					<div className={styles.dropdown}>
						<Link href="/about" className={styles.link}>
							О нас
							<svg
								width="11"
								height="9"
								viewBox="0 0 11 9"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className={styles.triangle}
							>
								<path
									d="M6.37622 8.40688C5.99629 9.09766 5.00371 9.09766 4.62378 8.40688L0.815055 1.48192C0.448506 0.815466 0.930668 9.12994e-07 1.69127 8.79746e-07L9.30873 5.46777e-07C10.0693 5.1353e-07 10.5515 0.815466 10.1849 1.48192L6.37622 8.40688Z"
									fill="#353535"
								/>
							</svg>
						</Link>
						<ul className={styles.dropdownList}>
							<Link href="/" className={styles.dropdownLink}>
								Политика в области качества
							</Link>
							<Link href="/" className={styles.dropdownLink}>
								Кодекс корпоративной этики
							</Link>
							<Link href="/" className={styles.dropdownLink}>
								Политика в области охраны труда
							</Link>
							<Link href="/" className={styles.dropdownLink}>
								Ведомости СОУТ
							</Link>
							<Link href="/" className={styles.dropdownLink}>
								Политика обработка персональных данных
							</Link>
						</ul>
					</div>
					{/* <div className={styles.dropdown}> */}
					{/* <Link href="/about" className={styles.dropdownLink}>
							О нас
						</Link>
						<Link href="/contacts" className={styles.dropdownLink}>
							Применения
						</Link> */}
					{/* </div> */}
					<Link href="/applications" className={styles.link}>
						Применения
						<svg
							width="11"
							height="9"
							viewBox="0 0 11 9"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className={styles.triangle}
						>
							<path
								d="M6.37622 8.40688C5.99629 9.09766 5.00371 9.09766 4.62378 8.40688L0.815055 1.48192C0.448506 0.815466 0.930668 9.12994e-07 1.69127 8.79746e-07L9.30873 5.46777e-07C10.0693 5.1353e-07 10.5515 0.815466 10.1849 1.48192L6.37622 8.40688Z"
								fill="#353535"
							/>
						</svg>
					</Link>
					<Link href="/goods" className={styles.link}>
						Товары
						<svg
							width="11"
							height="9"
							viewBox="0 0 11 9"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className={styles.triangle}
						>
							<path
								d="M6.37622 8.40688C5.99629 9.09766 5.00371 9.09766 4.62378 8.40688L0.815055 1.48192C0.448506 0.815466 0.930668 9.12994e-07 1.69127 8.79746e-07L9.30873 5.46777e-07C10.0693 5.1353e-07 10.5515 0.815466 10.1849 1.48192L6.37622 8.40688Z"
								fill="#353535"
							/>
						</svg>
					</Link>
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
				<p>8-800-250-55-26</p>
			</nav>
			{/* </div> */}
		</header>
	);
}
