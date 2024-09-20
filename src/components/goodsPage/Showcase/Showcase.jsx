'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GoodsSlider from '../GoodsSlider/GoodsSlider.jsx';
import styles from './Showcase.module.scss';

const Showcase = () => {
	const [products, setProducts] = useState([]); // Для хранения данных о товарах
	const [loading, setLoading] = useState(true); // Для отслеживания состояния загрузки
	const [error, setError] = useState(null); // Для обработки ошибок

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await axios.get(
					'https://66daaa43f47a05d55be57df5.mockapi.io/atman/products',
				);
				setProducts(response.data); // Сохранение данных в состояние
			} catch (err) {
				setError(err.message); // Обработка ошибок
			} finally {
				setLoading(false); // Завершение загрузки
			}
		};

		fetchProducts();
	}, []); // Пустой массив означает, что эффект выполнится только один раз при монтировании компонента

	if (loading) {
		return (
			<section className={styles.loadingContainer}>
				<h2>Загрузка информации...</h2>
			</section>
		); // Сообщение о загрузке
	}

	if (error) {
		return <p>Ошибка: {error}</p>; // Сообщение об ошибках
	}

	return (
		<section className={styles.section}>
			{/* <div className={styles.container}> */}
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
				<p className={styles.type}>{products[2].type}</p>
				<p className={styles.description}>{products[2].description}</p>
				<p className={styles.warning}>
					Рулоны не стандартной ширины и детали простой и сложной формы
					изготавливаются под заказ
				</p>
			</div>
			<GoodsSlider products={products} />
			{/* </div> */}
		</section>
	);
};

export default Showcase;
