import styles from './ApplicationsContent.module.scss';
import Image from 'next/image';
import Link from 'next/link';


export default function ApplicationsContent() {
	return (
		<>
			<section className={styles.section}>
				<div className="container">

					<div className={styles.wrap}>

						<div className={styles.card}>
							<div className={styles.imgWrap}>
								<Image
									src="/ApplicationsContent/avto.png"
									alt="img"
									className={styles.img}
									width={860}
									height={600}
									priority='true'
								/>
								<Image
									src="/ApplicationsContent/avto-hover.png"
									alt="img"
									className={styles.img}
									width={860}
									height={600}
									priority='true'
								/>
							</div>
							<div className={styles.contentCard}>
								<div className={styles.innerContainer}>
									<h4 className={styles.title}>Автомобильная<br /><span> промышленность</span> </h4>
									<div className={styles.text}>Ежедневные экстремальные условия эксплуатации автомобиля (вибрация, дорожные реагенты, перепады температур и т.д.) и требования к безопасности водителя и пассажиров, заставляют автопроизводителей использовать высококачественные материалы и клеевые решения.</div>

									<div className={styles.btnWrap}>
										<Link href="/applications/automobile-industry" className={styles.btn}>Подробнее</Link>
									</div>
								</div>
							</div>
						</div>

						<div className={styles.card}>
							<div className={styles.imgWrap}>

								<Image
									src="/ApplicationsContent/appliances.png"
									alt="img"
									className={styles.img}
									width={860}
									height={600}
								/>
								<Image
									src="/ApplicationsContent/appliances-hover.png"
									alt="img"
									className={styles.img}
									width={860}
									height={600}
								/>
							</div>
							<div className={styles.contentCard}>
								<div className={styles.innerContainer}>
									<h4 className={styles.title}>Производство <br /><span>бытовой техники</span> </h4>
									<div className={styles.text}>Мы предлагаем продукцию для различных отраслей промышленности. Наши клейкие ленты и технические пены могут предложить индивидуальные решения практически для любого типа отрасли.</div>

									<div className={styles.btnWrap}>
										<Link href="/applications/manufacture-of-household-appliances" className={styles.btn}>Подробнее</Link>
									</div>

								</div>
							</div>
						</div>

						<div className={styles.card}>
							<div className={styles.imgWrap}>

								<Image
									src="/ApplicationsContent/furniture.png"
									alt="img"
									className={styles.img}
									width={860}
									height={600}
								/>
								<Image
									src="/ApplicationsContent/furniture-hover.png"
									alt="img"
									className={styles.img}
									width={860}
									height={600}
								/>
							</div>
							<div className={styles.contentCard}>
								<div className={styles.innerContainer}>
									<h4 className={styles.title}>Мебельная<br /><span>промышленность</span></h4>
									<div className={styles.text}>Мы предлагаем продукцию для различных отраслей промышленности. Наши клейкие ленты и технические пены могут предложить индивидуальные решения практически для любого типа отрасли.</div>

									<div className={styles.btnWrap}>
										<Link href="/applications/furniture-industry" className={styles.btn}>Подробнее</Link>
									</div>

								</div>
							</div>
						</div>

						<div className={styles.card}>
							<div className={styles.imgWrap}>
								<Image
									src="/ApplicationsContent/electronics.png"
									alt="img"
									className={styles.img}
									width={860}
									height={600}
								/>
								<Image
									src="/ApplicationsContent/electronics-hover.png"
									alt="img"
									className={styles.img}
									width={860}
									height={600}
								/>
							</div>
							<div className={styles.contentCard}>
								<div className={styles.innerContainer}>
									<h4 className={styles.title}>Производство <br /> <span>электроники</span></h4>
									<div className={styles.text}>Мы предлагаем продукцию для различных отраслей промышленности. Наши клейкие ленты и технические пены могут предложить индивидуальные решения практически для любого типа отрасли.</div>

									<div className={styles.btnWrap}>
										<Link href="/applications/electronics-manufacturing" className={styles.btn}>Подробнее</Link>
									</div>

								</div>
							</div>
						</div>

						<div className={styles.card}>
							<div className={styles.imgWrap}>
								<Image
									src="/ApplicationsContent/build.png"
									alt="img"
									className={styles.img}
									width={860}
									height={600}
								/>
								<Image
									src="/ApplicationsContent/build-hover.png"
									alt="img"
									className={styles.img}
									width={860}
									height={600}
								/>
							</div>
							<div className={styles.contentCard}>
								<div className={styles.innerContainer}>
									<h4 className={styles.title}>Строительство <br /><span>и ремонт</span></h4>
									<div className={styles.text}>Мы предлагаем продукцию для различных отраслей промышленности. Наши клейкие ленты и технические пены могут предложить индивидуальные решения практически для любого типа отрасли.</div>

									<div className={styles.btnWrap}>
										<Link href="/applications/construction-and-renovation" className={styles.btn}>Подробнее</Link>
									</div>

								</div>
							</div>
						</div>

						<div className={styles.card}>
							<div className={styles.imgWrap}>
								<Image
									src="/ApplicationsContent/transport.png"
									alt="img"
									className={styles.img}
									width={860}
									height={600}
								/>
								<Image
									src="/ApplicationsContent/transport-hover.png"
									alt="img"
									className={styles.img}
									width={860}
									height={600}
								/>
							</div>
							<div className={styles.contentCard}>
								<div className={styles.innerContainer}>
									<h4 className={styles.title}>Транспорт</h4>
									<div className={styles.text}>Мы предлагаем продукцию для различных отраслей промышленности. Наши клейкие ленты и технические пены могут предложить индивидуальные решения практически для любого типа отрасли.</div>

									<div className={styles.btnWrap}>
										<Link href="/applications/transport" className={styles.btn}>Подробнее</Link>
									</div>

								</div>
							</div>
						</div>

						<div className={styles.card}>
							<div className={styles.imgWrap}>

								<Image
									src="/ApplicationsContent/vending.png"
									alt="img"
									className={styles.img}
									width={860}
									height={600}
								/>
								<Image
									src="/ApplicationsContent/vending-hover.png"
									alt="img"
									className={styles.img}
									width={860}
									height={600}
								/>
							</div>
							<div className={styles.contentCard}>
								<div className={styles.innerContainer}>
									<h4 className={styles.title}>Витрины и торговые <br />автоматы</h4>
									<div className={styles.text}>Мы предлагаем продукцию для различных отраслей промышленности. Наши клейкие ленты и технические пены могут предложить индивидуальные решения практически для любого типа отрасли.</div>

									<div className={styles.btnWrap}>
										<Link href="/applications/ros" className={styles.btn}>Подробнее</Link>
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