'use client';

import styles from './SliderAplications.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, A11y } from 'swiper/modules';




import { useState, useEffect } from 'react';





export default function SliderAplications({ applicationIndustry, currentIndex }) {

	const [swiperInstance, setSwiperInstance] = useState(null);
	const [canGoPrev, setCanGoPrev] = useState(false);
	const [canGoNext, setCanGoNext] = useState(true);


	useEffect(() => {
		if (swiperInstance) {
			swiperInstance.slideTo(0);
		}
		setCanGoNext(applicationIndustry.sections[currentIndex].slider.images.length > 3);
	}, [applicationIndustry, currentIndex]);

	const onSlideChange = () => {

		const swiper = swiperInstance;
		const isBeginning = swiper.isBeginning;
		const isEnd = swiper.isEnd;

		setCanGoPrev(!isBeginning);
		setCanGoNext(!isEnd);

	};

	const onSwiper = (swiper) => {
		setSwiperInstance(swiper);
	};

	const goToPrevSlide = () => {
		if (swiperInstance) {
			swiperInstance.slidePrev();

		}
	};

	const goToNextSlide = () => {
		if (swiperInstance) {
			swiperInstance.slideNext();

		}
	};



	return (
		<>
			<section className={styles.section}>
				<div className='container'>
					<div className={styles.wrap}>

						<h2 className={styles.title}> {applicationIndustry.sections[currentIndex].slider.titleSlider} </h2>

						<div className={styles.description}> {applicationIndustry.sections[currentIndex].slider.description} </div>



						<div className={styles.swiperContainer}>

							<Swiper

								breakpoints={{
									0: {
										slidesPerView: 1.5,

									},
									576: {
										slidesPerView: 2.5,
									},
									768: {
										slidesPerView: 3,
									},
								}}
								onSwiper={onSwiper}
								navigation={{
									prevEl: '.prev',
									nextEl: '.next',
								}}
								wrapperClass={styles.swiperWrapper}
								className={styles.swiper}
								modules={[Navigation, Scrollbar, A11y]}
								spaceBetween={20}
								slidesPerView={3}
								onSlideChange={() => onSlideChange()}
							>

								{applicationIndustry.sections[currentIndex].slider.images.map((item, index) => (
									<SwiperSlide key={index} className={styles.swiperSlide}>
										<img src={item.src} alt={item.title} />

									</SwiperSlide>
								))}




							</Swiper>


							<button className={styles.prevBtn} onClick={goToPrevSlide} disabled={!canGoPrev}>

								<svg width="30" height="12" viewBox="0 0 30 12" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M30 5.99989L20 0.226425L20 11.7734L30 5.99989ZM3.63191e-06 7L21 6.99992L21 4.99992L-3.63191e-06 5L3.63191e-06 7Z" fill="white" />
								</svg>


							</button>


							<button className={styles.nextBtn} onClick={goToNextSlide} disabled={!canGoNext}>

								<svg width="30" height="12" viewBox="0 0 30 12" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M30 5.99989L20 0.226425L20 11.7734L30 5.99989ZM3.63191e-06 7L21 6.99992L21 4.99992L-3.63191e-06 5L3.63191e-06 7Z" fill="white" />
								</svg>


							</button>

						</div>




					</div>
				</div>
			</section>
		</>
	);
}