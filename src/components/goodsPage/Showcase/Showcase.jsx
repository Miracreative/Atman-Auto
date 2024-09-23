'use client';

import React, { useEffect, useState } from 'react';

import axios from 'axios';

import GoodsSlider from '../GoodsSlider/GoodsSlider.jsx';

import URL from '@/constants/url.js';

import styles from './Showcase.module.scss';

const Showcase = () => {
	// Для хранения данных о товарах
	const [products, setProducts] = useState([]);

	const [loading, setLoading] = useState(true);
	// const [loading, setLoading] = useState(false);

	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				// setLoading(true);
				const response = await axios.get(URL);
				setProducts(response.data); // Сохранение данных в состояние
			} catch (err) {
				setError(err.message); // Обработка ошибок
			} finally {
				setLoading(false);
			}
		};

		fetchProducts();
	}, []);

	// Сообщение о загрузке
	if (loading) {
		return (
			<section className={styles.loadingContainer}>
				<h2>Загрузка информации, подождите...</h2>
			</section>
		);
	}

	// Сообщение об ошибке
	if (error) {
		return (
			<section className={styles.loadingContainer}>
				<p2>Ошибка: {error}</p2>;
			</section>
		);
	}

	// console.log(products);

	return (
		<section className={styles.section}>
			<div className={styles.titleContainer}>
				<div className={styles.breadCrumbs}>
					Главная = Товары =
					<p>
						{products[2].brand}
						{products[2].name}
					</p>
				</div>
				<p className={styles.article}>
					Артикул: <span>{products[2].article}</span>
				</p>
				<div className={styles.nameContainer}>
					<p className={styles.brand}>{products[2].brand} </p>
					<h1 className={styles.title}>{products[2].name}</h1>
				</div>
				<div className={styles.typeContainer}>
					<p className={styles.type}>{products[2].type}</p>
					<p className={styles.size}>{products[2].size}.</p>
				</div>

				<p className={styles.description}>{products[2].description}</p>
				<p className={styles.warning}>
					Рулоны не стандартной ширины и детали простой и сложной формы
					изготавливаются под заказ
				</p>
			</div>
			<GoodsSlider products={products} />
		</section>
	);
};

export default Showcase;
