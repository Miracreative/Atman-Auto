'use client';

import "swiper/css";
import "swiper/css/pagination";
import styles from './Team.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, A11y, Pagination } from 'swiper/modules';
import axios from 'axios';

import { useState, useEffect } from 'react';

// const data = [
// 	{
// 		"name": "Павел Демин",
// 		"descr": "Руководитель отдела оптовых продаж (потребительские товары упакованные для рынка DIY):",
// 		"tel": "8-999-999-99-99",
// 		"email": "p.demin@atman-auto.ru",
// 		"id": "1",
// 		"src": "/team/team1.jpg",
// 	},
// 	{
// 		"name": "Петров Роман",
// 		"descr": "",
// 		"tel": "8-999-999-99-99",
// 		"email": "email 2",
// 		"id": "2",
// 		"src": "/team/team2.jpg",

// 	},
// 	{
// 		"name": "Акимкин Максим",
// 		"descr": "Директор",
// 		"tel": "8-999-999-99-99",
// 		"email": "email 3",
// 		"id": "3",
// 		"src": "/team/team3.jpg",

// 	},
// 	{
// 		"name": "Елена Аббасова",
// 		"descr": "менеджер по закупкам",
// 		"tel": "8-999-999-99-99",
// 		"email": "email 4",
// 		"id": "4",
// 		"src": "/team/team4.jpg",

// 	},
// 	{
// 		"name": "Ирина Грушина",
// 		"descr": "Менеджер СМК",
// 		"tel": "8-999-999-99-99",
// 		"email": "email 5",
// 		"id": "5",
// 		"src": "/team/team5.jpg",

// 	},
// 	{
// 		"name": "Зайкина Светлана",
// 		"descr": "менеджер по работе с клиентами.",
// 		"tel": "8-999-999-99-99",
// 		"email": "email 6",
// 		"id": "6",
// 		"src": "/team/team6.jpg",

// 	},
// 	{
// 		"name": "Сергей Сатаров",
// 		"descr": "Коммерческий директор",
// 		"tel": "8-999-999-99-99",
// 		"email": "email 7",
// 		"id": "7",
// 		"src": "/team/team7.jpg",

// 	}
// ]

export default function Team() {

	const [team, setTeam] = useState([]);
	const [error, setError] = useState(null);
	const [swiper, setSwiper] = useState(null);

	const fetchLastNews = async () => {
		try {
			const response = await axios.get(`${process.env.HOST}/api/person`);
			setTeam(response.data);
		} catch (err) {
			setError(err.message);
		}
	};

	useEffect(() => {
		fetchLastNews();
	}, []);




	return <section className={styles.section}>
		<div className='container'>
			<div className={styles.contentWrap}>

				<div className={styles.content}>
					<div className={styles.title}>Команда</div>



					<Swiper
						wrapperClass={styles.swiperWrapper}
						className={styles.swiper}
						modules={[Navigation, Scrollbar, A11y, Pagination]}
						breakpoints={{
							0: {
								slidesPerView: 2,
							},
							576: {
								slidesPerView: 2,

							},
							768: {
								slidesPerView: 3,
							},
							1350: {
								slidesPerView: 4,
							},
							1600: {
								slidesPerView: 4,
							},
						}}
						onSwiper={setSwiper}
						pagination={{
							dynamicBullets: true,
							clickable: true,
							bulletClass: styles.bullet,
							bulletActiveClass: styles.bulletActive,
							horizontalClass: styles.paginationWrap,
						}}

						// spaceBetween={10}
						slidesPerView={4}

					>

						{team.map((item) => (
							<SwiperSlide key={item.id} className={styles.swiperSlide}>

								<div className={styles.cardItem}>
									<div className={styles.photo}>
										<Image
											className={styles.photoItem}
											src={`${process.env.HOST}/${item.imagesrc}`}
											alt="team photo"
											width={350}
											height={350}
										/>
									</div>

									<div className={styles.textContainer}>
										<div className={styles.name}> {item.name} </div>
										<div className={styles.position}> {item.descr} </div>
										<div className={styles.whatsApp}>
											<span className={styles.desktopSpan}>WhatsApp: </span>
											<Link
												href={`https://wa.me/${item.watsapp}`}
												target="_blank"
												rel="noopener noreferrer"
											>
												{item.watsapp}
											</Link>
										</div>

										<div className={styles.mail}>
											<span className={styles.desktopSpan}>Mail: </span>
											<Link
												href={`mailto: ${item.email}`}
											>
												{item.email}
											</Link>
										</div>
									</div>
								</div>

							</SwiperSlide>
						))}



					</Swiper>




				</div>


			</div>

		</div>
	</section>;

}
