'use client';

import styles from './NewsSliderAndContent.module.scss';
import Link from 'next/link';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';
import { Controller } from 'swiper/modules';

import decisionsSliderData from '@/data/decisionsSliderData.jsx';



import { useState, useEffect } from 'react';



export default function NewsSliderAndContent({ imagessrc, content }) {



	const [imgData, setImgData] = useState([]);
	const [isImgDataReady, setIsImgDataReady] = useState(false);

	useEffect(() => {
		setImgData(imagessrc);
		setIsImgDataReady(true);
		setCanGoNext(imagessrc.length > 1);
	}, [imagessrc]);





	const [canGoPrev, setCanGoPrev] = useState(false);
	const [canGoNext, setCanGoNext] = useState(true);


	const [swiper, setSwiper] = useState(null);




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
		<>
			<section className={styles.section}>
				<div className={styles.sectionInner}>

					<div className='container'>

						<div className={styles.wrap}>


							<div className={styles.swiperContainer}>

								<Swiper
									wrapperClass={styles.swiperWrapper}
									className={styles.swiper}
									modules={[Navigation, A11y, Controller]}

									breakpoints={{
										0: {
											slidesPerView: 1.5,
											spaceBetween: 10,
										},
										1024: {
											slidesPerView: 1.5,
										},
									}}
									onSwiper={setSwiper}
									navigation={{
										prevEl: '.prev',
										nextEl: '.next',
									}}


									spaceBetween={20}
									slidesPerView={3}
									onSlideChange={(swiper) => onSlideChange(swiper)}
								>

									{
										imgData && imgData.map((srcImg, index) => (
											<SwiperSlide key={index} className={styles.swiperSlide}>
												<div className={styles.imgWrap} >
													<img
														src={`${process.env.HOST}/${srcImg}`}
														width={300}
														height={300}
														alt="img"
													/>

												</div>

											</SwiperSlide>
										))
									}

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



							<div className={styles.textWrap}>
								{content}
							</div>


						</div>


					</div>

				</div>

			</section>
		</>
	);
}