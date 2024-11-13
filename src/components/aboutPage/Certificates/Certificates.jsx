'use client';

import styles from './Certificates.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, A11y } from 'swiper/modules';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import axios from 'axios';





export default function Certificates() {


	const [certificatesData, setCertificatesData] = useState([]);
	const [error, setError] = useState(null);

	const fetchCertificates = async () => {
		try {
			const response = await axios.get(`${process.env.HOST}/api/sertificate`);
			setCertificatesData(response.data);
		} catch (err) {
			setError(err.message);
		}
	};


	useEffect(() => {
		fetchCertificates();
	}, []);

	return (
		<>
			<section className={styles.section}>
				<div className={styles.verticalLine}></div>

				<div className={styles.container}>
					<div className={styles.wrap}>

						<h2 className={styles.title}>Сертификаты <br /><span> Atman-Auto  </span></h2>

						<div className={styles.swiperContainer}>
							<Swiper
								wrapperClass={styles.swiperWrapper}
								className={styles.swiper}
								modules={[Navigation, Scrollbar, A11y]}
								spaceBetween={20}
								slidesPerView={'auto'}


								breakpoints={{
									0: {
										slidesPerView: 1.5,
										spaceBetween: 10,
									},
									576: {
										slidesPerView: 2.5,

										spaceBetween: 10,
									},
									768: {
										spaceBetween: 20,
									},

								}}

							>



								{certificatesData.map((item, index) => (
									<SwiperSlide key={index} className={styles.swiperSlide} style={{ width: item.type === 'album' ? 525 : 270 }}>

										<Image
											className={styles.cert}
											src={`${process.env.HOST}/${item.imagesrc}`}
											alt='certificate'
											width={item.type === 'album' ? 525 : 270}
											height={384}
											priority={true}
										/>

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