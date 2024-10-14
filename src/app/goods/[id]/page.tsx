'use client';

import { useEffect, useState } from 'react';

import axios from 'axios';

import { ALL_GOODS_URL } from '@/constants/url.js';

import {
	LOADING_INFO,
	LOADING_DATA_ERROR,
	NOT_FOUND_INFO,
	UNKNOWN_ERROR,
} from '@/utils/informMessages';

import type { ProductPageProps, ProductsData } from '@/types/product';

import Showcase from '@/components/goodsPage/Showcase/Showcase.jsx';
import Properties from '@/components/goodsPage/Properties/Properties.jsx';

import styles from './ProductPage.module.scss';

const ProductPage = ({ params: { id } }: ProductPageProps) => {
	const [products, setProducts] = useState<ProductsData[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	const fetchProducts = async () => {
		try {
			const response = await axios.get<ProductsData[]>(ALL_GOODS_URL);
			setProducts(response.data);
		} catch (err) {
			setError(err instanceof Error ? err.message : UNKNOWN_ERROR);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchProducts();
	}, []);

	const product = products.find((item) => item.id.toString() === id);

	return (
		<>
			{!loading && !error && product && (
				<>
					<Showcase product={product} />
					<Properties product={product} />
				</>
			)}

			{(loading || error || !product) && (
				<div className={styles.messageContainer}>
					{loading && <p>{LOADING_INFO}</p>}
					{!loading && error && <p>{LOADING_DATA_ERROR}</p>}
					{!loading && !error && !product && <p>{NOT_FOUND_INFO}</p>}
				</div>
			)}
		</>
	);
};

export default ProductPage;
