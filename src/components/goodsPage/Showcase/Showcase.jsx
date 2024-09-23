'use client';

import React, { useEffect, useState } from 'react';

import axios from 'axios';

import GoodsSlider from '../GoodsSlider/GoodsSlider.jsx';

import URL from '@/constants/url.js';

import styles from './Showcase.module.scss';

const Showcase = ({ products }) => {
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
