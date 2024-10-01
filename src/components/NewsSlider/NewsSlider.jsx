'use client';

import styles from './NewsSlider.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, A11y } from 'swiper/modules';
import newsData from '@/data/newsData';
import Link from 'next/link';
import { Controller } from 'swiper/modules';




import { useState, useEffect, useRef } from 'react';





export default function NewsSlider() {

	const newsDate = newsData;

	// const [swiperInstance, setSwiperInstance] = useState(null);
	const [canGoPrev, setCanGoPrev] = useState(false);
	const [canGoNext, setCanGoNext] = useState(true);


	const [firstSwiper, setFirstSwiper] = useState(null);
	const [secondSwiper, setSecondSwiper] = useState(null);




	const onSlideChange = (swiper) => {
		const isBeginning = swiper.isBeginning;
		const isEnd = swiper.isEnd;

		setCanGoPrev(!isBeginning);
		setCanGoNext(!isEnd);
	};



	const goToPrevSlide = () => {
		if (firstSwiper) {
			firstSwiper.slidePrev();

		}
	};

	const goToNextSlide = () => {
		if (firstSwiper) {
			firstSwiper.slideNext();

		}
	};





	return (
		<>
			<section className={styles.section}>
				<div className={styles.sectionInner}>

					<div className={styles.verticalLine}></div>
					<div className='container'>
						<div className={styles.wrap}>

							<div className={styles.header}>
								<h2 className={styles.title}> Новости </h2>

								<Link className={styles.link} href='/news'>
									<div className={styles.linkText}  >
										Все новости
									</div>
								</Link>
							</div>




							<div className={styles.swiperContainer}>

								<Swiper
									wrapperClass={styles.swiperWrapper}
									className={styles.swiper}
									modules={[Navigation, Scrollbar, A11y, Controller]}

									controller={{ control: secondSwiper }}
									breakpoints={{
										0: {
											slidesPerView: 1.1,
											spaceBetween: 10,
										},
										576: {
											slidesPerView: 1.5,
											spaceBetween: 10,
										},
										768: {
											slidesPerView: 2.1,
										},
									}}
									onSwiper={setFirstSwiper}
									navigation={{
										prevEl: '.prev',
										nextEl: '.next',
									}}


									spaceBetween={20}
									slidesPerView={2.1}
									onSlideChange={(swiper) => onSlideChange(swiper)}
								>

									{newsDate.map((item, index) => (
										<SwiperSlide key={item.id} className={styles.swiperSlideOne}>
											<div className={styles.imgWrap}>
												<img src={item.src} alt={item.title} />
											</div>


											{/* <div className={styles.titleCard}> {item.title} </div>

										<div className={styles.description}> {item.description} </div> */}

										</SwiperSlide>
									))}




								</Swiper>
								{/* <SwiperNavButtouns /> */}


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






							<Swiper
								wrapperClass={styles.swiperWrapper}
								className={styles.swiperBottom}
								modules={[Navigation, Scrollbar, A11y, Controller]}
								onSwiper={setSecondSwiper}
								onSlideChange={(swiper) => onSlideChange(swiper)}


								controller={{ control: firstSwiper }}
								breakpoints={{
									0: {
										slidesPerView: 1.1,
										spaceBetween: 10,
									},
									576: {
										slidesPerView: 1.5,
										spaceBetween: 10,
									},
									768: {
										slidesPerView: 2.1,
									},
								}}

								spaceBetween={20}
								slidesPerView={2.1}
							>
								{newsDate.map((item, index) => (
									<SwiperSlide key={item.id} className={styles.swiperSlideTwo}>
										<div className={styles.titleCard}>{item.title}</div>
										<div className={styles.description}>{item.description}</div>
									</SwiperSlide>
								))}
							</Swiper>

							<Link className={styles.linkMobile} href='/news'>
								<div className={styles.linkTextMobile}  >
									Все новости
								</div>
							</Link>


						</div>
					</div>

				</div>

			</section>
		</>
	);
}