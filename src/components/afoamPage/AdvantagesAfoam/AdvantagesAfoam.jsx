import styles from './AdvantagesAfoam.module.scss';
import { useState, useEffect, useLayoutEffect } from 'react';


export default function AdvantagesAfoam({ advantages }) {
	const data = advantages;
	useEffect(() => {
		console.log('data', advantages)
	}, [])
	

	return (
		<>
			<section className={styles.section}>
				<div className={styles.container}>
					<div className={styles.wrap}>



						<div className={styles.innerAdvantages}>



							<h3 className={styles.title}>Преимущества <br className={styles.br} /> использования:</h3>

							<ul className={styles.advantagesList}>
								{data && data.map((advantage, index) => (

									<li key={index} className={styles.advantagesListItem}>
										<div className={styles.advantagesPoint}>
											{advantage.advantages.join(', ')}
											{/* sada */}
										</div>
									</li>

								))}
							</ul>



						</div>



					</div>
				</div>
			</section>
		</>
	);
}


