import { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';
import { Controller } from 'swiper/modules';

import SurveySlide from '../SurveySlide/SurveySlide';

import {
	useSelector,
} from 'react-redux';

import {
	LOADING_DATA_ERROR,
	LOADING_INFO,
	NOT_FOUND_INFO,
} from '@/utils/informMessages';

import styles from './SurveySlider.module.scss';

const SurveySlider = () => {
	const { isMobile, products, loading, error, filterAllParam } = useSelector(
		(state) => state.goods,
	);

	const shouldDisplayMessage =
		!isMobile && (loading || error || products.length === 0);

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
								slidesPerView: 1.3,
							},
							374: {
								slidesPerView: 1.6,
							},
							767: {
								slidesPerView: 2.5,
							},
							1025: {
								slidesPerView: 3.5,
							},
							1441: {
								slidesPerView: 5,
							},
						}}
						spaceBetween={10}
						centeredSlides={false}
					>
						{!loading && !error && products.length > 0 && (
							<ul className={styles.resultsList}>
								{products.slice(0, 5).map((product) => (
									<SwiperSlide key={product.id} className={styles.swiperSlide}>
										<SurveySlide product={product} />
									</SwiperSlide>
								))}
							</ul>
						)}

						{shouldDisplayMessage && (
							<div className={styles.messageContainer}>
								{loading && <p>{LOADING_INFO}</p>}
								{!loading && error && <p>{LOADING_DATA_ERROR}</p>}
								{!loading && !error && products.length === 0 && (
									<p>{NOT_FOUND_INFO}</p>
								)}
							</div>
						)}
					</Swiper>
				</div>
			</div>
		</section>
	);
};

export default SurveySlider;
