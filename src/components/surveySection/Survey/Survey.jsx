'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

import useWindowWidth from '@/hooks/useWindowWidth';
import useToggleMenus from '@/hooks/useToggleMenus';

import ArrowButton from '@/components/ArrowButton/ArrowButton';
import SurveyItem from '../SurveyItem/SurveyItem';
import ProductCard from '@/components/ProductCard/ProductCard';
import TriangleIcon from '@/components/TriangleIcon/TriangleIcon';

import {
	tasks,
	types1,
	types2,
	connections,
	temperatures,
	conditions,
} from '@/data/surveyOptions';
import image from '/public/survey/survey.png';

import styles from './Survey.module.scss';

export default function Survey() {
	const [isMobile, setIsMobile] = useState(false);

	const [menuStates, toggleMenu, closeMenu] = useToggleMenus({
		isOpenMenuTask: false,
		isOpenMenuType1: false,
		isOpenMenuType2: false,
		isOpenMenuConnection: false,
		isOpenMenuTemperature: false,
		isOpenMenuCondition: false,
	});

	const [checkedTask, setCheckedTask] = useState(tasks[0].value);
	const [checkedType1, setCheckedType1] = useState(types1[0].value);
	const [checkedType2, setCheckedType2] = useState(types2[0].value);
	const [checkedConnection, setCheckedConnection] = useState(
		connections[0].value,
	);
	const [checkedTemperature, setCheckedTemperature] = useState(
		temperatures[0].value,
	);
	const [checkedCondition, setCheckedCondition] = useState(conditions[0].value);

	const handleOpenMenu = (menuName) => {
		toggleMenu(menuName);
	};

	const handleCloseMenu = (menuName) => {
		closeMenu(menuName);
	};

	const minCount = 1;
	const maxCount = 5;

	const [count, setCount] = useState(minCount);

	const forwardButtonDisabled = count === maxCount;
	const backButtonDisabled = count === minCount;

	const handleCheckedTask = (e) => {
		setCheckedTask(e.target.value);
	};

	const handleCheckedType1 = (e) => {
		setCheckedType1(e.target.value);
	};

	const handleCheckedType2 = (e) => {
		setCheckedType2(e.target.value);
	};

	const handleCheckedConnection = (e) => {
		setCheckedConnection(e.target.value);
	};

	const handleCheckedTemperature = (e) => {
		setCheckedTemperature(e.target.value);
	};

	const handleCheckedCondition = (e) => {
		setCheckedCondition(e.target.value);
	};

	const handleInc = () => {
		if (count < maxCount) {
			setCount(count + 1);
		}
	};

	const handleDec = () => {
		if (count > minCount) {
			setCount(count - 1);
		}
	};

	const width = useWindowWidth();

	const selectedTask = tasks.find((task) => task.value === checkedTask);
	const selectedType1 = types1.find((type) => type.value === checkedType1);
	const selectedType2 = types2.find((type) => type.value === checkedType2);
	const selectedConnection = connections.find(
		(connection) => connection.value === checkedConnection,
	);
	const selectedTemperature = temperatures.find(
		(temperature) => temperature.value === checkedTemperature,
	);
	const selectedCondition = conditions.find(
		(condition) => condition.value === checkedCondition,
	);

	useEffect(() => {
		console.log('useEffect сработал');

		if (width <= 480) {
			setIsMobile(true);
			console.log(
				`Мы в мобильном режиме (текущая ширина ${width}px): ${isMobile}`,
			);
		} else {
			setIsMobile(false);
			console.log(
				`Мы в десктопном режиме (текущая ширина ${width}px): ${isMobile}`,
			);
		}
	}, [width]);

	return (
		<section className={styles.section}>
			<div className="container">
				<div className={styles.content}>
					<div className={styles.titleContainer}>
						<h2 className={styles.title}>
							Выберите продукт, который соответствует вашим потребностям
						</h2>
						<p className={styles.description}>
							Узнайте, какой тип ленты лучше всего подходит для вашего случая
							использования, ответив на несколько вопросов.
						</p>
						<div className={styles.counter}>
							0{count}
							<span>/05</span>
						</div>
					</div>
					<div className={styles.survey}>
						<div
							className={`${styles.surveyForm} ${
								count === 1 ? styles.visible : styles.hidden
							}`}
						>
							<h3 className={styles.surveyTitle}>
								Какая задача стоит перед Вами?
							</h3>
							{!isMobile && (
								<ul className={styles.optionsTask}>
									{tasks.map((task) => (
										<li key={task.id} className={styles.optionTask}>
											<SurveyItem
												key={task.id}
												id={task.id}
												name={task.name}
												value={task.value}
												text={task.text}
												extraText={task.extraText}
												checked={checkedTask === task.value}
												onChange={handleCheckedTask}
											/>
										</li>
									))}
								</ul>
							)}

							<div className={styles.surveyFormMobile}>
								<div className={styles.optionsTaskMobileContainer}>
									<div
										className={styles.optionsTaskMenu}
										onClick={() => handleOpenMenu('isOpenMenuTask')}
									>
										<SurveyItem
											id={selectedTask.id}
											value={selectedTask.value}
											checked={true}
											onChange={() => {}}
										/>
										<p>{selectedTask.text}</p>
										<div className={styles.arrow}>
											<TriangleIcon
												color="var(--white)"
												isOpen={menuStates.isOpenMenuTask}
											/>
										</div>
									</div>

									{isMobile && (
										<ul
											className={
												menuStates.isOpenMenuTask
													? styles.visibleMenu
													: styles.hiddenMenu
											}
										>
											{tasks.map((task) => (
												<li
													key={task.id}
													className={styles.optionTaskMobile}
													onClick={() => handleCloseMenu('isOpenMenuTask')}
												>
													<SurveyItem
														key={task.id}
														id={task.id}
														name={task.name}
														value={task.value}
														text={task.text}
														extraText={task.extraText}
														checked={checkedTask === task.value}
														onChange={handleCheckedTask}
													/>
												</li>
											))}
										</ul>
									)}
								</div>

								<Image src={image} alt="Процесс наматывания клейкой ленты" />
							</div>
						</div>

						<div
							className={`${styles.surveyFormType} ${
								count === 2 ? styles.visible : styles.hidden
							}`}
						>
							<h3 className={styles.surveyTitle}>
								Виды склеиваемых поверхностей
							</h3>

							<div className={styles.typesContainer}>
								<ul className={styles.optionsType}>
									<h4>Поверхность 1</h4>
									{types1.map((type) => (
										<li key={type.id} className={styles.optionType}>
											<SurveyItem
												key={type.id}
												id={type.id}
												name={type.name}
												value={type.value}
												text={type.text}
												extraText={type.extraText}
												checked={checkedType1 === type.value}
												onChange={handleCheckedType1}
											/>
										</li>
									))}
								</ul>
								<ul className={styles.optionsType}>
									<h4>Поверхность 2</h4>
									{types2.map((type) => (
										<li key={type.id} className={styles.optionType}>
											<SurveyItem
												key={type.id}
												id={type.id}
												name={type.name}
												value={type.value}
												text={type.text}
												extraText={type.extraText}
												checked={checkedType2 === type.value}
												onChange={handleCheckedType2}
											/>
										</li>
									))}
								</ul>
							</div>

							<div className={styles.surveyFormMobile}>
								<div className={styles.optionsTaskMobileContainer}>
									<div className={styles.type1ContainerMobile}>
										<h4>Поверхность 1</h4>
										<div
											className={styles.optionsTaskMenu}
											onClick={() => handleOpenMenu('isOpenMenuType1')}
										>
											<SurveyItem
												id={selectedType1.id}
												value={selectedType1.value}
												checked={true}
												onChange={() => {}}
											/>
											<div>
												<p>{selectedType1.text}</p>
												<p>{selectedType1.extraText}</p>
											</div>
											<div className={styles.arrow}>
												<TriangleIcon
													color="var(--white)"
													isOpen={menuStates.isOpenMenuType1}
												/>
											</div>
										</div>

										{isMobile && (
											<ul
												className={`${styles.optionsTaskMobile} ${
													menuStates.isOpenMenuType1
														? styles.visibleMenu
														: styles.hiddenMenu
												}`}
											>
												{types1.map((type) => (
													<li
														key={type.id}
														className={styles.optionType}
														onClick={() => handleCloseMenu('isOpenMenuType1')}
													>
														<SurveyItem
															key={type.id}
															id={type.id}
															name={type.name}
															value={type.value}
															text={type.text}
															extraText={type.extraText}
															checked={checkedType1 === type.value}
															onChange={handleCheckedType1}
														/>
													</li>
												))}
											</ul>
										)}
									</div>
									<h4>Поверхность 2</h4>
									<div
										className={styles.optionsTaskMenu}
										onClick={() => handleOpenMenu('isOpenMenuType2')}
									>
										<SurveyItem
											id={selectedType2.id}
											value={selectedType2.value}
											checked={true}
											onChange={() => {}}
										/>
										<div>
											<p>{selectedType2.text}</p>
											<p>{selectedType2.extraText}</p>
										</div>
										<div className={styles.arrow}>
											<TriangleIcon
												color="var(--white)"
												isOpen={menuStates.isOpenMenuType2}
											/>
										</div>
									</div>
									{isMobile && (
										<ul
											className={`${styles.optionsTaskMobile} ${
												menuStates.isOpenMenuType2
													? styles.visibleMenu
													: styles.hiddenMenu
											}`}
										>
											{types2.map((type) => (
												<li
													key={type.id}
													className={styles.optionType}
													onClick={() => handleCloseMenu('isOpenMenuType2')}
												>
													<SurveyItem
														key={type.id}
														id={type.id}
														name={type.name}
														value={type.value}
														text={type.text}
														extraText={type.extraText}
														checked={checkedType2 === type.value}
														onChange={handleCheckedType2}
													/>
												</li>
											))}
										</ul>
									)}
								</div>
							</div>
						</div>

						<div
							className={`${styles.surveyFormConnection} ${
								count === 3 ? styles.visible : styles.hidden
							}`}
						>
							<h3 className={styles.surveyTitle}>
								Условия эксплуатации соединения
							</h3>
							<div className={styles.connectionsContainer}>
								<ul className={styles.optionsConnection}>
									{connections.map((connection) => (
										<li key={connection.id} className={styles.optionConnection}>
											<SurveyItem
												key={connection.id}
												id={connection.id}
												name={connection.name}
												value={connection.value}
												text={connection.text}
												extraText={connection.extraText}
												checked={checkedConnection === connection.value}
												onChange={handleCheckedConnection}
											/>
										</li>
									))}
								</ul>
								<ul className={styles.optionsTemperature}>
									{temperatures.map((temperature) => (
										<li
											key={temperature.id}
											className={styles.optionTemperature}
										>
											<SurveyItem
												key={temperature.id}
												id={temperature.id}
												name={temperature.name}
												value={temperature.value}
												text={temperature.text}
												extraText={temperature.extraText}
												checked={checkedTemperature === temperature.value}
												onChange={handleCheckedTemperature}
											/>
										</li>
									))}
								</ul>
							</div>
						</div>

						<div
							className={`${styles.surveyFormConditions} ${
								count === 4 ? styles.visible : styles.hidden
							}`}
						>
							<h3 className={styles.surveyTitle}>
								Состояние соединяемых поверхностей
							</h3>
							<ul className={styles.optionsCondition}>
								{conditions.map((condition) => (
									<li key={condition.id} className={styles.optionCondition}>
										<SurveyItem
											key={condition.id}
											id={condition.id}
											name={condition.name}
											value={condition.value}
											text={condition.text}
											extraText={condition.extraText}
											checked={checkedCondition === condition.value}
											onChange={handleCheckedCondition}
										/>
									</li>
								))}
							</ul>
						</div>

						<div
							className={`${styles.surveyFormResults} ${
								count === 5 ? styles.visible : styles.hidden
							}`}
						>
							<h3
								className={`${styles.surveyTitle} ${styles.surveyTitleResults}`}
							>
								Результаты
							</h3>
							<ul className={styles.resultsList}>
								<li>
									<ProductCard />
								</li>
								{/* <li>
									<ProductCard />
								</li>
								<li>
									<ProductCard />
								</li>
								<li>
									<ProductCard />
								</li>
								<li>
									<ProductCard />
								</li> */}
							</ul>
						</div>

						<div className={styles.controls}>
							<div className={styles.buttons}>
								<button
									className={styles.backButton}
									onClick={handleDec}
									disabled={backButtonDisabled}
								>
									<ArrowButton backgroundColor="transparent" />
								</button>
								<button
									className={`${styles.forwardButton} button`}
									onClick={handleInc}
									disabled={forwardButtonDisabled}
								>
									Продолжить
								</button>
							</div>

							<div className={styles.links}>
								<div
									className={`${styles.linkContainer} ${
										count === 2 ? styles.visible : styles.hidden
									}`}
								>
									<Link className={styles.link} href="/">
										Таблица с поверхностной энергией материалов
									</Link>
								</div>
								<div
									className={`${styles.linkContainer} ${
										count === 3 ? styles.visible : styles.hidden
									}`}
								>
									<Link className={styles.link} href="/">
										Влияние среды эксплуатации на соединение
									</Link>
								</div>
								<div
									className={`${styles.linkContainer} ${
										count === 4 ? styles.visible : styles.hidden
									}`}
								>
									<Link className={styles.link} href="/">
										Статья о видах поверхностей размещенной в базе знаний
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
