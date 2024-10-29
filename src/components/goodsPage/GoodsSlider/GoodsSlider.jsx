'use client';

import { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';
import { Controller } from 'swiper/modules';

import { HOST } from '@/constants/url';

import styles from './GoodsSlider.module.scss';

export default function GoodsSlider({ product }) {
	const [canGoPrev, setCanGoPrev] = useState(false);
	const [canGoNext, setCanGoNext] = useState(true);

	const [swiper, setSwiper] = useState(null);

	// console.log('product', product);

	console.log('products goodspersonalimages', product.goodspersonalimages);

	// console.log('название', `${product.brand} ${product.name}`);

	// console.log('Картинки с сервера', `${HOST}/${product.goodspersonalimages}`);

	console.log('Кнопки', product.goodspersonalimages.length);

	const onSlideChange = (swiper) => {
		const isBeginning = swiper.isBeginning;
		const isEnd = swiper.isEnd;

		setCanGoPrev(!isBeginning);
		setCanGoNext(!isEnd);
	};

	const goToPrevSlide = () => {
		if (swiper) {
			swiper.slidePrev();
		}
	};

	const goToNextSlide = () => {
		if (swiper) {
			swiper.slideNext();
		}
	};

	return (
		<section className={styles.section}>
			<div className={styles.wrapper}>
				<div className={styles.swiperContainer}>
					<Swiper
						wrapperClass={styles.swiperWrapper}
						className={styles.swiper}
						modules={[Navigation, A11y, Controller]}
						breakpoints={{
							0: {
								slidesPerView: 1.5,
							},
							767: {
								slidesPerView: 2.5,
							},
							1025: {
								slidesPerView: 1,
							},
						}}
						onSwiper={setSwiper}
						navigation={{
							prevEl: '.prev',
							nextEl: '.next',
						}}
						// slidesPerView={4.2}
						onSlideChange={(swiper) => onSlideChange(swiper)}
					>
						{/* {products.map((item) => ( */}
						{product.goodsindustrialimages.map((image) => (
							// {decisionsData.map((item, index) => (
							<SwiperSlide key={image} className={styles.swiperSlide}>
								{/* <img src={item.image} alt={item.title} /> */}
								<img
									// src={item.goodsindustrialimages}
									src={`${HOST}/${product.goodspersonalimages}`}
									alt={`${product.brand} ${product.name}`}
								/>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>

			{product.goodspersonalimages.length >= 2 ? (
				<>
					<button
						className={styles.prevBtn}
						onClick={goToPrevSlide}
						disabled={!canGoPrev}
					>
						<svg
							width="30"
							height="12"
							viewBox="0 0 30 12"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M30 5.99989L20 0.226425L20 11.7734L30 5.99989ZM3.63191e-06 7L21 6.99992L21 4.99992L-3.63191e-06 5L3.63191e-06 7Z"
								fill="white"
							/>
						</svg>
					</button>

					<button
						className={styles.nextBtn}
						onClick={goToNextSlide}
						disabled={!canGoNext}
					>
						<svg
							width="30"
							height="12"
							viewBox="0 0 30 12"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M30 5.99989L20 0.226425L20 11.7734L30 5.99989ZM3.63191e-06 7L21 6.99992L21 4.99992L-3.63191e-06 5L3.63191e-06 7Z"
								fill="white"
							/>
						</svg>
					</button>
				</>
			) : (
				<></>
			)}
		</section>
	);
}
