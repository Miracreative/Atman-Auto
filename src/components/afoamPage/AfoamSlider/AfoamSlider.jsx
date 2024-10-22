import styles from './AfoamSlider.module.scss';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, A11y, Pagination } from 'swiper/modules';

export default function AfoamSlider() {
	return (
		<>
			<section className={styles.section}>
				<div className='container'>
					<div className={styles.wrap}>
						<div className={styles.innerWrap}>
							<div className={styles.afoamTitle}>
								<Image
									className={styles.imgAfoam}
									src='/about/Afoam/afoam.png'
									width={1068}
									height={212}
									alt='Afoam'
								/>
							</div>

							<div className={styles.subTitle}>

							</div>

						</div>
					</div>
				</div>
			</section>
		</>
	);
}