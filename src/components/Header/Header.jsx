'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.scss';

export default function Header() {
	const [dropMenuButton, setDropMenuButton] = useState(false);

	const toggleDropMenu = () => {
		setDropMenuButton((prevState) => !prevState);
		console.log(dropMenuButton);
	};

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
					<div className={styles.dropdown}>
						<button
							className={`${styles.button} ${
								dropMenuButton ? styles.buttonActive : ''
							}`}
							onClick={toggleDropMenu}
						>
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
						</button>
						<div
							className={`${styles.dropdownContainer} ${
								dropMenuButton ? styles.dropdownContainerActive : ''
							}`}
						>
							<ul className={styles.dropdownList}>
								<Link
									href="/about/quality-policy"
									className={styles.dropdownLink}
								>
									Политика в области качества
								</Link>
								<Link
									href="/about/corporate-ethics"
									className={styles.dropdownLink}
								>
									Кодекс корпоративной этики
								</Link>
								<Link
									href="/about/safety-and-health-policy"
									className={styles.dropdownLink}
								>
									Политика в области охраны труда
								</Link>
								<Link href="/about/saut" className={styles.dropdownLink}>
									Ведомости СОУТ
								</Link>
								<Link
									href="/about/personal-data-processing-policy"
									className={styles.dropdownLink}
								>
									Политика обработка персональных данных
								</Link>
							</ul>
						</div>
					</div>
					<div className={styles.dropdown}>
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
						<div className={styles.dropdownContainer}>
							<ul className={styles.dropdownList}>
								<Link
									href="/applications/automobile-industry"
									className={styles.dropdownLink}
								>
									Автомобильная промышленность
								</Link>
								<Link
									href="/applications/manufacture-of-household-appliances"
									className={styles.dropdownLink}
								>
									Производство бытовой техники
								</Link>
								<Link
									href="/applications/furniture-industry"
									className={styles.dropdownLink}
								>
									Мебельная промышленность
								</Link>
								<Link
									href="/applications/electronics-manufacturing"
									className={styles.dropdownLink}
								>
									Производство электроники
								</Link>
								<Link
									href="/applications/construction-and-renovation"
									className={styles.dropdownLink}
								>
									Строительство и ремонт
								</Link>
								<Link
									href="/applications/transport"
									className={styles.dropdownLink}
								>
									Транспорт
								</Link>
								<Link href="/applications/ros" className={styles.dropdownLink}>
									РОС
								</Link>
							</ul>
						</div>
					</div>
					<div className={styles.dropdown}>
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
						<div className={styles.dropdownContainer}>
							<ul className={styles.dropdownList}>
								<Link
									href="/goods/foamed-double-sided-adhesive-tapes"
									className={styles.dropdownLink}
								>
									Вспененные двусторонние клейкие ленты
								</Link>
								<Link
									href="/goods/thin-double-sided-adhesive-tapes"
									className={styles.dropdownLink}
								>
									Тонкие двусторонние клейкие ленты
								</Link>
								<Link
									href="/goods/single-sided-adhesive-tapes"
									className={styles.dropdownLink}
								>
									Односторонние клейкие ленты
								</Link>
								<Link
									href="/goods/primers-and-cleaners"
									className={styles.dropdownLink}
								>
									Праймеры и очистители
								</Link>
								<Link href="/goods/tapes" className={styles.dropdownLink}>
									Пленки
								</Link>
								<Link href="/goods/tools" className={styles.dropdownLink}>
									Инструменты
								</Link>
								<Link href="/goods/rubbers" className={styles.dropdownLink}>
									Резины
								</Link>
							</ul>
						</div>
					</div>
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
					<div>8-800-250-55-26</div>
				</Link>
			</nav>
		</header>
	);
}
