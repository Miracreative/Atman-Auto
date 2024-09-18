'use client';

import { useRouter } from 'next/navigation';
import styles from '@/scss/not-found.module.scss';
import Image from 'next/image';

import background from '/public/not-found/404.png';
import image from '/public/not-found/404-image.png';
import logoImage from '/public/white-logo.svg';
import HeaderLogo from '@/components/headerSection/HeaderLogo/HeaderLogo';

export default function NotFound() {
	const router = useRouter();

	const handleButtonClick = () => {
		router.push('/');
	};

	return (
		<div className={styles.container}>
			<div className={styles.background}>
				<div className={styles.content}>
					{/* <Image
				className={styles.background}
				src={background}
				alt="Background image - 404"
				/> */}
					<Image
						src={logoImage}
						alt="Atman Auto logo"
						className={styles.logo}
						// priority
					/>
					<Image className={styles.image} src={image} alt="Image - 404" />
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
			</div>
		</div>
	);
}
