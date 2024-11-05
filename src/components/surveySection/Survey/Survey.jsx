'use client';

import Link from 'next/link';
import Image from 'next/image';

import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
	setIsMobile,
	setFilterAllParamGoods,
	getFilteredAllParamGoods,
	getAllGoods,
} from '@/store/goods/goodsSlice';

import useWindowWidth from '@/hooks/useWindowWidth';
import useToggleMenus from '@/hooks/useToggleMenus';

import MOBILE_WIDTH from '@/constants/width.js';

import {
	tasks,
	types1,
	types2,
	connections,
	temperatures,
	conditions,
} from '@/data/surveyOptions';

import SurveyItem from '../SurveyItem/SurveyItem';
import SurveyFormMobile from '../SurveyFormMobile/SurveyFormMobile';
import SurveySlider from '../SurveySlider/SurveySlider';
import ArrowButton from '@/components/ArrowButton/ArrowButton';

import image from '/public/survey/survey.png';

import styles from './Survey.module.scss';

export default function Survey() {
	const dispatch = useDispatch();

	const { isMobile, products, loading, error, filterAllParam } = useSelector(
		(state) => state.goods,
	);

	useEffect(() => {
		dispatch(getAllGoods());
	}, []);

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

	const width = useWindowWidth();

	const minCount = 1;
	const maxCount = 5;

	const [count, setCount] = useState(minCount);

	const forwardButtonDisabled = count === maxCount;
	const backButtonDisabled = count === minCount;

	const handleOpenMenu = (menuName) => {
		toggleMenu(menuName);
	};

	const handleCloseMenu = (menuName) => {
		closeMenu(menuName);
	};

	const handleCheckedTask = (value) => {
		const updatedFilterAllParam = [...filterAllParam];
		// Обнуляем все значения для задач, например, если они размещаются в первых N позициях
		const taskPosition = 0;

		updatedFilterAllParam.fill(0, taskPosition, tasks.length); // Обнуляем все значения в диапазоне, соответствующем задачам
		setCheckedTask(value);

		// Устанавливаем новое значение
		const taskIndex = tasks.findIndex((task) => task.value === value);
		if (taskIndex !== -1) {
			updatedFilterAllParam[taskIndex] = 1; // Устанавливаем 1 для выбранной задачи
		}

		dispatch(setFilterAllParamGoods(updatedFilterAllParam));
	};

	const handleCheckedType1 = (value) => {
		const updatedFilterAllParam = [...filterAllParam];
		const typePosition = 8;

		updatedFilterAllParam.fill(0, typePosition, typePosition + types1.length);
		setCheckedType1(value);

		const typeIndex = types1.findIndex((type) => type.value === value);
		if (typeIndex !== -1) {
			updatedFilterAllParam[typePosition + typeIndex] = 1;
		}

		dispatch(setFilterAllParamGoods(updatedFilterAllParam));
	};

	const handleCheckedType2 = (value) => {
		setCheckedType2(value);
	};

	const handleCheckedConnection = (value) => {
		const updatedFilterAllParam = [...filterAllParam];
		const connectionPosition = 11;

		updatedFilterAllParam.fill(
			0,
			connectionPosition,
			connectionPosition + connections.length,
		);
		setCheckedConnection(value);

		const connectionIndex = connections.findIndex(
			(connection) => connection.value === value,
		);
		if (connectionIndex !== -1) {
			updatedFilterAllParam[connectionPosition + connectionIndex] = 1;
		}

		dispatch(setFilterAllParamGoods(updatedFilterAllParam));
	};

	const handleCheckedTemperature = (value) => {
		const updatedFilterAllParam = [...filterAllParam];
		const temperaturePosition = 16;

		updatedFilterAllParam.fill(
			0,
			temperaturePosition,
			temperaturePosition + temperatures.length,
		);
		setCheckedTemperature(value);

		const temperatureIndex = temperatures.findIndex(
			(temperature) => temperature.value === value,
		);
		if (temperatureIndex !== -1) {
			updatedFilterAllParam[temperaturePosition + temperatureIndex] = 1;
		}

		dispatch(setFilterAllParamGoods(updatedFilterAllParam));
	};

	const handleCheckedCondition = (value) => {
		const updatedFilterAllParam = [...filterAllParam];
		const conditionPosition = 20;

		updatedFilterAllParam.fill(
			0,
			conditionPosition,
			conditionPosition + conditions.length,
		);
		setCheckedCondition(value);

		const conditionIndex = conditions.findIndex(
			(condition) => condition.value === value,
		);
		if (conditionIndex !== -1) {
			updatedFilterAllParam[conditionPosition + conditionIndex] = 1;
		}

		dispatch(setFilterAllParamGoods(updatedFilterAllParam));
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
		if (width <= MOBILE_WIDTH) {
			dispatch(setIsMobile(true));
			// console.log(
			// 	`Мы в мобильном режиме (текущая ширина ${width}px): ${isMobile}`,
			// );
		} else {
			dispatch(setIsMobile(false));
			// console.log(
			// 	`Мы в десктопном режиме (текущая ширина ${width}px): ${isMobile}`,
			// );
		}
	}, [isMobile]);

	const handleApply = () => {
		handleInc();

		if (count === 4) {
			dispatch(getFilteredAllParamGoods(filterAllParam));
			console.log('Запрос на сервер');
		}
	};

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
						{/* Экран 1 Какая задача стоит перед Вами? */}
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
												onChange={() => handleCheckedTask(task.value)}
											/>
										</li>
									))}
								</ul>
							)}

							{isMobile && (
								<>
									<SurveyFormMobile
										selectedItem={selectedTask}
										isOpen={menuStates.isOpenMenuTask}
										toggleMenu={() => handleOpenMenu('isOpenMenuTask')}
										items={tasks}
										handleSelect={handleCheckedTask}
										handleCloseMenu={() => handleCloseMenu('isOpenMenuTask')}
									/>
									<Image
										className={styles.image}
										src={image}
										alt="Процесс наматывания клейкой ленты"
									/>
								</>
							)}
						</div>
						{/* Экран 1 Какая задача стоит перед Вами? */}

						{/* Экран 2 Виды склеиваемых поверхностей */}
						<div
							className={`${styles.surveyFormType} ${
								count === 2 ? styles.visible : styles.hidden
							}`}
						>
							<h3 className={styles.surveyTitle}>
								Виды склеиваемых поверхностей
							</h3>

							{!isMobile && (
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
													onChange={() => handleCheckedType1(type.value)}
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
													onChange={() => handleCheckedType2(type.value)}
												/>
											</li>
										))}
									</ul>
								</div>
							)}

							<div className={styles.surveyFormTypesMobile}>
								{isMobile && (
									<>
										<h4>Поверхность 1</h4>
										<SurveyFormMobile
											selectedItem={selectedType1}
											isOpen={menuStates.isOpenMenuType1}
											toggleMenu={() => handleOpenMenu('isOpenMenuType1')}
											items={types1}
											handleSelect={handleCheckedType1}
											handleCloseMenu={() => handleCloseMenu('isOpenMenuType1')}
										/>
									</>
								)}

								{isMobile && (
									<>
										<h4>Поверхность 2</h4>
										<SurveyFormMobile
											selectedItem={selectedType2}
											isOpen={menuStates.isOpenMenuType2}
											toggleMenu={() => handleOpenMenu('isOpenMenuType2')}
											items={types2}
											handleSelect={handleCheckedType2}
											handleCloseMenu={() => handleCloseMenu('isOpenMenuType2')}
										/>
									</>
								)}
							</div>
						</div>
						{/* Экран 2 Виды склеиваемых поверхностей */}

						{/* Экран 3 Условия эксплуатации соединения */}
						<div
							className={`${styles.surveyFormConnection} ${
								count === 3 ? styles.visible : styles.hidden
							}`}
						>
							<h3 className={styles.surveyTitle}>
								Условия эксплуатации соединения
							</h3>
							{!isMobile && (
								<div className={styles.connectionsContainer}>
									<ul className={styles.optionsConnection}>
										{connections.map((connection) => (
											<li key={connection.id}>
												<SurveyItem
													key={connection.id}
													id={connection.id}
													name={connection.name}
													value={connection.value}
													text={connection.text}
													extraText={connection.extraText}
													checked={checkedConnection === connection.value}
													onChange={() =>
														handleCheckedConnection(connection.value)
													}
												/>
											</li>
										))}
									</ul>
									<ul className={styles.optionsTemperature}>
										{temperatures.map((temperature) => (
											<li key={temperature.id}>
												<SurveyItem
													key={temperature.id}
													id={temperature.id}
													name={temperature.name}
													value={temperature.value}
													text={temperature.text}
													extraText={temperature.extraText}
													checked={checkedTemperature === temperature.value}
													onChange={() =>
														handleCheckedTemperature(temperature.value)
													}
												/>
											</li>
										))}
									</ul>
								</div>
							)}

							{isMobile && (
								<>
									<SurveyFormMobile
										selectedItem={selectedConnection}
										isOpen={menuStates.isOpenMenuConnection}
										toggleMenu={() => handleOpenMenu('isOpenMenuConnection')}
										items={connections}
										handleSelect={handleCheckedConnection}
										handleCloseMenu={() =>
											handleCloseMenu('isOpenMenuConnection')
										}
									/>
									<div className={styles.line}></div>
									<SurveyFormMobile
										selectedItem={selectedTemperature}
										isOpen={menuStates.isOpenMenuTemperature}
										toggleMenu={() => handleOpenMenu('isOpenMenuTemperature')}
										items={temperatures}
										handleSelect={handleCheckedTemperature}
										handleCloseMenu={() =>
											handleCloseMenu('isOpenMenuTemperature')
										}
									/>
								</>
							)}
						</div>
						{/* Экран 3 Условия эксплуатации соединения */}

						{/* Экран 4 Состояние соединяемых поверхностей */}
						<div
							className={`${styles.surveyFormConditions} ${
								count === 4 ? styles.visible : styles.hidden
							}`}
						>
							<h3 className={styles.surveyTitle}>
								Состояние соединяемых поверхностей
							</h3>
							{!isMobile && (
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
												onChange={() => handleCheckedCondition(condition.value)}
											/>
										</li>
									))}
								</ul>
							)}

							{isMobile && (
								<SurveyFormMobile
									selectedItem={selectedCondition}
									isOpen={menuStates.isOpenMenuCondition}
									toggleMenu={() => handleOpenMenu('isOpenMenuCondition')}
									items={conditions}
									handleSelect={handleCheckedCondition}
									handleCloseMenu={() => handleCloseMenu('isOpenMenuCondition')}
								/>
							)}
						</div>
						{/* Экран 4 Состояние соединяемых поверхностей */}

						{/* Экран 5 Результаты */}
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
							<SurveySlider products={products} />
						</div>
						{/* Экран 5 Результаты */}

						{/* Элементы управления и навигации */}
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
									// onClick={handleInc}
									onClick={handleApply}
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
									<Link className={styles.link} href="/knowledge">
										Таблица с поверхностной энергией материалов
									</Link>
								</div>
								<div
									className={`${styles.linkContainer} ${
										count === 3 ? styles.visible : styles.hidden
									}`}
								>
									<Link className={styles.link} href="/knowledge">
										Влияние среды эксплуатации на соединение
									</Link>
								</div>
								<div
									className={`${styles.linkContainer} ${
										count === 4 ? styles.visible : styles.hidden
									}`}
								>
									<Link className={styles.link} href="/knowledge">
										Статья о видах поверхностей размещенной в базе знаний
									</Link>
								</div>
							</div>
						</div>
						{/* Элементы управления и навигации */}
					</div>
				</div>
			</div>
		</section>
	);
}
