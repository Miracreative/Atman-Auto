import styles from './Team.module.scss';
import Image from 'next/image';
import Link from 'next/link';


export default function Team() {
	return <div className={styles.wrapTeam}>
		<div className='container'>
			<div className={styles.content}>
				<div className={styles.title}>Команда</div>
				<div className={styles.cards}>
					<div className={styles.cardItem}>
						<div className={styles.photo}>
							<Image
								src="/team/teamMember1.png"
								alt="team photo"
								width={350}
								height={350}
							/>
						</div>

						<div className={styles.textContainer}>
							<div className={styles.name}>Демин Павел</div>
							<div className={styles.position}>Руководитель отдела оптовых продаж (потребительские товары упакованные для рынка DIY):</div>
							<div className={styles.whatsApp}>
								<span className={styles.desktopSpan}>WhatsApp: </span>
								<Link
									href={`https://wa.me/89190885529`}
									target="_blank"
									rel="noopener noreferrer"
								>
									8-919-088-55-29
								</Link>
							</div>

							<div className={styles.mail}>
								<span className={styles.desktopSpan}>Mail: </span>
								<Link
									href={`mailto: p.demin@atman-auto.ru`}
								>
									p.demin@atman-auto.ru
								</Link>
							</div>
						</div>
					</div>

					<div className={styles.cardItem}>
						<div className={styles.photo}>
							<Image
								src="/team/teamMember2.png"
								alt="team photo"
								width={350}
								height={350}
							/>
						</div>

						<div className={styles.textContainer}>
							<div className={styles.name}>Юров Артём</div>
							<div className={styles.position}>Региональный менеджер по продажам (материалы для промышленности - Самарская обл. / Ульяновская обл.):</div>

							<div className={styles.whatsApp}>
								<span className={styles.desktopSpan}>WhatsApp: </span>
								<Link
									href={`https://wa.me/89109402823`}
									target="_blank"
									rel="noopener noreferrer"
								>
									8-910-940-28-23
								</Link>
							</div>

							<div className={styles.mail}>
								<span className={styles.desktopSpan}>Mail: </span>
								<Link
									href={`mailto:yurov.a@atman-auto.ru`}
								>
									yurov.a@atman-auto.ru
								</Link>
							</div>
						</div>
					</div>

					<div className={styles.cardItem}>
						<div className={styles.photo}>
							<Image
								src="/team/teamMember3.png"
								alt="team photo"
								width={350}
								height={350}
							/>
						</div>

						<div className={styles.textContainer}>
							<div className={styles.name}>Роман Петров</div>
							<div className={styles.position}>Заместитель директора по коммерческим вопросам (материалы для промышленности):</div>

							<div className={styles.whatsApp}>
								<span className={styles.desktopSpan}>WhatsApp: </span>
								<Link
									href={`https://wa.me/89109418788`}
									target="_blank"
									rel="noopener noreferrer"
								>
									8-910-941-87-88
								</Link>
							</div>

							<div className={styles.mail}>
								<span className={styles.desktopSpan}>Mail: </span>
								<Link
									href={`mailto:petrov@atman-auto.ru`}
								>
									petrov@atman-auto.ru
								</Link>
							</div>
						</div>
					</div>

					<div className={styles.cardItem}>
						<div className={styles.photo}>
							<Image
								src="/team/teamMember4.png"
								alt="team photo"
								width={350}
								height={350}
							/>
						</div>

						<div className={styles.textContainer}>
							<div className={styles.name}>Аббасова Елена</div>
							<div className={styles.position}>Отдел закупок</div>

							<div className={styles.whatsApp}>
								<span className={styles.desktopSpan}>WhatsApp: </span>
								<Link
									href={`https://wa.me/89107030937`}
									target="_blank"
									rel="noopener noreferrer"
								>
									8-910-703-09-37
								</Link>
							</div>

							<div className={styles.mail}>
								<span className={styles.desktopSpan}>Mail: </span>
								<Link
									href={`mailto:ps@atman-auto.ru`}
								>
									ps@atman-auto.ru
								</Link>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>
	</div>;

}
