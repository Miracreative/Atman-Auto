// 'use client';

import styles from './Recommendations.module.scss';
import recomendationsData from '@/data/recomendationsData.js';
// import { useState, useEffect } from 'react';
import Link from 'next/link';

import axios from 'axios';
import { useState, useEffect } from 'react';

import {
	LOADING_INFO,
	LOADING_DATA_ERROR,
	NOT_FOUND_INFO,
	UNKNOWN_ERROR,
} from '@/utils/informMessages';

import { HOST } from '@/constants/url.js';

export default function Recommendations() {
	const [recomendationsData, setRecomendationsData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const fetchData = async () => {
		try {
			const response = await axios.get(`${HOST}/api/afoam`);
			setRecomendationsData(response.data);
		} catch (err) {
			setError(err.message);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	console.log(recomendationsData);

	return (
		<>
			<section className={styles.section}>
				<div className="container">
					<div className={styles.wrap}>
						<h2 className={styles.title}>
							Продукты рекомендуемые <br /> <span>к применению:</span>
						</h2>

						<div className={styles.content}>
							{recomendationsData.map((item) => (
								<div className={styles.item} key={item.id}>
									<div className={styles.nameItem}> {item.name} </div>
									<div className={styles.description}> {item.description} </div>

									<div className={styles.linkWrap}>
										<Link className={styles.link} href="/">
											{' '}
											Подробнее{' '}
										</Link>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
