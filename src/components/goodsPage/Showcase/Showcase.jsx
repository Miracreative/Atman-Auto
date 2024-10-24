'use client';

import GoodsSlider from '../GoodsSlider/GoodsSlider.jsx';

import { Breadcrumbs } from '@/components/Breadcrumbs/Breadcrumbs.tsx';

import styles from './Showcase.module.scss';

const Showcase = ({ product }) => {
	const breadcrumbs = [
		{ title: 'Главная', href: '/' },
		{
			title: 'Товары',
			href: '/goods',
		},
		{
			title: `${product.brand} ${product.name}`,
		},
	];

	return (
		<section className={styles.section}>
			<div className={styles.titleContainer}>
				<div className={styles.breadcrumbs}>
					<Breadcrumbs items={breadcrumbs} />
				</div>
				<p className={styles.article}>
					Артикул: <span>{product.article}</span>
				</p>
				<div className={styles.nameContainer}>
					<p className={styles.brand}>{product.brand} </p>
					<h1 className={styles.title}>{product.name}</h1>
				</div>
				<div className={styles.typeContainer}>
					<p className={styles.type}>{product.type}</p>
					<p className={styles.size}>{product.size}.</p>
				</div>

				<p className={styles.description}>{product.description}</p>
				{/* <p className={styles.description}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro magni
					totam natus modi assumenda quas, ullam reiciendis doloribus autem
					sequi quisquam, quam maxime dolor praesentium qui quidem quia
					perspiciatis tempore? Temporibus sunt suscipit dolor quae dolorum,
				</p> */}
				<p className={styles.warning}>
					Рулоны не стандартной ширины и детали простой и сложной формы
					изготавливаются под заказ
				</p>
			</div>
			<div className={styles.sliderContainer}>
				<GoodsSlider product={product} />
			</div>
		</section>
	);
};

export default Showcase;
