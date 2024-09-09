'use client';

import Link from 'next/link';
import { useState } from 'react';

import ArrowButton from '../../ArrowButton/ArrowButton';
import SurveyItem from '../SurveyItem/SurveyItem';

import { tasks, types1, types2 } from '@/data/surveyOptions';

import styles from './Survey.module.scss';

export default function Survey() {
	const [checkedTask, setCheckedTask] = useState(tasks[0].value);

	const [checkedType1, setCheckedType1] = useState(types1[0].value);
	const [checkedType2, setCheckedType2] = useState(types2[0].value);

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
