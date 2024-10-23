import styles from './AdvantagesAfoam.module.scss';
import afoamData from '@/data/afoamData.js';




export default function AdvantagesAfoam({ advantages }) {
	const { automobileIndustry } = applicationData;
	const section = automobileIndustry.sections;



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
										{afoamData.map((advantage, index) => (

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


					</div>
				</div>
			</section>
		</>
	);
}


