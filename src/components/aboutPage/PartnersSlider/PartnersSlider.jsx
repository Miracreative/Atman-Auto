'use client';

import styles from './PartnersSlider.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, A11y } from 'swiper/modules';




import { useState } from 'react';

const partners = [
	{ logo: '/about/Partners-slider/partner-logo1.png', title: 'Atman-Auto', description: 'We strive to create a sustainable future through innovation in the field of renewable energy' },
	{ logo: '/about/Partners-slider/partner-logo2.png', title: 'Atman-Auto', description: 'We strive to create a sustainable future through innovation in the field of renewable energy' },
	{ logo: '/about/Partners-slider/partner-logo3.png', title: 'Atman-Auto', description: 'We strive to create a sustainable future through innovation in the field of renewable energy' },
	{ logo: '/about/Partners-slider/partner-logo4.png', title: 'Atman-Auto', description: 'We strive to create a sustainable future through innovation in the field of renewable energy' },
	{ logo: '/about/Partners-slider/partner-logo5.png', title: 'Atman-Auto', description: 'We strive to create a sustainable future through innovation in the field of renewable energy' },
	{ logo: '/about/Partners-slider/partner-logo6.png', title: 'Atman-Auto', description: 'We strive to create a sustainable future through innovation in the field of renewable energy' },
	{ logo: '/about/Partners-slider/partner-logo7.png', title: 'Atman-Auto', description: 'We strive to create a sustainable future through innovation in the field of renewable energy' },
];



export default function PartnersSlider() {


	return (
		<>
			<section className={styles.section}>
				<div className={styles.container}>
					<div className={styles.wrap}>

						<h2 className={styles.title}>Партнёры<span> и потребители  </span></h2>

						<div className={styles.swiperContainer}>
							<Swiper
								wrapperClass={styles.swiperWrapper}
								className={styles.swiper}
								modules={[Navigation, Scrollbar, A11y]}
								spaceBetween={20}
								slidesPerView={4.2}


								breakpoints={{
									0: {
										slidesPerView: 1.5,

									},
									576: {
										slidesPerView: 3.3,
									},
									768: {
										slidesPerView: 4.2,
									},
								}}
							>
								{partners.map((item, index) => (
									<SwiperSlide key={index} className={styles.swiperSlide}>
										<div className={styles.slideInner}>

											<div className={styles.imgContainer}>
												<img className={styles.logo} src={item.logo} alt='logo' />
											</div>


											<div className={styles.titleCard}>{item.title}</div>
											<div className={styles.description}>{item.description}</div>
										</div>

									</SwiperSlide>
								))}
							</Swiper>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}