'use client';

import Link from 'next/link';
import {
	//  useEffect,
	useState,
} from 'react';

import ArrowButton from '../../ArrowButton/ArrowButton';
import SurveyItem from '../SurveyItem/SurveyItem';

import {
	tasks,
	types1,
	types2,
	connections,
	temperatures,
	conditions,
} from '@/data/surveyOptions';

import styles from './Survey.module.scss';

export default function Survey() {
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

	const [count, setCount] = useState(1);

	const minCount = 1;
	const maxCount = 5;

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

	// useEffect(() => {
	// 	console.log(`${'Сейчас счётчик показывает: ' + count}`);

	// 	if (count === 1) {
	// 	}
	// }, [count]);

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
							<h3 className={styles.surveyTitle}>Результаты</h3>
							{/* <ul className={styles.optionsCondition}>
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
							</ul> */}
						</div>

						<div className={styles.controls}>
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
							<Link href="/"></Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
