'use client';

import styles from './Decisions.module.scss';
import Link from 'next/link';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';
import { Controller } from 'swiper/modules';

import decisionsSliderData from '@/data/decisionsSliderData.jsx';



import { useState } from 'react';



export default function Decisions() {

	const decisionsData = decisionsSliderData;

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

						<div className={styles.topWrapper}>

							<div className={styles.headerContainer}>

								<Link className={styles.headerLink} href="/applications/automobile-industry">

									<Image
										src="/ApplicationsContent/avto.png"
										alt="img"
										className={styles.img}
										width={1040}
										height={600}

									/>

									<Image
										src="/ApplicationsContent/avto-hover.png"
										alt="img"
										className={styles.img}
										width={1040}
										height={600}

									/>

								</Link>

								<div className={styles.titleWrap}>
									<h2 className={styles.title}> <span>Решения </span><br /> по отраслям </h2>

									<Link className={styles.link} href='/applications'>
										<div className={styles.linkText}  >
											Все решения
										</div>
									</Link>
								</div>
							</div>

							<div className={styles.titleCard}>Автомобильная промышленность</div>

						</div>

						<div className={styles.wrap}>







							<div className={styles.swiperContainer}>

								<Swiper
									wrapperClass={styles.swiperWrapper}
									className={styles.swiper}
									modules={[Navigation, A11y, Controller]}

									controller={{ control: secondSwiper }}
									breakpoints={{
										0: {
											slidesPerView: 1.1,
											spaceBetween: 10,
										},
										576: {
											slidesPerView: 2.2,
											spaceBetween: 10,
										},
										768: {
											slidesPerView: 2.5,
											spaceBetween: 10,
										},
										1024: {
											slidesPerView: 4.2,
										},
									}}
									onSwiper={setFirstSwiper}
									navigation={{
										prevEl: '.prev',
										nextEl: '.next',
									}}


									spaceBetween={20}
									slidesPerView={4.2}
									onSlideChange={(swiper) => onSlideChange(swiper)}
								>

									{decisionsData.map((item) => (
										<SwiperSlide key={item.id} className={styles.swiperSlideOne}>
											<Link className={styles.imgWrap} href={item.href}>

												<Image
													src={item.image}
													alt="img"
													className={styles.img}
													width={415}
													height={490}

												/>


												<Image
													src={item.imageHover}
													alt="img"
													className={styles.img}
													width={415}
													height={490}

												/>

											</Link>


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






							<Swiper
								wrapperClass={styles.swiperWrapper}
								className={styles.swiperBottom}
								modules={[Navigation, A11y, Controller]}
								onSwiper={setSecondSwiper}
								onSlideChange={(swiper) => onSlideChange(swiper)}


								controller={{ control: firstSwiper }}
								breakpoints={{
									0: {
										slidesPerView: 1.1,
										spaceBetween: 10,
									},
									576: {
										slidesPerView: 2.2,
										spaceBetween: 10,
									},
									768: {
										slidesPerView: 2.5,
										spaceBetween: 10,
									},
									1024: {
										slidesPerView: 4.2,
									},
								}}

								spaceBetween={20}
								slidesPerView={4.2}
							>
								{decisionsData.map((item) => (
									<SwiperSlide key={item.id} className={styles.swiperSlideTwo}>
										<div className={styles.titleCard}>{item.title}</div>
									</SwiperSlide>
								))}
							</Swiper>






						</div>


						<div className={styles.mobileContent}>
							{decisionsData.map((item) => (
								<Link key={item.id} className={styles.mobileSlide} href={item.href}>


									<div className={styles.imgMobileWrap} >

										<Image
											src={item.imageHover}
											alt="img"
											className={styles.imgMobile}
											width={145}
											height={170}

										/>


									</div>
									<div className={styles.titleMobile}>{item.title}</div>
								</Link>
							))}
						</div>


					</div>

				</div>

			</section>
		</>
	);
}