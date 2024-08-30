'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import CatalogImage from '/public/catalog/catalog-image.png';

import styles from './Catalog.module.scss';

export default function Catalog() {
	const router = useRouter();

	const handleButtonClick = () => {
		router.push('/goods');
	};

	return (
		<section className={styles.catalog}>
			<div className="container">
				<div className={styles.innerContainer}>
					<div className={styles.background}>
						<div className={styles.content}>
							<h1 className={`${styles.title} title`}>
								Клейкие <span>ленты</span>
							</h1>
							<p className={styles.description}>
								и самоклеящиеся материалы, адаптированные для применения на
								вашем производстве.
							</p>
							<button
								className={`${styles.button} button`}
								onClick={handleButtonClick}
							>
								Каталог
							</button>
						</div>
					</div>
					<div className={styles.imageContainer}>
						<Image
							className={styles.image}
							src={CatalogImage}
							alt="Процесс применения самоклеющейся ленты"
							priority
						></Image>
					</div>
				</div>
			</div>
		</section>
	);
}
