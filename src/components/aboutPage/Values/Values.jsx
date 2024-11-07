import styles from './Values.module.scss';
import Image from 'next/image';


export default function Values() {
	return (
		<>
			<section className={styles.section}>
				<div className="container">
					<div className={styles.verticalLine}></div>
					<div className={styles.wrap}>
						<div className={styles.innerWrap}>
							<h3 className={styles.title}>
								Что делает <br /> нас<span> особенными</span>
							</h3>
							<div className={styles.content}>

								<div className={styles.rowCards}>
									<div className={styles.card}>
										<div className={styles.textContainer}>
											<div className={styles.titleCard}>Опыт</div>
											<div className={styles.textCard}>Высокая экспертиза в области конвертинга клейких лент и самоклеящихся материалов.</div>
										</div>
										<Image
											src="/about/Values/values-icon.png"
											alt="value-icon"
											className={styles.img}
											width={120}
											height={120}
											priority={true}
										/>
									</div>

									<div className={styles.card}>
										<div className={styles.textContainer}>
											<div className={styles.titleCard}>Надежность</div>
											<div className={styles.textCard}>Мы знаем что наши клиенты расчитывают на нас. Мы работаем для вашего процветания.</div>
										</div>
										<Image
											src="/about/Values/values-icon2.png"
											alt="value-icon"
											className={styles.img}
											width={120}
											height={120}
											priority={true}
										/>
									</div>
								</div>

								<div className={styles.rowCards}>
									<div className={styles.card}>
										<div className={styles.textContainer}>
											<div className={styles.titleCard}>Индивидуальный подход</div>
											<div className={styles.textCard}>Гибкие условия сотрудничества для продолжительных отношений.</div>
										</div>
										<Image
											src="/about/Values/values-icon3.png"
											alt="value-icon"
											className={styles.img}
											width={120}
											height={120}
											priority={true}
										/>
									</div>

									<div className={styles.card}>
										<div className={styles.textContainer}>
											<div className={styles.titleCard}>Индивидуальные решения</div>
											<div className={styles.textCard}>Мы разрабатываем решение адаптированное к вашему применению.</div>
										</div>
										<Image
											src="/about/Values/values-icon4.png"
											alt="value-icon"
											className={styles.img}
											width={120}
											height={120}
											priority={true}
										/>
									</div>
								</div>

								<div className={styles.rowCards}>
									<div className={styles.card}>
										<div className={styles.textContainer}>
											<div className={styles.titleCard}>Приверженость к качеству</div>
											<div className={styles.textCard}>Процессы организации соответствую требованиям стандартов: ISO 9001: 2015 / ГОСТ Р 58139:2018 / IATF 16949</div>
										</div>
										<Image
											src="/about/Values/values-icon5.png"
											alt="value-icon"
											className={styles.img}
											width={120}
											height={120}
											priority={true}
										/>
									</div>

									<div className={styles.card}>
										<div className={styles.textContainer}>
											<div className={styles.titleCard}>Отвественность</div>
											<div className={styles.textCard}>Мы действуем честно и стремимся к социальной ответственности, укрепляя доверие.</div>
										</div>
										<Image
											src="/about/Values/values-icon6.png"
											alt="value-icon"
											className={styles.img}
											width={120}
											height={120}
											priority={true}
										/>
									</div>
								</div>


							</div>
						</div>
					</div>


				</div>
			</section>
		</>
	)
}