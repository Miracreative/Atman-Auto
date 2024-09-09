'use client';

import Link from 'next/link';
import { useState } from 'react';

import ArrowButton from '../../ArrowButton/ArrowButton';
import SurveyItem from '../SurveyItem/SurveyItem';

import {
	tasks,
	types1,
	types2,
	connections,
	temperatures,
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
						<div className={styles.surveyForm}>
							<h3 className={styles.surveyTitle}>
								Какая задача стоит перед Вами?
							</h3>
							<ul className={styles.options}>
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

						<div className={styles.surveyFormType}>
							<h3 className={styles.surveyTitle}>
								Виды склеиваемых поверхностей
							</h3>
							<div className={styles.typesContainer}>
								<ul className={styles.optionType}>
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
								<ul className={styles.optionType}>
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

						<div className={styles.surveyFormСonditions}>
							<h3 className={styles.surveyTitle}>
								Условия эксплуатации соединения
							</h3>
							<div className={styles.conditionsContainer}>
								<ul className={styles.optionConnections}>
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
								<ul className={styles.optionTemperatures}>
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
