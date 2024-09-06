'use client';

import Link from 'next/link';
import { useState } from 'react';

import ArrowButton from '../ArrowButton/ArrowButton';

import styles from './Decisions.module.scss';

export default function Decisions() {
	const [checked, setChecked] = useState('task-1');

	const [count, setCount] = useState(1);

	const minCount = 1;
	const maxCount = 5;

	const backButtonOpacity = count > minCount ? 1 : 0.2;

	// const forwardButtonOpacity = count < maxCount ? 1 : 0.2;

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
								<li className={styles.option}>
									<input
										type="radio"
										name="tasks"
										id="task-1"
										value="task-1"
										checked={checked === 'task-1'}
										onChange={handleChecked}
									/>
									<label htmlFor="task-1">Соединение деталей/материалов</label>
								</li>
								<li className={styles.option}>
									<input
										type="radio"
										name="tasks"
										id="task-2"
										value="task-2"
										checked={checked === 'task-2'}
										onChange={handleChecked}
									/>
									<label htmlFor="task-2">Ламинация материалов</label>
								</li>
								<li className={styles.option}>
									<input
										type="radio"
										name="tasks"
										id="task-3"
										value="task-3"
										checked={checked === 'task-3'}
										onChange={handleChecked}
									/>
									<label htmlFor="task-3">
										Крепление прокладок и уплотнителей
									</label>
								</li>
								<li className={styles.option}>
									<input
										type="radio"
										name="tasks"
										id="task-4"
										value="task-4"
										checked={checked === 'task-4'}
										onChange={handleChecked}
									/>
									<label htmlFor="task-4">Создание разъемного соединения</label>
								</li>
								<li className={styles.option}>
									<input
										type="radio"
										name="tasks"
										id="task-5"
										value="task-5"
										checked={checked === 'task-5'}
										onChange={handleChecked}
									/>
									<label htmlFor="task-5">Герметизация соединения</label>
								</li>
								<li className={styles.option}>
									<input
										type="radio"
										name="tasks"
										id="task-6"
										value="task-6"
										checked={checked === 'task-6'}
										onChange={handleChecked}
									/>
									<label htmlFor="task-6">Защита поверхности</label>
								</li>
								<li className={styles.option}>
									<input
										type="radio"
										name="tasks"
										id="task-7"
										value="task-7"
										checked={checked === 'task-7'}
										onChange={handleChecked}
									/>
									<label htmlFor="task-7">
										Подготовка поверхности для склеивания
									</label>
								</li>
								<li className={styles.option}>
									<input
										type="radio"
										name="tasks"
										id="task-8"
										value="task-8"
										checked={checked === 'task-8'}
										onChange={handleChecked}
									/>
									<label htmlFor="task-8">Прочее</label>
								</li>
							</ul>
						</div>
						{/* <div className={styles.surveyForm1}>
							<div className={styles.surveyTitle}>
								Какая задача стоит перед Вами?
							</div>
							<ul className={styles.options}>
								<li className={styles.option}>
									<input
										type="radio"
										name="tasks"
										id="task-3"
										value="task-3"
										checked={checked === 'task-3'}
										onChange={handleChecked}
									/>
									<label htmlFor="task-3">
										Крепление прокладок и уплотнителей
									</label>
								</li>
								<li className={styles.option}>
									<input
										type="radio"
										name="tasks"
										id="task-4"
										value="task-4"
										checked={checked === 'task-4'}
										onChange={handleChecked}
									/>
									<label htmlFor="task-4">Создание разъемного соединения</label>
								</li>
								<li className={styles.option}>
									<input
										type="radio"
										name="tasks"
										id="task-5"
										value="task-5"
										checked={checked === 'task-5'}
										onChange={handleChecked}
									/>
									<label htmlFor="task-5">Герметизация соединения</label>
								</li>
							</ul>
						</div> */}
						<div className={styles.controls}>
							<button
								className={styles.backButton}
								onClick={handleDec}
								disabled={backButtonDisabled}
							>
								<ArrowButton
									backgroundColor="transparent"
									// opacity={backButtonOpacity}
								/>
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
