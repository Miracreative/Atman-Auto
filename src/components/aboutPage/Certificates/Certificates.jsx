'use client';

import styles from './Certificates.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, A11y } from 'swiper/modules';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import axios from 'axios';



// const certificates = [
// 	{ cert: '/about/Certificates/cert1.png', type: 'book' },
// 	{ cert: '/about/Certificates/cert2.png', type: 'book' },
// 	{ cert: '/about/Certificates/cert3.png', type: 'book' },
// 	{ cert: '/about/Certificates/cert4.png', type: 'book' },
// 	{ cert: '/about/Certificates/cert5.png', type: 'book' },
// 	{ cert: '/about/Certificates/cert6.png', type: 'album' },
// 	{ cert: '/about/Certificates/cert5.png', type: 'book' },
// 	{ cert: '/about/Certificates/cert6.png', type: 'album' },
// ];



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

	console.log(certificatesData);


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


							// breakpoints={{
							// 	0: {
							// 		slidesPerView: 1.5
							// 	},
							// 	576: {
							// 		slidesPerView: 2.5,
							// 	},
							// 	768: {
							// 		slidesPerView: 4.5,
							// 	},
							// 	1024: {
							// 		slidesPerView: 'auto',
							// 	},
							// }}
							>



								{certificatesData.map((item, index) => (
									<SwiperSlide key={index} className={styles.swiperSlide} style={{ width: item.type === 'album' ? 525 : 270 }}>

										<Image
											className={styles.cert}
											src={item.cert}
											alt='certificate'
											objectFit='cover'
											width={item.type === 'album' ? 525 : 270}
											height={384}
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