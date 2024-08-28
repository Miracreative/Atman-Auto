import styles from './Requisites.module.scss';
// import Image from 'next/image';
import Link from 'next/link';

export default function Requisites() {
	return (
		<>
			<section className={styles.section}>
				<div className="container">
					<div className={styles.wrap}>
						<div className={styles.innerWrap}>

							<div className={styles.header}>
								<h3 className={styles.title}>Реквизиты <br /> <span>организации</span></h3>
								<div className={styles.downloadWrap}>
									<Link href='/' className={styles.downloadContainer}>

										<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
											<circle cx="50" cy="50" r="50" fill="#353535" />
											<path d="M50.0749 55.1302L49.6745 56.3281C49.0104 58.3138 47.9655 60.1432 46.5951 61.7155L46.9564 61.6439C49.0137 61.2305 51.1328 61.2305 53.1934 61.6439L53.5514 61.7155C52.1842 60.1432 51.1361 58.3138 50.4753 56.3314L50.0749 55.1302Z" fill="white" />
											<path fillRule="evenodd" clipRule="evenodd" d="M30.8203 30.8301C30.8203 29.6582 31.224 28.5807 31.8978 27.7279C32.8158 26.5723 34.2318 25.8301 35.8203 25.8301H49.1536C50.0749 25.8301 50.8203 26.5755 50.8203 27.4967V41.6634C50.8203 43.5059 52.3112 44.9967 54.1536 44.9967H67.487C68.4082 44.9967 69.1536 45.7422 69.1536 46.6634V69.1634C69.1536 71.9238 66.9141 74.1634 64.1536 74.1634H35.8203C33.0599 74.1634 30.8203 71.9238 30.8203 69.1634V30.8301ZM52.4447 51.7057C51.6862 49.4271 48.4635 49.4271 47.7018 51.7057L46.5104 55.2734C46.3444 55.7747 46.1458 56.263 45.918 56.7383C45.3353 57.9557 44.5573 59.069 43.61 60.0391L42.373 61.3118C40.6576 63.0729 42.2461 65.9896 44.6549 65.5046L47.6107 64.9121C48.1803 64.7982 48.7533 64.7233 49.3294 64.6908C50.0911 64.6452 50.8561 64.668 51.6146 64.7624C51.9238 64.8014 52.2298 64.8503 52.5358 64.9121L55.4915 65.5078C57.9004 65.9896 59.4889 63.0729 57.7767 61.3118L56.5365 60.0391C55.2246 58.6914 54.2318 57.0605 53.6361 55.2767L52.4447 51.7057Z" fill="white" />
											<path d="M67.2135 42.4967C67.946 42.4967 68.3203 41.6211 67.8158 41.0905L54.7591 27.3437C54.2383 26.7969 53.3203 27.1647 53.3203 27.9167V40.8301C53.3203 41.7513 54.0658 42.4967 54.987 42.4967H67.2135Z" fill="white" />
										</svg>


										<div className={styles.textDownload}>
											<div>Карточка компании</div>
											Скачать
										</div>
									</Link>
								</div>

							</div>

							<div className={styles.content}>

								<div className={styles.infoBlock}>
									<div className={styles.subTitle}>Наименование предприятия полное:</div>
									<div className={styles.text}>Общество с ограниченной ответственностью «Атман-АВТО»</div>
								</div>

								<div className={styles.infoBlock}>
									<div className={styles.subTitle}>Фактический адрес:</div>
									<div className={styles.text}>301650, Тульская обл., г. Новомосковск, ул. Маяковского, д. 25, оф.201</div>
								</div>

								<div className={styles.infoBlock}>
									<div className={styles.subTitle}>Наименование предприятия краткое:</div>
									<div className={styles.text}>ООО «Атман-АВТО»</div>
								</div>

								<div className={styles.infoBlock}>
									<div className={styles.subTitle}>Почтовый адрес:</div>
									<div className={styles.text}>301650, Тульская обл., г. Новомосковск, ул. Маяковского, д. 25, оф.201</div>
								</div>

								<div className={styles.infoBlock}>
									<div className={styles.subTitle}>Юридический адрес:</div>
									<div className={styles.text}>301650, Тульская обл., г. Новомосковск, ул. Маяковского, д. 25, оф.201</div>
								</div>



								<div className={styles.infoBlock}>
									<div className={styles.subTitle}>Директор:</div>
									<div className={styles.text}>Акимкин Максим Александрович </div>
								</div>

								<div className={styles.infoBlock}>
									<div className={styles.subTitle}>Телефон:</div>
									<div className={styles.text}>8-800-250-55-26</div>
								</div>

								<div className={styles.infoBlock}>
									<div className={styles.subTitle}>E-mail:</div>
									<div className={styles.text}>info@atman-auto.ru</div>
								</div>

								<div className={styles.infoBlock}>
									<div className={styles.subTitle}>Веб-сайт:</div>
									<div className={styles.text}>www.atman-auto.ru</div>
								</div>





								<div className={styles.infoBlock}>
									<div className={styles.subTitle}>ИНН:</div>
									<div className={styles.text}>711 650 6832</div>
								</div>

								<div className={styles.infoBlock}>
									<div className={styles.subTitle}>КПП:</div>
									<div className={styles.text}>711 601 001</div>
								</div>



								<div className={styles.infoBlock}>
									<div className={styles.subTitle}>ОКПО:</div>
									<div className={styles.text}>699 672 30</div>
								</div>

								<div className={styles.infoBlock}>
									<div className={styles.subTitle}>ОГРН:</div>
									<div className={styles.text}>111 715 401 6022</div>
								</div>


								<div className={styles.infoBlock}>
									<div className={styles.subTitle}>ОКВЭД:</div>
									<div className={styles.text}>29.32</div>
								</div>




								<div className={styles.infoBlock}>
									<div className={styles.subTitle}>Наименование банка:</div>
									<div className={styles.text}>ФИЛИАЛ "ЦЕНТРАЛЬНЫЙ" БАНКА ВТБ (ПАО) в г. Москва</div>
								</div>

								<div className={styles.infoBlock}>
									<div className={styles.subTitle}>Расчетный счет:</div>
									<div className={styles.text}>40702810204250000296</div>
								</div>

								<div className={styles.infoBlock}>
									<div className={styles.subTitle}>Корреспондентский счет:</div>
									<div className={styles.text}>30101810145250000411</div>
								</div>

								<div className={styles.infoBlock}>
									<div className={styles.subTitle}>БИК:</div>
									<div className={styles.text}>044525411</div>
								</div>

							</div>

						</div>
					</div>
				</div>
			</section>;
		</>
	)

}