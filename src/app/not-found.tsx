'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

// import backgroundImage from '/public/not-found/404-background-logo.svg';
import backgroundImage from '/public/not-found/404-background-logo.png';
import backgroundImageMobile from '/public/not-found/404-background-logo-mobile.png';
import image from '/public/not-found/404-image.png';
import logoImage from '/public/white-logo.svg';

import MOBILE_WIDTH from '@/constants/width.js';

import useWindowWidth from '@/hooks/useWindowWidth';

import styles from '@/scss/not-found.module.scss';

export default function NotFound() {
	const router = useRouter();

	const width = useWindowWidth();

	const [isMobile, setIsMobile] = useState(false);

	const handleButtonClick = () => {
		router.push('/');
	};

	useEffect(() => {
		// console.log('useEffect сработал');

		if (width <= MOBILE_WIDTH) {
			setIsMobile(true);
			// console.log(
			// 	`Мы в мобильном режиме (текущая ширина ${width}px): ${isMobile}`,
			// );
		} else {
			setIsMobile(false);
			// console.log(
			// 	`Мы в десктопном режиме (текущая ширина ${width}px): ${isMobile}`,
			// );
		}
	}, [width]);

	return (
		<div className={styles.container}>
			<div className={styles.background}>
				<div className={styles.content}>
					<div className={styles.linkContainer}>
						<Link className={styles.link} href="/">
							<Image
								src={logoImage}
								alt="Atman Auto logo"
								className={styles.logo}
								// placeholder="blur"
								// quality={90}
								// priority
							/>
						</Link>
					</div>
					<Image
						className={styles.image}
						src={image}
						alt="Error 404 image"
						// placeholder="blur"
						// quality={80}
						// priority
					/>
					<h1 className={styles.title}>
						Эта страница удалена или находится в работе
					</h1>
					<button
						className={`${styles.button} button`}
						onClick={handleButtonClick}
					>
						На главную
					</button>
				</div>
				<Image
					className={styles.backgroundLogo}
					src={!isMobile ? backgroundImage : backgroundImageMobile}
					alt="The background image is part of the company's logo"
					// placeholder="blur"
					// quality={100}
				/>
			</div>
		</div>
	);
}
