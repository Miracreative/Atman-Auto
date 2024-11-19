import styles from './Delivery.module.scss';
import Image from 'next/image';


export default function Delivery() {
	return (
		<>
			<section className={styles.section}>
				<div className="container">

					<div className={styles.wrap}>

						<div className={styles.titleContainer}>
							<h3 className={styles.title}>Доставка</h3>
							<div className={styles.titleText}>Доставка товаров осуществляется по всей территории РФ транспортными компаниями, курьерской службой или собственным транспортом компании "Атман-АВТО".</div>
						</div>

						<div className={styles.content}>

							<div className={styles.column}>
								<div className={styles.card}>

									<div className={styles.cardContent}>
										<div className={styles.imgWrap}>
											<Image
												className={styles.logo}
												id={styles.logoAtman}
												src="/about/Delivery/atman-white-logo.png"
												alt="logo"
												width={337}
												height={72}
											// priority={true}
											/>
										</div>

										<div className={styles.titleCard} id={styles.titleAtman}>Доставка транспортом <br /> "Атман-АВТО"</div>
										<div className={styles.textCard}>Доставка транспортом "Атман-АВТО" осуществляется, при условии* заказа более 30 000 руб. или весом более 30 кг. по г. Москва, Тула, Новомосковск, Рязань, Калуга.</div>
									</div>

								</div>


								<div className={styles.card}>

									<div className={styles.cardContent}>
										<div className={styles.imgWrap}>
											<Image
												className={styles.logo}
												id={styles.logoKCE}
												src="/about/Delivery/kce-logo.png"
												alt="logo"
												width={175}
												height={72}
											// priority={true}
											/>
										</div>

										<div className={styles.titleCard} id={styles.titleKCE}>Доставка курьером</div>
										<div className={styles.textCard}>Этот способ доставки удобен, для небольших партий товара весом до 30 кг. После 100% предоплаты и согласования с вами стоимости доставки, ваш заказ передается в службу курьерской доставки "Курьер сервис". Представитель компании, позвонит вам и согласует удобное для вас время доставки. Оплата за доставку осуществляется курьеру, при получении товара.</div>
									</div>

								</div>
							</div>

							<div className={styles.column}>
								<div className={styles.card}>
									<div className={styles.cardContent}>
										<div className={styles.imgWrap}>
											<Image
												className={styles.logo}
												id={styles.logoDL}
												src="/about/Delivery/delovieLinii-logo.png"
												alt="logo"
												width={455}
												height={72}
											// priority={true}
											/>
										</div>

										<div className={styles.titleCard} id={styles.titleDL}>Доставка транспортной <br />компанией</div>
										<div className={styles.textCard}>Доставка осуществляется транспортной компанией "Деловые линии". Стоимость доставки вы можете рассчитать при помощи онлайн калькулятора . При заказе на сумму более 50 000 руб. с НДС, доставка осуществляется бесплатно* (до терминала транспортной компании "Деловые линии" в вашем городе ). Если у вас нет возможности принять груз транспортной компаний "Деловые линии", мы доставим ваш заказ любой другой транспортной компанией.</div>
									</div>

								</div>

								<div className={styles.card}>
									<div className={styles.textLastCard}>Доставка продукции может быть осуществлена, любой транспортной компанией на усмотрение покупателя за счет получателя. Мы бесплатно доставим груз до терминала ТК о передадим в доставку.</div>
								</div>
							</div>
						</div>

					</div>

				</div>
			</section>
		</>
	)
}