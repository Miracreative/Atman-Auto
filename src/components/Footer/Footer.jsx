import styles from './Footer.module.scss';
import Image from 'next/image';
import Link from 'next/link';


export default function Footer() {
	return <footer className={styles.footer}>
		<div className="container">
			<div className={styles.footer__content}>
				<div className={styles.footer__textWrap}>
					<div className={styles.footer__title}>
						Обратитесь к нашим<span> специалистам</span>
					</div>
					<div className={styles.footer__text}>
						Получите профессиональную консультацию по подбору продуктов, особенностям их применения или разместите заказ.
					</div>
				</div>
				<div className={styles.footer__contacts}>
					<Link href="mailto:contact@atman-auto.ru">
						<div className={styles.footer__contact}>contact@atman-auto.ru</div>
					</Link>
					<Link href="tel:+78002505526">
						<div className={styles.footer__contact}>8-800-250-55-26</div>
					</Link>
				</div>

				<nav className={styles.footer__nav}>
					<div className={styles.footer__navInner}>
						<div className={styles.footer__topLinks}>
							<div className={styles.footer__logoWrap}>
								<Image
									src="/logo.svg"
									alt="Atman Auto logo"
									className={styles.footer__logo}
									width={255}
									height={88}
								/>
							</div>

							<div className={styles.footer__column}>
								<div className={styles.footer__titleColumn}>О нас</div>
								<ul className={styles.footer__linksList}>
									<li> <Link href="/prom">Политика в области качества</Link></li>
									<li> <Link href="/prom">Кодекс корпоративной этики</Link></li>
									<li> <Link href="/prom">Политика в области охраны труда</Link></li>
									<li> <Link href="/prom">Ведомости СОУТ</Link></li>
									<li> <Link href="/prom">Политика обработка персональных данных</Link></li>
								</ul>
							</div>
							<div className={styles.footer__column}>
								<div className={styles.footer__titleColumn}>Применения</div>
								<ul className={styles.footer__linksList}>
									<li> <Link href="/prom">Автомобильная промышленность</Link></li>
									<li> <Link href="/prom">Производство бытовой техники</Link></li>
									<li> <Link href="/prom">Мебельная промышленность</Link></li>
									<li> <Link href="/prom">Производство электроники</Link></li>
									<li> <Link href="/prom">Строительство и ремонт</Link></li>
									<li> <Link href="/prom">Транспорт</Link></li>
									<li> <Link href="/prom">РОС</Link></li>
								</ul>
							</div>
							<div className={styles.footer__column}>
								<div className={styles.footer__titleColumn}>Товары</div>
								<ul className={styles.footer__linksList}>
									<li> <Link href="/prom">Вспененные двусторонние клейкие ленты</Link></li>
									<li> <Link href="/prom">Тонкие двусторонние клейкие ленты</Link></li>
									<li> <Link href="/prom">Односторонние клейкие ленты</Link></li>
									<li> <Link href="/prom">Праймеры и очистители</Link></li>
									<li> <Link href="/prom">Пленки</Link></li>
									<li> <Link href="/prom">Инструменты</Link></li>
									<li> <Link href="/prom">Резины</Link></li>
								</ul>
							</div>
							<div className={styles.footer__column}>
								<div className={styles.footer__titleColumn}> <Link href="/">Производство</Link> </div>
								<div className={styles.footer__titleColumn}> <Link href="/">База знания</Link> </div>
								<div className={styles.footer__titleColumn}> <Link href="/">Новости</Link> </div>
							</div>
						</div>




						<div className={styles.footer__socialLinks}>
							<Link href="/" className={styles.footer__socialLink}>
								<Image
									src="/vk-icon.svg"
									alt="vkLink"
									className={styles.footer__socialLinkItem}
									width={50}
									height={50}
								/>
							</Link>

							<Link href="/" className={styles.footer__socialLink}>
								<Image
									src="/youtube-icon.svg"
									alt="youtubeLink"
									className={styles.footer__socialLinkItem}
									width={50}
									height={50}
								/>
							</Link>

							<Link href="/" className={styles.footer__socialLink}>
								<Image
									src="/tg-icon.svg"
									alt="tgLink"
									className={styles.footer__socialLinkItem}
									width={50}
									height={50}
								/>
							</Link>

							<Link href="/" className={styles.footer__socialLink}>
								<Image
									src="/dzen-icon.svg"
									alt="dzenLink"
									className={styles.footer__socialLinkItem}
									width={50}
									height={50}
								/>
							</Link>

							<Link href="/" className={styles.footer__socialLink}>
								<Image
									src="/driveRu-icon.svg"
									alt="driveRuLink"
									className={styles.footer__socialLinkItem}
									width={50}
									height={50}
								/>
							</Link>

						</div>
					</div>
				</nav>
			</div>
		</div>
	</footer>;
}
