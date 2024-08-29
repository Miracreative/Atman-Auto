import styles from './Algorithm.module.scss';
import Image from 'next/image';


export default function Algorithm() {
	return (
		<>
			<section className={styles.section}>
				<div className="container">

					<div className={styles.wrap}>
						<div className={styles.innerWrap}>
							<h3 className={styles.title}>
								Алгоритм <br className={styles.br} /> <span> работы</span>
							</h3>
							<div className={styles.content}>
								<div className={styles.row}>

									<div className={styles.card} id={styles.card1}>
										<div className={styles.arrow}>
											<Image
												className={styles.arrowImg}
												src="/about/Algorithm/arrow.png"
												alt="arrow"
												width={30}
												height={12}
											/>
										</div>
										<div className={styles.cardInner}>
											<div className={styles.headerCard}>
												<div className={styles.number}>01</div>
												<div className={styles.titleCard}>Изучаем задачи <br /> потребителя</div>
											</div>

											<div className={styles.textCard}>Мы исследуем задачи потребителя, определяем тип склеиваемых поверхностей, изучаем требования к продукту его среде экспуатации. Оцениваем среду совершения монтажа и квалификацию персонала.</div>
										</div>
									</div>

									<div className={styles.card} id={styles.card2}>
										<div className={styles.arrow}>
											<Image
												className={styles.arrowImg}
												src="/about/Algorithm/arrow.png"
												alt="arrow"
												width={30}
												height={12}
											/>
										</div>
										<div className={styles.cardInner}>
											<div className={styles.headerCard}>
												<div className={styles.number}>02</div>
												<div className={styles.titleCard}>Разрабатываем <br /> решение</div>
											</div>

											<div className={styles.textCard}>Подбираем материалы и технологию их нанесения для сокращения времени монтажа, повышения качества вашей продукции и продолжительной эксплуатации.</div>
										</div>
									</div>

									<div className={styles.imgWrap}>
										<Image
											className={styles.img}
											src="/about/Algorithm/Algorithm-img.png"
											alt="img"
											width={436}
											height={352}
										/>
									</div>
								</div>


								<div className={styles.row}>

									<div className={styles.imgWrap}>
										<Image
											className={styles.img}
											src="/about/Algorithm/Algorithm-img2.png"
											alt="img"
											width={436}
											height={352}
										/>
									</div>

									<div className={styles.card} id={styles.card3}>
										<div className={styles.arrow} id={styles.arrow3}>
											<Image
												className={styles.arrowImg}
												src="/about/Algorithm/arrow.png"
												alt="arrow"
												width={30}
												height={12}
											/>
										</div>
										<div className={styles.cardInner}>
											<div className={styles.headerCard}>
												<div className={styles.number}>03</div>
												<div className={styles.titleCard}>Проектируем <br /> и производим</div>
											</div>

											<div className={styles.textCard}>Проектируем конструкцию и внешний вид поставки. Согласовываем, Производим, Контролируем качество.</div>
										</div>
									</div>

									<div className={styles.card} id={styles.card4}>
										<div className={styles.arrow} id={styles.arrow4}>
											<Image
												className={styles.arrowImg}
												src="/about/Algorithm/arrow.png"
												alt="arrow"
												width={30}
												height={12}
											/>
										</div>
										<div className={styles.cardInner}>
											<div className={styles.headerCard}>
												<div className={styles.number}>04</div>
												<div className={styles.titleCard}>Заботимся <br /> о потребителе</div>
											</div>

											<div className={styles.textCard}>Обеспечиваем бесперебойную поставку , Создаем запасы, Контролируем изменения.</div>
										</div>
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