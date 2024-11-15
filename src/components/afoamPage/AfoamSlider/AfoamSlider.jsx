import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, A11y, Pagination } from 'swiper/modules';
import "swiper/css";
import "swiper/css/pagination";
import styles from './AfoamSlider.module.scss';


export default function AfoamSlider() {

	return (
		<>
			<section className={styles.section}>
				<div className='container'>
					<div className={styles.wrap}>


						<Swiper
							wrapperClass={styles.swiperWrapper}
							className={styles.swiper}

							modules={[Navigation, Scrollbar, A11y, Pagination]}
							slidesPerView={1}
							spaceBetween={20}
							pagination={{
								dynamicBullets: true,
								clickable: true,
								bulletClass: styles.bullet,
								bulletActiveClass: styles.bulletActive,
								horizontalClass: styles.paginationWrap,
							}}

						>

							<SwiperSlide className={styles.swiperSlideOne} >

								<div className={styles.innerWrap}>
									<div className={styles.afoamTitle}>
										<Image
											className={styles.imgAfoam}
											src='/about/Afoam/afoam.png'
											width={482}
											height={96}
											alt='Afoam'
											priority={true}
										/>

									</div>

									<div className={styles.subTitle}>
										Adhesive parts
									</div>

								</div>

							</SwiperSlide>


							<SwiperSlide className={styles.swiperSlideTwo} >

								<div className={styles.innerWrap}>
									<div className={styles.afoamTitle}>
										<Image
											className={styles.imgAfoam}
											src='/afoam/afoam-black.png'
											width={482}
											height={96}
											alt='Afoam'
											priority={true}
										/>


										<Image
											className={styles.imgAfoamMobile}
											src='/about/Afoam/afoam.png'
											width={482}
											height={96}
											alt='Afoam'
											priority={true}
										/>
									</div>

									<div className={styles.subTitle}>
										Anti-squcak self-adhesive rubber pads
									</div>

								</div>

							</SwiperSlide>


						</Swiper>

					</div>
				</div>
			</section>
		</>
	);
}