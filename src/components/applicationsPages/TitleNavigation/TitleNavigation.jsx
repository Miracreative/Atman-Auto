'use client';

import styles from './TitleNavigation.module.scss';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Breadcrumbs } from '@/components/Breadcrumbs/Breadcrumbs.tsx';


export default function TitleNavigation({ applicationIndustry, currentIndex, onNavClick, breadcrumbs }) {

	const [isMobileNavActive, setIsMobileNavActive] = useState(false);

	const handleMobileNavClick = () => {
		setIsMobileNavActive(!isMobileNavActive);
	};

	const handleOutsideClick = (event) => {
		if (!event.target.closest(`.${styles.navMobileContainer}`)) {
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
								height={500}
								priority={true}
							/>

							<div className={styles.innerContent}>

								<div className={styles.breadCrumbs}>
									<Breadcrumbs items={breadcrumbs} />
								</div>

								<div className={styles.titlePage}>
									{applicationIndustry.title}
								</div>

								<Image
									className={styles.imgMobile}
									src={applicationIndustry.imageMobile}
									alt="img"
									width={320}
									height={170}
									priority={true}
								/>

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
							<div className={styles.navMobileContainer}>

								<button
									className={styles.btnNavMobile} onClick={handleMobileNavClick} >
									{applicationIndustry.sections[currentIndex].section}

									<svg width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M6.37622 8.40688C5.99629 9.09766 5.00371 9.09766 4.62378 8.40688L0.815055 1.48192C0.448506 0.815466 0.930668 9.12994e-07 1.69127 8.79746e-07L9.30873 5.46777e-07C10.0693 5.1353e-07 10.5515 0.815466 10.1849 1.48192L6.37622 8.40688Z" fill="white" />
									</svg>


								</button>

								<ul className={`${styles.mobileNavBar} ${isMobileNavActive ? styles.activeMobileList : ''}`}>

									{applicationIndustry.sections.map((variation, index) => (
										<li
											onClick={() => {
												handleMobileNavClick();
												onNavClick(index)
											}}
											key={index}
											className={`${styles.mobileWrapBtn} ${currentIndex === index ? styles.checked : ''}`}>


											<a
												// className={`${styles.navMobileBtn} ${isMobileNavActive ? styles.activeMobileList : ''}`}
												className={styles.navMobileBtn}
											>
												{variation.section}
											</a>

										</li>

									))}

								</ul>

							</div>



						</div>


					</div>
				</div>
			</section>
		</>
	);
}


