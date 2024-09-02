'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import CatalogImage from '/public/catalog/catalog-image.png';
import CatalogImageMobile from '/public/catalog/catalog-image-mobile.png';
import CatalogBG from '/public/catalog/catalog-bg.png';

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
									alt="Процесс применения самоклеющейся ленты"
									// layout="auto"
									// objectFit="cover"
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
									src={CatalogBG}
									alt="Установка для наматывания самоклеющейся ленты"
									// layout="fill"
									// objectFit="cover"
									priority
								/>
							</div>
						</div>
					</div>
					<div className={styles.imageContainer}>
						<Image
							className={styles.image}
							src={CatalogImage}
							alt="Процесс применения самоклеющейся ленты"
							placeholder="blur"
							quality={100}
							layout="fill"
							objectFit="cover"
							// sizes="100vw"
							// style={{ width: 'auto', objectFit: 'cover' }}
							priority
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
