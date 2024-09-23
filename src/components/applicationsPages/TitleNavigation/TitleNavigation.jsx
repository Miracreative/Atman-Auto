// 'use client';

import styles from './TitleNavigation.module.scss';
import applicationData from '@/data/aplicationData';
// import { useState, useEffect } from 'react';
import Link from 'next/link';



export default function TitleNavigation({ applicationIndustry, onNavClick }) {


	// const { namePage } = applicationData;
	// const { transport } = applicationData;
	// const section = automobileIndustry.sections[0];

	return (
		<>
			<section className={styles.section}>
				<div className={styles.container}>
					<div className={styles.wrap}>

						<div className={styles.content}>
							<img className={styles.img} src={applicationIndustry.image} alt="img" />

							<div className={styles.innerContent}>

								<div className={styles.breadCrumbs}>хлебные крошки == еще больше крошек</div>

								<div className={styles.titlePage}>
									{applicationIndustry.title}
								</div>

								<div className={styles.description}>
									{applicationIndustry.description}
								</div>
							</div>


						</div>


						<div className={styles.navBar}>

							{applicationIndustry.sections.map((variation, index) => (
								<div key={index} className={styles.navBtn} onClick={() => onNavClick(index)}>
									{variation.section}
								</div>
							))}
						</div>




					</div>
				</div>
			</section>
		</>
	);
}


