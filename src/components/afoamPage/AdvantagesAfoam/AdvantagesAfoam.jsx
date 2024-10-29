import styles from './AdvantagesAfoam.module.scss';



export default function AdvantagesAfoam({ advantages }) {
	const data = advantages;



	return (
		<>
			<section className={styles.section}>
				<div className={styles.container}>
					<div className={styles.wrap}>



						<div className={styles.innerAdvantages}>



							<h3 className={styles.title}>Преимущества <br className={styles.br} /> использования:</h3>

							<ul className={styles.advantagesList}>
								{data.map((advantage, index) => (

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
			</section>
		</>
	);
}


