'use client';

import styles from './ProductsSlider.module.scss';
import Link from 'next/link';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';
import { Controller } from 'swiper/modules';
import GoodsCardFavourite from '@/components/GoodsCardFavourite/GoodsCardFavourite.jsx';

import decisionsSliderData from '@/data/decisionsSliderData.jsx';



import { useState, useEffect } from 'react';
import axios from 'axios';



export default function ProductsSlider() {

	const decisionsData = decisionsSliderData;

	const [canGoPrev, setCanGoPrev] = useState(false);
	const [canGoNext, setCanGoNext] = useState(true);


	const [swiper, setSwiper] = useState(null);






	const [goodsData, setGoodsData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const fetchData = async () => {
		try {
			const response = await axios.get(`${process.env.HOST}/api/afoam`);
			setGoodsData(response.data);
		} catch (err) {
			setError(err.message);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);


	// console.log(goodsData);




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
			{loading ? (
				<div></div>
			) : (
				<section className={styles.section}>
					<div className={styles.sectionInner}>

						<div className={styles.verticalLine}></div>
						<div className='container'>

							<div className={styles.wrap}>





								<div className={styles.titleWrap}>
									<h2 className={styles.title}> <span>Товары </span><br />  </h2>

									<Link className={styles.link} href='/goods'>
										<div className={styles.linkText}  >
											Все товары
										</div>
									</Link>
								</div>




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
										onSwiper={setSwiper}
										navigation={{
											prevEl: '.prev',
											nextEl: '.next',
										}}


										spaceBetween={20}
										slidesPerView={4.2}
										onSlideChange={(swiper) => onSlideChange(swiper)}
									>

										{goodsData && goodsData.map((item, index) => (
											<SwiperSlide key={item.id} className={styles.swiperSlide}>
												{/* <Link className={styles.imgWrap} href={item[index].href}> */}

												<GoodsCardFavourite
													id={item.id}
													name={item.name}
													description={item.description} >

												</GoodsCardFavourite>


												{/* </Link> */}

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


								<Link className={styles.linkMobile} href='/applications'>
									<div className={styles.linkTextMobile}  >
										Все товары
									</div>
								</Link>

							</div>


						</div>

					</div>

				</section>
			)}
		</>
	);
}