'use client';

import styles from './TitleNavigation.module.scss';
import applicationData from '@/data/aplicationData';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';



export default function TitleNavigation({ applicationIndustry, currentIndex, onNavClick }) {


	// const { namePage } = applicationData;
	// const { transport } = applicationData;
	// const section = automobileIndustry.sections[0];
	const [isMobileNavActive, setIsMobileNavActive] = useState(false);

	const handleMobileNavClick = () => {
		setIsMobileNavActive(!isMobileNavActive);
	};

	const handleOutsideClick = (event) => {
		if (!event.target.closest(`.${styles.navMobileNavigation}`)) {
			setIsMobileNavActive(false);
		}
	};

	useEffect(() => {
		document.addEventListener('click', handleOutsideClick);
		return () => {
			document.removeEventListener('click', handleOutsideClick);
		};
	}, [isMobileNavActive]);

	return (
		<>
			<section className={styles.section}>
				<div className={styles.container}>
					<div className={styles.wrap}>

						<div className={styles.content}>
							<Image
								className={styles.img}
								src={applicationIndustry.image}
								alt="img"
								width={862}
								height={500} />

							<div className={styles.innerContent}>

								<div className={styles.breadCrumbs}>хлебные крошки == еще больше крошек</div>

								<div className={styles.titlePage}>
									{applicationIndustry.title}
								</div>

								<Image
									className={styles.imgMobile}
									src={applicationIndustry.imageMobile}
									alt="img"
									width={320}
									height={170} />

								<div className={styles.description}>
									{applicationIndustry.description}
								</div>
							</div>


						</div>


						<div className={styles.navBar}>

							{applicationIndustry.sections.map((variation, index) => (
								<button key={index} className={`${styles.navBtn} ${currentIndex === index ? styles.active : ''}`} onClick={() => onNavClick(index)}>
									{variation.section}
								</button>
							))}
						</div>




						<div className={styles.navMobileNavigation}>

							<button
								onClick={handleMobileNavClick} className={styles.btnNavMobile}> {applicationIndustry.sections[currentIndex].section}

							</button>

							<ul className={`${styles.mobileNavBar} ${isMobileNavActive ? styles.activeMobileList : ''}`}>

								{applicationIndustry.sections.map((variation, index) => (
									<button key={index}
										className={`${styles.mobileNavBar} ${isMobileNavActive ? styles.activeMobileList : ''}`}
										onClick={() => onNavClick(index)}>
										{variation.section}
									</button>
								))}

							</ul>

						</div>


					</div>
				</div>
			</section>
		</>
	);
}


