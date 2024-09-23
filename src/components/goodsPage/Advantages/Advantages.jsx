'use client';

import axios from 'axios';

import URL from '@/constants/url.js';

import Advantage from '../Advantage/Advantage.jsx';
import RedDot from '../../RedDot/RedDot.jsx';

import styles from './Advantages.module.scss';
import { useEffect, useState } from 'react';

const Advantages = () => {
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

	console.log(products[2]);

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

	return (
		<div className={styles.container}>
			<h2 className={styles.title}>Преимущества</h2>
			<ul className={styles.list}>
				{products[2].advantages &&
					products[2].advantages.map((itemText, index) => (
						<li key={index} className={styles.item}>
							<div className={styles.redDot}>
								<RedDot />
							</div>
							<p className={styles.itemText}>{itemText}</p>
						</li>
					))}
			</ul>
		</div>
	);
};

export default Advantages;
