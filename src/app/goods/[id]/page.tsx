'use client';

import { useEffect, useState } from 'react';

import axios from 'axios';

import URL from '@/constants/url.js';

import type { ProductPageProps, ProductsData } from '@/types/product';

import Showcase from '@/components/goodsPage/Showcase/Showcase.jsx';
import Properties from '@/components/goodsPage/Properties/Properties.jsx';

import styles from './ProductPage.module.scss';

const ProductPage = ({ params: { id } }: ProductPageProps) => {
	const [products, setProducts] = useState<ProductsData[]>([]);
	// const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await axios.get<ProductsData[]>(URL);
				setProducts(response.data);
			} catch (err) {
				setError(err instanceof Error ? err.message : 'Неизвестная ошибка');
			}
			//  finally {
			// 	setLoading(false);
			// }
		};

		fetchProducts();
	}, []);

	// if (loading) {
	// 	return (
	// 		<div className={styles.loading}>
	// 			<h2>Загрузка информации, подождите...</h2>
	// 		</div>
	// 	);
	// }

	if (error) {
		return <p>Ошибка: {error}</p>;
	}

	const product = products.find((item) => item.id.toString() === id);

	if (!product) {
		return <p>Товар не найден.</p>;
	}

	return (
		<>
			<Showcase product={product} />
			<Properties product={product} />
		</>
	);
};

export default ProductPage;
