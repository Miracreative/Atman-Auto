'use client';

import styles from './SliderAplications.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { useSwiper } from 'swiper/react';



import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';



export default function SliderAplications({ applicationIndustry, currentIndex }) {
	const swiperRef = useRef(null);

	const swiper = useSwiper(swiperRef);

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
		<>
			<section className={styles.section}>
				<div className='container'>
					<div className={styles.wrap}>

						<h2 className={styles.title}> {applicationIndustry.sections[currentIndex].slider.titleSlider} </h2>

						<div className={styles.description}> {applicationIndustry.sections[currentIndex].slider.description} </div>


						<Swiper
							ref={swiperRef}
							onSwiper={(swiper) => (swiperRef.current = swiper)}
							navigation={{
								prevEl: '.prev',
								nextEl: '.next',
							}}
							wrapperClass={styles.swiperWrapper}
							className={styles.swiper}
							modules={[Navigation, Scrollbar, A11y]}
							spaceBetween={20}
							slidesPerView={3}
							// scrollbar={{ draggable: true }}
							// onSwiper={(swiper) => console.log(swiper)}
							onSlideChange={() => console.log('slide change')}
						>

							{applicationIndustry.sections[currentIndex].slider.images.map((item, index) => (
								<SwiperSlide key={index} className={styles.swiperSlide}>
									<img src={item.src} alt={item.title} />

								</SwiperSlide>
							))}




						</Swiper>
						{/* <SwiperNavButtouns /> */}


						<button className="prev" onClick={goToPrevSlide}>
							Назад
						</button>
						<button className="next" onClick={goToNextSlide}>
							Вперёд
						</button>



					</div>
				</div>
			</section>
		</>
	);
}