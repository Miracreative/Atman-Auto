import { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';
import { Controller } from 'swiper/modules';

import SurveySlide from '../SurveySlide/SurveySlide';

import {
	useSelector,
	//  useDispatch,
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

	// const [canGoPrev, setCanGoPrev] = useState(false);
	// const [canGoNext, setCanGoNext] = useState(true);

	// const [swiper, setSwiper] = useState(null);

	const onSlideChange = (swiper) => {
		// const isBeginning = swiper.isBeginning;
		// const isEnd = swiper.isEnd;
		// setCanGoPrev(!isBeginning);
		// setCanGoNext(!isEnd);
	};

	// const goToPrevSlide = () => {
	// 	if (swiper) {
	// 		swiper.slidePrev();
	// 	}
	// };

	// const goToNextSlide = () => {
	// 	if (swiper) {
	// 		swiper.slideNext();
	// 	}
	// };

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
								slidesPerView: 1.5,
							},
							767: {
								slidesPerView: 2.5,
							},
							1025: {
								slidesPerView: 5,
								// spaceBetween: 200,
							},
						}}
						// onSwiper={setSwiper}
						// navigation={{
						// 	prevEl: '.prev',
						// 	nextEl: '.next',
						// }}
						// slidesPerView={4.2}
						onSlideChange={(swiper) => onSlideChange(swiper)}
					>
						{!loading && !error && products.length > 0 && (
							<ul className={styles.resultsList}>
								{products.slice(0, 5).map((product) => (
									<SwiperSlide key={product.id} className={styles.swiperSlide}>
										<SurveySlide product={product}></SurveySlide>
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

			{/* <button
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
			</button> */}

			{/* <button
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
			</button> */}
		</section>
	);
};

export default SurveySlider;
