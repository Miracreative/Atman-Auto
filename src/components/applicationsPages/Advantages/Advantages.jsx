'use client';

import styles from './Advantages.module.scss';
import applicationData from '@/data/aplicationData';
// import { useState, useEffect } from 'react';
import Link from 'next/link';



export default function Advantages() {
	const { automobileIndustry } = applicationData;
	const section = automobileIndustry.sections[0];

	return (
		<>
			<section className={styles.section}>
				<div className={styles.container}>
					<div className={styles.wrap}>


						<div className={styles.advantages}>
							<div className={styles.innerAdvantages}>
								<div className={styles.content}>
									<h3 className={styles.title}>Преимущества <br /> использования:</h3>

									<ul className={styles.advantagesList}>
										{section.approach.advantages.map((advantage, index) => (

											<li key={index} className={styles.advantagesListItem}>
												<div className={styles.advantagesPoint}>
													{advantage}
												</div>
											</li>

										))}
									</ul>
								</div>
							</div>
						</div>


						<div className={styles.column}>

							<div className={styles.alternative}>
								<div className={styles.innerAlternative}>
									<div className={styles.content}>
										<h3 className={styles.title}>Альтерантивные методы монтажа:</h3>

										<ul className={styles.alternativeList}>
											{section.approach.alternative.map((alternative, index) => (

												<li key={index} className={styles.alternativeListItem}>
													<div className={styles.alternativePoint}>
														{alternative}
													</div>
												</li>

											))}
										</ul>
									</div>
								</div>
							</div>





							<div className={styles.disadvantages}>
								<div className={styles.innerDisadvantages}>
									<div className={styles.content}>
										<h3 className={styles.title}>Недостатки<br /> альтернативных методов:</h3>

										<ul className={styles.disadvantagesList}>
											{section.approach.disadvantages.map((disadvantage, index) => (

												<li key={index} className={styles.disadvantagesListItem}>
													<div className={styles.disadvantagesPoint}>
														{disadvantage}
													</div>
												</li>

											))}
										</ul>
									</div>
								</div>
							</div>

						</div>









					</div>
				</div>
			</section>
		</>
	);
}


