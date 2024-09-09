'use client';

import Link from 'next/link';
import { useState } from 'react';

import ArrowButton from '../../ArrowButton/ArrowButton';
import SurveyItem from '../SurveyItem/SurveyItem';

import styles from './Survey.module.scss';

export default function Survey() {
	const [checked, setChecked] = useState('task-1');

	const [count, setCount] = useState(1);

	const minCount = 1;
	const maxCount = 5;

	const forwardButtonDisabled = count === maxCount;
	const backButtonDisabled = count === minCount;

	const handleChecked = (e) => {
		setChecked(e.target.value);
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

	const options = [
		{
			id: 'task-1',
			name: 'tasks',
			value: 'task-1',
			text: 'Соединение деталей/материалов',
			extraText: '',
		},
		{
			id: 'task-2',
			name: 'tasks',
			value: 'task-2',
			text: 'Ламинация материалов',
			extraText: '',
		},
		{
			id: 'task-3',
			name: 'tasks',
			value: 'task-3',
			text: 'Крепление прокладок и уплотнителей',
			extraText: '',
		},
		{
			id: 'task-4',
			name: 'tasks',
			value: 'task-4',
			text: 'Создание разъемного соединения',
			extraText: '',
		},
		{
			id: 'task-5',
			name: 'tasks',
			value: 'task-5',
			text: 'Герметизация соединения',
			extraText: '',
		},
		{
			id: 'task-6',
			name: 'tasks',
			value: 'task-6',
			text: 'Защита поверхности',
			extraText: '',
		},
		{
			id: 'task-7',
			name: 'tasks',
			value: 'task-7',
			text: 'Подготовка поверхности для склеивания',
			extraText: '',
		},
		{
			id: 'task-8',
			name: 'tasks',
			value: 'task-8',
			text: 'Прочее',
			extraText: '',
		},
	];

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
							<div className={styles.surveyTitle}>
								Какая задача стоит перед Вами?
							</div>
							<ul className={styles.options}>
								{options.map((option) => (
									<SurveyItem
										key={option.id}
										id={option.id}
										name={option.name}
										value={option.value}
										text={option.text}
										extraText={option.extraText}
										checked={checked === option.value}
										onChange={handleChecked}
									/>
								))}
							</ul>
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
