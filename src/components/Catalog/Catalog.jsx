'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import CatalogImage from '/public/catalog/catalog-image.png';
import CatalogImageMobile from '/public/catalog/catalog-image-mobile.png';
import CatalogBGMobile from '/public/catalog/catalog-bg-mobile.png';

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
					<div className={styles.contentContainer}>
						<div className={styles.blur}>
							<div className={styles.content}>
								<h1 className={`${styles.title} title`}>
									Клейкие <span>ленты</span>
								</h1>
								<p className={styles.description}>
									и самоклеящиеся материалы, адаптированные для применения на
									вашем производстве.
								</p>
								<Image
									className={styles.imageMobile}
									src={CatalogImageMobile}
									alt="Процесс применения самоклеящейся ленты"
									placeholder="blur"
									quality={85}
									priority
								/>
								<button
									className={`${styles.button} button`}
									onClick={handleButtonClick}
								>
									Каталог
								</button>
								<Image
									className={styles.bg}
									src={CatalogBGMobile}
									alt="Установка для наматывания самоклеящейся ленты"
									placeholder="blur"
									quality={80}
									priority
								/>
							</div>
						</div>
					</div>
					<div className={styles.imageContainer}>
						<Image
							className={styles.image}
							src={CatalogImage}
							alt="Процесс применения самоклеящейся ленты"
							placeholder="blur"
							quality={85}
							fill={true}
							sizes="(max-width: 1920px) 100vw"
							priority
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
