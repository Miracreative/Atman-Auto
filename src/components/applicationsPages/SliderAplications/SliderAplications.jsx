'use client';

import styles from './SliderAplications.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, A11y } from 'swiper/modules';
import { useSwiper } from 'swiper/react';



import { useRef, useState, useEffect, useCallback } from 'react';





export default function SliderAplications({ applicationIndustry, currentIndex }) {

	const [swiperInstance, setSwiperInstance] = useState(null);

	const onSwiper = (swiper) => {
		setSwiperInstance(swiper);
	};

	const goToPrevSlide = () => {
		if (swiperInstance) {
			swiperInstance.slidePrev();
			console.log('prev');
		}
	};

	const goToNextSlide = () => {
		if (swiperInstance) {
			swiperInstance.slideNext();
			console.log('next');
		}
	};







	return (
		<>
			<section className={styles.section}>
				<div className='container'>
					<div className={styles.wrap}>

						<h2 className={styles.title}> {applicationIndustry.sections[currentIndex].slider.titleSlider} </h2>

						<div className={styles.description}> {applicationIndustry.sections[currentIndex].slider.description} </div>



						{/* <div className={styles.swiperContainer}> */}

						<Swiper
							// ref={swiperRef}
							// onSwiper={(swiper) => (swiperRef.current = swiper)}

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


						<button className={styles.prevBtn} onClick={goToPrevSlide}>
							Назад
						</button>
						<button className={styles.nextBtn} onClick={goToNextSlide}>
							Вперёд
						</button>

						{/* </div> */}




					</div>
				</div>
			</section>
		</>
	);
}