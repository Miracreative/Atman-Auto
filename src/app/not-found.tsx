'use client';

import { useRouter } from 'next/navigation';
import styles from '@/scss/not-found.module.scss';

export default function NotFound() {
	const router = useRouter();

	const handleButtonClick = () => {
		router.push('/');
	};

	return (
		<div className={styles.container}>
			<p className={styles.code}>404</p>
			<h2 className={styles.title}>Страница не найдена</h2>
			<p className={styles.description}>Не удалось найти запрошенный ресурс</p>
			<button className={styles.button} onClick={handleButtonClick}>
				На главную
			</button>
		</div>
	);
}
