'use client';

import styles from './ProductionContent.module.scss';
import Image from 'next/image';

import { useState } from 'react';

import PopupVideo from '../PopupVideo/PopupVideo.jsx';


export default function ProductionContent() {

	const [popupActive, setPopupActive] = useState(false);
	const [videoSrc, setVideoSrc] = useState('');



	const handleButtonClick = (src) => {
		setPopupActive(true);
		setVideoSrc(src);
	};
	return (
		<>
			<section className={styles.section}>
				<div className={styles.container}>

					<div className={styles.wrap}>

						<PopupVideo active={popupActive} setActive={setPopupActive} videoSrc={videoSrc}></PopupVideo>

						<div className={styles.cardContainer}>
							<div className={styles.card}>
								<div className={styles.cardMobileHeader}>
									<h4 className={styles.titleMobile}>Продольная <span>резка</span></h4>
									<Image
										src="/ProductionContent/longitudinal-cutting-icon.png"
										alt="icon"
										className={styles.cutIconMobile}
										width={40}
										height={40}
										priority={true}
									/>
								</div>
								<div className={styles.videoPart}>
									<Image
										src="/ProductionContent/longitudinal-cutting-icon.png"
										alt="icon"
										className={styles.cutIcon}
										width={100}
										height={100}
										priority={true}
									/>
									<button className={styles.playBtn} onClick={() => handleButtonClick('../../../video/video2.mov')}>
										<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
											<rect opacity="0.5" x="-0.000244141" width="100" height="100" rx="20" fill="white" />
											<path d="M65.4998 45.6699C68.8331 47.5944 68.8331 52.4056 65.4998 54.3301L45.9998 65.5885C42.6664 67.513 38.4998 65.1073 38.4998 61.2583L38.4998 38.7417C38.4998 34.8927 42.6664 32.487 45.9998 34.4115L65.4998 45.6699Z" fill="white" />
										</svg>
									</button>


								</div>

								<div className={styles.textPart}>
									<div className={styles.textContainer}>
										<h4 className={styles.title}>Продольная <span>резка</span></h4>

										<ul className={styles.textContent}>
											<li className={styles.paragraph}><div>Резка клейких материалов специализированной ножевой группой с точностью до 0,1 мм, позволяет получить контроль ширины по всей длине рулона материала.</div></li>
											<li className={styles.paragraph}><div>Материал в рулонах изготовленных способом продольной резки с перемоткой имеет эстетичный внешний вид, что позволяет применять его на видовых поверхностях или изделиях нанесение которых осуществляется конечным потребителем.</div></li>
											<li className={styles.paragraph}><div>Ровный срез придаёт вашему изделию опрятный внешний вид и уверенность к качестве продукции.</div></li>
											<li className={styles.paragraph}><div>Нанесение клейких лент порезанных данным способом может осуществляется специальным ручным или автоматическим инструментом.</div></li>
										</ul>
									</div>
								</div>
							</div>
						</div>


						<div className={styles.cardContainer}>
							<div className={styles.card}>
								<div className={styles.cardMobileHeader}>
									<h4 className={styles.titleMobile}>Резка  <span>торцевая</span></h4>
									<Image
										src="/ProductionContent/face-cutting-icon.png"
										alt="icon"
										className={styles.cutIconMobile}
										width={40}
										height={40}
										priority={true}
									/>
								</div>

								<div className={styles.videoPart}>
									<Image
										src="/ProductionContent/face-cutting-icon.png"
										alt="icon"
										className={styles.cutIcon}
										width={100}
										height={100}
										priority={true}
									/>

									<button className={styles.playBtn} onClick={() => handleButtonClick('../../../video/video2.mov')}>
										<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
											<rect opacity="0.5" x="-0.000244141" width="100" height="100" rx="20" fill="white" />
											<path d="M65.4998 45.6699C68.8331 47.5944 68.8331 52.4056 65.4998 54.3301L45.9998 65.5885C42.6664 67.513 38.4998 65.1073 38.4998 61.2583L38.4998 38.7417C38.4998 34.8927 42.6664 32.487 45.9998 34.4115L65.4998 45.6699Z" fill="white" />
										</svg>
									</button>

								</div>

								<div className={styles.textPart}>
									<div className={styles.textContainer}>
										<h4 className={styles.title}>Резка <span>торцевая</span></h4>

										<ul className={styles.textContent}>
											<li className={styles.paragraph}><div>Резка самоклеящихся материалов дисковым ножом с заданной шириной от 4 мм. Точность реза - 100 мкм (0,1 мм).</div></li>
											<li className={styles.paragraph}><div>В зависимости от типа материала применяются ножи с различным углом заточки и качеством стали.</div></li>
										</ul>
									</div>
								</div>
							</div>
						</div>


						<div className={styles.cardContainer}>
							<div className={styles.card}>
								<div className={styles.cardMobileHeader}>
									<h4 className={styles.titleMobile}>Плоская  <span>высечка</span></h4>
									<Image
										src="/ProductionContent/flat-cutting-icon.png"
										alt="icon"
										className={styles.cutIconMobile}
										width={40}
										height={40}
										priority={true}
									/>
								</div>

								<div className={styles.videoPart}>
									<Image
										src="/ProductionContent/flat-cutting-icon.png"
										alt="icon"
										className={styles.cutIcon}
										width={100}
										height={100}
										priority={true}
									/>
									<button className={styles.playBtn} onClick={() => handleButtonClick('../../../video/video1.mov')}>
										<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
											<rect opacity="0.5" x="-0.000244141" width="100" height="100" rx="20" fill="white" />
											<path d="M65.4998 45.6699C68.8331 47.5944 68.8331 52.4056 65.4998 54.3301L45.9998 65.5885C42.6664 67.513 38.4998 65.1073 38.4998 61.2583L38.4998 38.7417C38.4998 34.8927 42.6664 32.487 45.9998 34.4115L65.4998 45.6699Z" fill="white" />
										</svg>
									</button>

								</div>

								<div className={styles.textPart}>
									<div className={styles.textContainer}>
										<h4 className={styles.title}>Плоская <span>высечка</span></h4>

										<ul className={styles.textContent}>
											<li className={styles.paragraph}><div>Воздействие на материал штанцевыми ножами установленной формы позволяет производить самоклеящиеся детали по форме вашего изделия.</div></li>
											<li className={styles.paragraph}><div>Детали изготовленной формы могут быть оснащены специальными "язычками " для удобного снятия лайнера при монтаже".</div></li>
											<li className={styles.paragraph}>
												<div>Внешний вид поставки таких деталей зависит от геометрии изделия и особенности ваших технологических процессов (способа нанесения, количества станций нанесения и т. д.):
													<ul>
														<li className={styles.subparagraph}>одна или несколько деталей на листе;
														</li>
														<li className={styles.subparagraph}>вырубленные детали в рулоне;</li>
													</ul>
												</div>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>


						<div className={styles.cardContainer}>
							<div className={styles.card}>
								<div className={styles.cardMobileHeader}>
									<h4 className={styles.titleMobile}>Ротационная  <span>высечка</span></h4>
									<Image
										src="/ProductionContent/rotary-cutting-icon.png"
										alt="icon"
										className={styles.cutIconMobile}
										width={40}
										height={40}
										priority={true}
									/>
								</div>

								<div className={styles.videoPart}>
									<Image
										src="/ProductionContent/rotary-cutting-icon.png"
										alt="icon"
										className={styles.cutIcon}
										width={100}
										height={100}
										priority={true}
									/>

									<button className={styles.playBtn} onClick={() => handleButtonClick('../../../video/video2.mov')}>
										<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
											<rect opacity="0.5" x="-0.000244141" width="100" height="100" rx="20" fill="white" />
											<path d="M65.4998 45.6699C68.8331 47.5944 68.8331 52.4056 65.4998 54.3301L45.9998 65.5885C42.6664 67.513 38.4998 65.1073 38.4998 61.2583L38.4998 38.7417C38.4998 34.8927 42.6664 32.487 45.9998 34.4115L65.4998 45.6699Z" fill="white" />
										</svg>
									</button>

								</div>

								<div className={styles.textPart}>
									<div className={styles.textContainer}>
										<h4 className={styles.title}>Ротационная <span>высечка</span></h4>

										<ul className={styles.textContent}>
											<li className={styles.paragraph}><div>Производство деталей заданной формы, из односторонних или тонких двусторонних клейких лент, методом воздействия на материал антиадгезионными магнитными ножами.</div></li>
											<li className={styles.paragraph}><div>Детали произведенные данным способом поставляются в рулоне.</div></li>
										</ul>
									</div>
								</div>
							</div>
						</div>


						<div className={styles.cardContainer}>						<div className={styles.card}>
							<div className={styles.cardMobileHeader}>
								<h4 className={styles.titleMobile}>Плоттерная  <span>резка</span></h4>
								<Image
									src="/ProductionContent/plotter-cutting-icon.png"
									alt="icon"
									className={styles.cutIconMobile}
									width={40}
									height={40}
									priority={true}
								/>
							</div>

							<div className={styles.videoPart}>
								<Image
									src="/ProductionContent/plotter-cutting-icon.png"
									alt="icon"
									className={styles.cutIcon}
									width={100}
									height={100}
									priority={true}
								/>

								<button className={styles.playBtn} onClick={() => handleButtonClick('../../../video/video1.mov')}>
									<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
										<rect opacity="0.5" x="-0.000244141" width="100" height="100" rx="20" fill="white" />
										<path d="M65.4998 45.6699C68.8331 47.5944 68.8331 52.4056 65.4998 54.3301L45.9998 65.5885C42.6664 67.513 38.4998 65.1073 38.4998 61.2583L38.4998 38.7417C38.4998 34.8927 42.6664 32.487 45.9998 34.4115L65.4998 45.6699Z" fill="white" />
									</svg>
								</button>


							</div>

							<div className={styles.textPart}>
								<div className={styles.textContainer}>
									<h4 className={styles.title}>Плоттерная <span>резка</span> </h4>

									<ul className={styles.textContent}>
										<li className={styles.paragraph}><div>Изготовление самоклеящихся деталей простой и сложной формы, габариты которых не превышают рабочий стол оборудования 1200мм х 1800мм</div></li>
										<li className={styles.paragraph}><div>Режущий инструмент оборудования способен прорезать материал до подложки (лайнера), резать насквозь и перфорировать его.</div></li>

									</ul>
								</div>
							</div>
						</div></div>


						<div className={styles.cardContainer}>						<div className={styles.card}>
							<div className={styles.cardMobileHeader}>
								<h4 className={styles.titleMobile}>Ламинация </h4>
								<Image
									src="/ProductionContent/lamination-icon.png"
									alt="icon"
									className={styles.cutIconMobile}
									width={40}
									height={40}
									priority={true}
								/>
							</div>

							<div className={styles.videoPart}>
								<Image
									src="/ProductionContent/lamination-icon.png"
									alt="icon"
									className={styles.cutIcon}
									width={100}
									height={100}
									priority={true}
								/>

								<button className={styles.playBtn} onClick={() => handleButtonClick('../../../video/video2.mov')}>
									<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
										<rect opacity="0.5" x="-0.000244141" width="100" height="100" rx="20" fill="white" />
										<path d="M65.4998 45.6699C68.8331 47.5944 68.8331 52.4056 65.4998 54.3301L45.9998 65.5885C42.6664 67.513 38.4998 65.1073 38.4998 61.2583L38.4998 38.7417C38.4998 34.8927 42.6664 32.487 45.9998 34.4115L65.4998 45.6699Z" fill="white" />
									</svg>
								</button>

							</div>

							<div className={styles.textPart}>
								<div className={styles.textContainer}>
									<h4 className={styles.title}>Ламинация</h4>

									<ul className={styles.textContent}>
										<li className={styles.paragraph}><div>Соединение разнородных и однородных материалов между собой, с целью дальнейшего изготовления из них  изделий с уникальными свойствами.</div></li>
										<li className={styles.paragraph}><div>Соединяемые материалы  могут иметь разную плотность, состав и свойства.</div></li>

									</ul>
								</div>
							</div>
						</div></div>



					</div>

				</div>
			</section>
		</>
	)
}